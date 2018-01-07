<template>
<div class="mask">
  <div class="isPrize center" ref="isPrize">
    <div class="isPrize_con">
      <div class="img">
        <img class="prize" v-if="isPrize_img === 1" src="../assets/prize_first.png" alt="" style="width:54%">
        <img class="prize" v-else-if="isPrize_img === 2" src="../assets/prize_second.png" alt="" style="width:50%">
        <img class="prize" v-else-if="isPrize_img === 3" src="../assets/prize_third.png" alt="">
        <img class="prize" v-else src="../assets/prize_four.png" alt="" style="width:70%">
        <!-- <img class="prize" v-else-if="isPrize_img === 1" src="../assets/prize_first_02.png" alt="" style="width:60%"> -->
      </div>
      <div class="isPrize_title">
        奖品兑换码：{{ isPrize }}
      </div>
      <div class="isPrize_txt" :style="{height:height+'px'}">
        <h3>兑奖条件：</h3>
        <p>1、一等奖：1年定期存款10万元及以上；</p>
        <p>2、二等奖：1年定期存款5万元及以上；</p>
        <p>3、三等奖：1年定期存款3万元及以上；</p>
        <p>4、畅享礼：1年定期存款1万元及以上。</p>
        <p>注：以上存款均需满足一年定期条件。</p>

        <h3>郑重声明：</h3>
        <p>1、一张存款回执单只能领取一次物品（参加网点刮刮卡活动，已经凭存款回执单领取物品的，将不可重复领取微信游戏获得的礼品。）；</p>
        <p>2、获奖者请在活动截止日期，即2018年3月31日前领取相应礼品，过期作废；</p>
        <p>3、参与微信活动并兑换礼品的客户，不可提前支取；</p>
        <p><strong>*详询辖内各网点。</strong></p>
      </div>
    </div>
    <img src="../assets/my_prize.png" alt="">
    <!-- <router-link tag="div" class="close_btn" to="/home"></router-link> -->
    <div class="close_btn" @click="getRoute()"></div>
  </div>
</div>
</template>

<script>
  import getStyle from '#/getStyle';
  export default {
    name: 'isPrize',
    data() {
      return {
        isPrize: localStorage.token
      }
    },
    computed: {
      isPrize_img() {
        return Number(localStorage.img);
      },
      height() {
        return getStyle(document.getElementsByTagName('html')[0],'height').replace('px','')*0.35;
      }
    },
    methods: {
      getRoute() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
.isPrize {
  width: 72%;
  height: 80%;
  background-color: transparent;
}
.isPrize img {
  display: block;
  width: 100%;
}
.isPrize_con {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 18%;
  background-color: transparent;
  font-size: 12px;
}
.isPrize_con .img {
  width: 60%;
  margin: 0 auto;
}
.isPrize_con .prize {
  width: 80%;
  margin: 0 auto;
}
.isPrize_txt {
  overflow-y: auto;
  width: 80%;
  /*height: 50%;*/
  margin: 0 auto;
  text-align: left;
}
.isPrize_txt p {
  font-size: 12px;
  color: #eee;
  line-height: 1.25;
}
.isPrize_title {
  width: 80%;
  margin: 2% auto;
  border-radius: 15px;
  text-align: center;
  font-size: 16px;
  background-color: red;
  box-shadow: 0 2px #000, inset 0 1px #000;
}
</style>

