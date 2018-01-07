<template>
  <div class="game" @click="getBtnInfo($event)">
    <div class="main">
      <div class="time">{{ showTime }}s</div>
      <div class="bonesTop" ref="bonesTop">
        <div class="bone" v-for="(k,i) in bonesTop" :key="k" :class="'t'+i" :style="{height: boneHeight+'px'}">
        </div>
      </div>
      <audio preload ref="audio">
        <source src="/audio/bone.mp3">
      </audio>
      <div class="bones" ref="bones"></div>
      <div class="lion" ref="lion" :style="{
        width: lionWidth+'px',
        height: lionHeight+'px',
        transform: 'translateX('+transX+'px) scale('+scale+') rotateY('+rotateY+'deg)'}">
      </div>
      <div class="score">
        <span class="txt">骨力值</span>
        <span class="box">
          <span class="white">
            <img :style="{width: length}" src="../assets/pro.png" alt="">
          </span>
        </span>
        <span class="num">{{ score }}</span>
      </div>
    </div>

    <div class="mask" v-show="mask">
      <img v-show="isPlay" class="center" style="width:100%;" src="../assets/p.png" alt="">
      <img v-show="isPlay" class="play_btn" src="../assets/play_game_btn.png" alt="">
      <!-- <div v-show="isPlay" class="center" style="padding-top:100px;height:20px;line-height:20px;color:#eee;text-align:center;font-size:12px;">左右倾斜手机，开始游戏吧</div> -->

      <div v-show="isFail" class="fail center">
        <img class="fail_popup" src="../assets/fail_popup_box.png" alt="">
        <div class="again">
          <img class="again_btn" src="../assets/once_more_btn.png" alt="">
        </div>
        <div class="close_btn"></div>
      </div>

      <div v-show="isSuccess" class="isSuccess center">
        <img class="baoxiang" src="../assets/success_box.png" alt="">
        <img class="bh center" src="../assets/bh.png" alt="">
        <img class="gongxi center" src="../assets/gx.png" alt="">
        <img class="txt_info center" src="../assets/success_tip_fone.png" alt="">
        <img class="success_btn" src="../assets/open_btn.png" alt="">
      </div>

      <div v-show="isTest" class="isTest center boxShadow">
        <p style="color:#eee;">为确保奖品的正常领取请输入</p>
        <h3>正确的手机号码并验证</h3>
        <div class="isPhoneBox">
          <input ref="isPhone" class="isPhone" type="number" v-model="phone" placeholder="请填写手机号码">
          <span class="btn" style="font-size:12px;background:rgba(0,0,0,.3);color:#fff;">{{countInfo}}</span>
        </div>
        <div class="isNumBox">
          <input ref="isNum" v-model="code" class="isNum" type="text" placeholder="请输入验证码">
        </div>
        <p style="font-size:12px;color:#fff;margin-top:10px;text-align:center;">(每个手机号码只能参与一次领奖)</p>
        <img class="test_btn" src="../assets/prize.png" alt="">
        <p style="margin-top:5px;font-size:12px;color:#000;text-align:center;line-height:20px;">{{ inf }}</p>
        <div class="close_btn"></div>
      </div>

      <div v-show="isPriza" class="isPriza center">
        <div class="prize_box">
          <img class="prize" v-if="isPrize_img == 1" src="../assets/prize_first.png" alt="" style="width:54%">
          <img class="prize" v-else-if="isPrize_img == 2" src="../assets/prize_second.png" alt="" style="width:50%">
          <img class="prize" v-else-if="isPrize_img == 3" src="../assets/prize_third.png" alt="">
          <img class="prize" v-else src="../assets/prize_four.png" alt="" style="width:70%">
          <!-- <img class="prize" v-else-if="isPrize_img === 1" src="../../assets/prize_first_02.png" alt="" style="width:60%"> -->
          <h2>恭喜您获得{{ prize_name }}</h2>
          <p>(奖品以实物为准)</p>
          <div class="btn">
            <img class="priza_btn" src="../assets/prize_btn.png" alt="">
            <img class="share_btn" src="../assets/share_btn.png" alt="">
          </div>
        </div>
        <img class="" src="../assets/success_box2.png" alt="">
        <img class="decorate" src="../assets/success_box_decorate.png" alt="">
      </div>

      <div v-show="isShare" class="isShare center">
        <img class="share" src="../assets/share.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import velocity from 'velocity-animate'
  import random from '#/random'
  import zerofill from '#/zerofill'
  import getStyle from '#/getStyle'
  import cloneNode from '#/cloneNode'
  import removeNode from '#/removeNode'
  import addChildNode from '#/addChildNode'
  import isPoneAvailable from '#/isPoneAvailable'
  import cancelAnimationFrame from '#/cancelAnimationFrame'
  import requestAnimationFrame from '#/requestAnimationFrame'

  const html          = document.getElementsByTagName('html')[0];
  const width         = html.clientWidth;//游戏可视化宽度
  const height        = html.clientHeight;//游戏可视化高度
  const gameTotalTime = 30000;//设定游戏限定时间
  const boneDuration  = 3600;//骨头下落最大时长
  const boneThrottle  = 50;//骨头插入动画节流参数
  const boneMax       = 8;//骨力值最大趋值参数
  const boneMin       = 1;//骨力值最小参数
  const lionMoveParam = 110;//狮子狗移动系数
  const lionMaxScale  = 4;//狮子狗最大缩放比例
  const lionUpStep    = .2;//狮子狗每次缩放系数
  const phoneTilt     = 2;//左右晃动手机陀螺仪触发狮子狗的最大倾斜角度
  const sumTime       = 60;//倒计时

  html.style['minHeight'] = height+'px';//固定高度，避免输入法影响页面布局

  export default {
    name: 'game',
    data() {
      return {
        bonesTop: 5,//顶部悬挂的骨头总数
        bonesNode: '',//克隆的悬挂的骨头集合
        gamma: 0,//陀螺仪左右倾斜角度
        first: true,//首个骨头节点插入dom文档里
        transX: 10,//当前狮子狗距离左边的距离
        scale: 1,//狮子狗初始缩放比例
        rotateY: 0,//狮子狗左右变向，默认向左
        score: 0,//骨力值
        isPlay: true,//开启游戏
        isFail: false,
        isSuccess: false,
        isTest: false,
        isPriza: false,
        isShare: false,
        showTime: '',//显示游戏最大时长
        phone: '',
        code: '',
        countInfo: '获取验证码',
        inf: '',
        isPrize_img: '',
        raf: ''//游戏动画帧
      }
    },
    created() {
      if(localStorage.token) {
        this.$router.push('/home/isPlayed')
      }
    },
    mounted() {
      this.$nextTick(this.initGame)
    },
    computed: {
      mask() {
        return this.isPlay || this.isFail || this.isSuccess || this.isTest || this.isPriza || this.isShare;//遮罩状态
      },
      boneHeight() {
        return parseInt(width/100*16);//按照当前图片的实际宽度算出
      },
      boneDiagonal() {
        return parseInt(Math.sqrt(this.boneHeight))//计算骨头的对角线长度
      },
      lionWidth() {
        return parseInt(width/100*16);//按照当前图片的实际宽度算出
      },
      lionHeight() {
        // 469/365
        // 829/670
        return parseInt(469/365*width/100*16);//按照图片的宽高比例及当前图片的实际宽度算出
      },
      activityHeight() {
        return parseInt(height-width/5-this.boneDiagonal);//按照可视化高度减去顶部与底部及骨头对角线高度算出
      },
      initTime() {
        const initTime = this.isPlay ? '' : new Date().getTime();//初始化游戏开始时间
        return initTime;
      },
      length() {
        return this.score + '%';//骨力值百分比
      },
      prize_name() {
        switch(Number(this.isPrize_img)) {
          case 1:
          return '品牌手机';
          case 2:
          return '智能洗衣机';
          case 3:
          return '厨房三件套';
          default:
          return '畅享礼';
        }
      },
      // isPrize_img() {
      //   return Number(localStorage.img);
      // }
    },
    methods: {
      getBtnInfo(e) {
        switch(e.target.className) {
          case 'play_btn':
            this.isPlay = false;
            axios.get('/pv?field=button_pv')
            this.gameStart();
          break;
          case 'again_btn':
            this.$refs.bones.innerHTML = '';
            this.initParam();
          break;
          case 'close_btn':
            this.$router.push('/home')
          break;
          case 'success_btn':
            this.isSuccess = false;
            this.isTest = true;
            this.$refs.isPhone.addEventListener('click', () => {
              setTimeout(() => {
                this.scrollIntoView(true);
              }, 100);
            },false);
            this.$refs.isNum.addEventListener('click', () => {
              setTimeout(() => {
                this.scrollIntoView(true);
              }, 100);
            },false);
            // 缓存本地
            localStorage.game = 1;
          break;
          case 'btn':
            // 60s倒计时
            this.countDown();
          break;
          case 'test_btn':
            //后台接口
            this.getPrizeCode();
          break;
          case 'priza_btn':
            this.$router.push('./home/isPrize')
          break;
          case 'share_btn':
            this.isPriza = false;
            this.isShare = true;
            // this.$router.push('/home/isShare')
          break;
          default:
            if(this.isShare) {
              this.isPriza = true;
              this.isShare = false;
            }
          break;
        }
      },
      initParam() {
        this.transX    = parseInt(width/2-this.lionWidth/2);
        this.gamma     = 0;
        this.first     = true;
        this.scale     = 1;
        this.rotateY   = 0;
        this.score     = 0;
        this.isPlay    = true;
        this.isFail    = false;
        this.isSuccess = false;
        this.isTest    = false;
        this.isPriza   = false;
        this.showTime  = '';
        this.raf       = '';
        this.showTime  = String(gameTotalTime).substr(0,2);
        this.isPrize_img = localStorage.img;
        // this.showTime  = String(gameTotalTime).substr(0,2) + '.' + String(gameTotalTime).substr(2);
      },
      initGame() {
        if(!localStorage.market) {
          this.$router.push('/');
        }
        // 检测是否参与过游戏
        if(localStorage.game) {
          this.initParam();
          this.isPlay = false;
          this.isTest = true;
          if(localStorage.img) {
            this.isTest = false;
            this.isPrize = true;
          }
          return
        }

        //初始化游戏参数
        this.initParam();
        //拷贝一份需要插入的骨头节点
        this.bonesNode = Array.from(cloneNode(this.$refs.bonesTop).children);
        // 初始化当前浏览器支持的动画帧
        window.requestAnimationFrame = requestAnimationFrame();
        window.cancelAnimationFrame = cancelAnimationFrame();
        // 初始化陀螺仪监听
        this.isDeviceorientation() ?
          window.addEventListener("deviceorientation", this.getGamma, false) : '';
      },
      isDeviceorientation() {
        if(window.DeviceOrientationEvent) {
          return true
        }
      },
      getGamma(e) {
        if(e.gamma != null) {
          this.gamma = Number((e.gamma).toFixed(4));
        }
      },
      gameStart() {
        let mt = gameTotalTime - (new Date().getTime() - this.initTime);
        if(this.score<100) {
          if(mt>0) {
            mt = zerofill(mt,5);
            this.showTime = mt.substr(0,2);
            // this.showTime = mt.substr(0,2) + '.' + mt.substr(2);
            this.updateLion();
            if(this.first) {
              this.first = false;
              this.updateBones();
            } else {
              if(!random(boneThrottle)) {
                this.updateBones();
              }
            }
            this.raf = window.requestAnimationFrame(this.gameStart)
            // this.raf = raf(this.gameStart)
          } else {
            this.showTime = '00';
            // this.showTime = '00.000';
            this.gameOver()// 失败
          }
        } else {
          this.gamePass()// 成功
        }
      },
      gameOver() {
        let timer = setTimeout(() => {
          this.isFail = true;
          clearTimeout(timer);
          timer = null;
        }, 200)
      },
      gamePass() {
        let timer = setTimeout(() => {
          this.isSuccess = true;
          this.cleanEvent()
          clearTimeout(timer);
          timer = null;
        }, 200)
      },
      cleanEvent() {
        window.removeEventListener('deviceorientation',this.getGamma, false);// 取消陀螺仪监听
        window.cancelAnimationFrame(this.raf);// 清除动画帧
      },
      updateLion() {
        this.isDeviceorientation() ? this.deviceControl() : this.touchControl();
      },
      deviceControl() {
        if(this.gamma>phoneTilt) {// 向右移动
          this.rotateY = 180;
          this.transX = this.transX<(width-this.lionWidth) ?
            this.transX + (width-this.lionWidth)/lionMoveParam : width-this.lionWidth;
        } else if(this.gamma<-phoneTilt) {
          this.rotateY = 0;
          this.transX = this.transX>0 ?
            this.transX - (width-this.lionWidth)/lionMoveParam : 0;
        }
      },
      touchControl() {console.log('待开发')},
      updateBones() {
        var n     = random(this.bonesTop),
            bone  = cloneNode(this.bonesNode[n]),
            deg   = random(361),
            delay = random(300),
            lock  = false;
        addChildNode(this.$refs.bones,bone);
        velocity(bone, {
          translateY: this.activityHeight,
          rotateZ: deg+'deg'
        }, {
          easing: 'swing',
          delay: delay,
          duration: boneDuration,
          progress: () => {
            if(this.showTime == '00' || this.score == 100) {
            // if(this.showTime == '00.000' || this.score== 100) {
              velocity(bone,"stop", true)
            } else {
              if(!lock) {
                lock = this.condition(bone)
              }
            }
          }
        })
      },
      condition(bone) {
        var currBoneBottomY = this.translate(bone.style['transform'], 'Y'),
            currLionTopY    = this.activityHeight - parseInt(this.lionHeight*this.scale),
            // currLionTopY    = this.activityHeight - parseInt(this.lionHeight*this.scale),
            currLionBottomY = this.activityHeight;
             // - (this.scale > (lionMaxScale/2) ? parseInt(this.lionHeight*this.scale/2) : 0);
            // currLionBottomY = this.activityHeight - (this.scale > (lionMaxScale/2) ? parseInt(this.lionHeight*this.scale/2) : 0);

        if(currBoneBottomY >= currLionTopY && currBoneBottomY < currLionBottomY) {
          let currBoneLeftX  = parseInt(getStyle(bone,'left').replace('px',''));
          let currBoneRightX = currBoneLeftX + this.boneHeight;
          let currLionLeftX  = this.transX;
          let currLionRightX = currLionLeftX + this.lionWidth;

          if((currBoneLeftX>=currLionLeftX && currBoneLeftX<=currLionRightX) || (currBoneRightX>currLionLeftX && currBoneRightX<=currLionRightX)) {
            if(this.scale<lionMaxScale) {
              this.scale = Number((this.scale + lionUpStep).toFixed(1));//狮子狗长大
            }
            if(this.score < 100 - boneMax + boneMin) {
              this.score += random(boneMax,boneMin);//骨力值增长
            } else {
              this.score = 100;
            }
            // 音效
            // bone.children[0].play();
            this.$refs.audio.pause();
            this.$refs.audio.play();
            // removeNode(bone);
            bone.style.display = 'none';
            return true;
          }
        }
      },
      translate(str,xy) {
        if(!str) { return }
        let translate = str.split(' ')[0];
        return parseInt(translate.replace('translate'+xy+'(','').replace('px)',''))
      },
      getPhoneCode() {
        axios.get('/getvcode',{
          params: {
            mobile: this.phone
          }
        }).then((res) => {
          if(!Number(res.data.status)) {
            console.log('手机验证码发送成功')
          }
        }, (err) => {
          console.log('手机验证码发送失败')
        })
      },
      getPrizeCode() {
        if(!this.phone || !this.code) {return}
        if(!isPoneAvailable(this.phone)) {
          alert('输入不合法')
          return
        }
        if(this.countInfo == '获取验证码') {
          alert('请获取验证码并输入')
          return
        }
        this.inf = '请稍等...';
        axios.get('/getpcode',{
          params: {
            mobile: this.phone,
            vcode: this.code
          }
        }).then((res) => {
          let data = res.data;
          if(data.status == 0) {
            this.isTest = false;
            this.isPrize_img = Number(data.prize);
            localStorage.setItem('token', data.pcode)//兑奖码
            localStorage.setItem('img', data.prize)//中奖礼品
            this.isPriza = true;
          } else {
            alert(data.prize.replace(/\\u/g, '%u'));
          }
        }, (err) => {
          console.log('请求发送错误')
        })
      },
      countDown() {
        if(!this.phone) {return}
        if(this.countInfo != '获取验证码') {return}
        //  发送手机验证码请求
        this.getPhoneCode();
        var initTime = new Date().getTime(), raf, _this = this;
        x();
        function x() {
          var currTime = new Date().getTime(),
              ct = sumTime - parseInt((currTime - initTime)/1000);
          if(ct>=0) {
            _this.countInfo = ct+'s';
            raf = window.requestAnimationFrame(x);
          } else {
            _this.countInfo = '获取验证码'
            window.cancelAnimationFrame(raf)
          }
        }
      }
    }
  }
</script>

<style>
@import '../css/game.css';
@import '../css/bone.css';
@import '../css/score.css';
</style>