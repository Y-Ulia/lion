<template>
  <div class="mask gameRules">
    <div class="isGameRules center">
      <div class="content">
        <div class="txt">
          <p><strong>活动时间：</strong></p>
          <p>2018年1月5日——2018年3月31日</p>
          <p><strong>活动细则：</strong></p>
          <p>凡在活动期间，通过微信扫描我行二维码、微信分享、公众号推送等方式参加衡南农商银行“玩转金骨棒”微信游戏，移动手机屏幕中小狗接取掉落的金骨棒，当在规定时间接到足够数量金骨棒，即可获得一个宝箱，点开宝箱即可获得各种礼品，更有OPPO手机等您哦，输入手机号码获得认证码并认证，领取礼品兑换码，凭兑换码到银行办理相应业务即可兑换礼品。</p>
          <br>
          <p><strong>奖项设置：</strong></p>
          <p><span style="color:#fff;">一等奖：</span>品牌手机 5名</p>
          <p><span style="color:#fff;">二等奖：</span>智能洗衣机 15名</p>
          <p><span style="color:#fff;">三等奖：</span>厨房三件套 20名</p>
          <p><span style="color:#fff;">畅享礼：</span>洗衣粉、面条、纸抽任一 80000名</p>
          <br>
          <p><strong>兑奖条件：</strong></p>
          <p>1、一等奖：1年定期存款10万元及以上</p>
          <p>2、二等奖：1年定期存款5万元及以上</p>
          <p>2、三等奖：1年定期存款3万元及以上</p>
          <p>2、畅享礼：1年定期存款1万元及以上</p>
          <p><strong>(注：以上存款均需满足一年以上(含)定期存款条件)。</strong></p>
          <br>
          <p><strong>兑奖办法：</strong></p>
          <p>1、获奖者凭借兑奖码及存款回执单到衡南农商银行任一网点皆可兑换物品，获得一等奖的客户凭借兑奖码及存款回执单到衡南农商银行营业部（地址：湖南省衡阳市衡南县云集镇雅园路88号）兑换物品；</p>
          <p>2、一张存款回执单只能领取一次物品（参加网点刮刮卡活动，已经凭存款回执单领取物品的，将不可重复领取微信游戏获得的物品。）；</p>
          <p>3、获奖者请在活动截止日期，即2018年3月31日前领取相应物品，过期作废；</p>
          <p>4、参与微信活动并兑换物品的客户，不可提前支取。</p>
          <p><strong>*详询辖内各网点。</strong></p>
        </div>
      </div>
      <router-link tag="div" class="close_btn" to="/home"></router-link>
      <!-- <router-link to="/home" tag="div">
        <img class="return_btn" src="../assets/return_btn.png" alt="">
      </router-link> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'isGameRules',
  }
</script>

<style scoped>
.isGameRules {
  margin: auto;
  width: 75%;
  height: 70%;
}
.isGameRules .content {
  width: 90%;
  height: 100%;
  padding: 5%;
  margin: 0 auto;
  text-align: left;
  background-color: red;
  color: #fff;
  border-radius: 10px;
  box-shadow: 3px 3px #ff0,
              3px -3px #ff0,
              -3px 3px #ff0,
              -3px -3px #ff0;
}
.isGameRules .content .txt {
  overflow-x: hidden;
  overflow-y: auto;
  padding-right: 3px;
  height: 100%;
}
.isGameRules .content h3 {
  font-size: 18px;
}
.isGameRules .content p {
  color: #eee;
  font-size: 14px;
  line-height: 1.8;
}
.isGameRules .content strong {
  color: #fff
}
.isGameRules .content .txt::-webkit-scrollbar {
  width: 8px;
  /*background-color: #ccc;*/
  border-radius: 5px;
}

.isGameRules .content .txt::-webkit-scrollbar-button:start:decrement,
.isGameRules .content .txt::-webkit-scrollbar-button:end:increment {
  display: none;
}
.isGameRules .content .txt::-webkit-scrollbar-button:vertical:start:increment,
.isGameRules .content .txt::-webkit-scrollbar-button:vertical:end:decrement {
  display: none;
}
.isGameRules .content .txt::-webkit-scrollbar-button:end:increment {}
.isGameRules .content .txt::-webkit-scrollbar-button:start:decrement {
  background-color: transparent;
}
.isGameRules .content .txt::-webkit-scrollbar-track-piece:vertical:start {
  /*background-color: #000;*/
}
/* 垂直滚动条的第三层轨道的下段 */
.isGameRules .content .txt::-webkit-scrollbar-track-piece:vertical:end {
  background-color: transparent;
}
/* 垂直滚动条的滑动块 */
.isGameRules .content .txt::-webkit-scrollbar-thumb:vertical {
  background: transparent url('../assets/scrollbar.png') center no-repeat;
  background-size: 100%;
}
</style>