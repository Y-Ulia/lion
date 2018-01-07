<template>
  <div class="mask activeRules">
    <div class="isActiveRules center">
      <div class="content">
        <div class="txt">
          <h3>一、存款赢积分好礼活动</h3>
          <p><strong>活动时间：</strong>2018年1月5日——2018年3月31日</p>
          <p><strong>活动细则：</strong>在活动期间到我行各营业网点办理一年期以上(含)定期存款的新老客户，每存1万元以上(含)均可获得刮刮卡一张，以1万元为单位递增，以此类推，多存多得，张张有积分，每张刮刮卡皆有机会获得10、50、200、500、1000、2000、4000积分，更有机会获得6000幸运大积分，积分可兑换相应物品。</p>
          <p><strong>积分兑换细则详见衡南农商银行下辖任一网点。</strong></p>
          <br>
          <p><strong>兑奖办法：</strong></p>
          <p>1、凡存入一年期以上（含）相应金额并获得刮刮卡的客户，如获得1000积分一下（含）的客户，凭存款回执单及刮刮卡上的积分到网点兑换相应物品；</p>
          <p>2、凡存入一年期以上（含）相应金额并获得刮刮卡的客户，如获得2000积分一上（含）的客户，凭存款回执单及刮刮卡上的积分并携带身份证到网点办理物品兑换手续，由总行在15个工作日内统一发放；</p>
          <p>3、凡在本行任一网点办理相应业务，满足条件并获得刮刮卡的客户，刮刮卡上所获得的积分可累计兑换相应物品，上限不得超过200积分（获得200积分及以上不可累计）；</p>
          <p>4、一张存款回执单只能领取一次物品（参加微信游戏活动，已经凭存款回执单领取物品的，将不可重复领取刮刮卡积分物品）；</p>
          <p>5、获得积分的客户请在活动截止日期，即2018年3月31日前领取相应物品，过期积分作废；</p>
          <p>6、参与此活动并获得刮刮卡兑换物品的客户，不可提前支取；</p>
          <p>7、刮刮卡一旦离柜后，如有损毁，导致刮卡区无法识别，皆按无效处理，不予兑换。</p>
          <br>
          <h3>二、电子银行赢积分好礼活动</h3>
          <p><strong>活动时间：</strong>2018年1月5日——2018年2月28日</p>
          <p><strong>活动细则：</strong>凡在活动期间到衡南农商银行各网点办理以下电子银行业务，即可获得刮刮卡一张，张张有积分，每张刮刮卡皆有机会获得10积分、50积分、200积分、500积分、1000积分、2000，更有机会获得4000大积分，积分可兑换心仪物品</p>
          <br>
          <p><strong>电子银行业务包含：</strong></p>
          <p>1、衡南农商银行手机银行新开户并完成一笔转账交易；</p>
          <p>2、衡南农商银行社保卡激活；</p>
          <p>3、衡南农商银行信用卡申办，使用衡南农商银行信用卡消费100元及以上。</p>
          <br>
          <p><strong>兑奖办法：</strong></p>
          <p>1、凡完成以上任一电子银行业务办理的客户，凭办理凭证（信用卡消费需消费凭条）在衡南农商银行任一网点皆可领取刮刮卡，凭刮刮卡上的积分兑换相应物品；</p>
          <p>2、凡在衡南农商银行办理相应业务，满足条件并获得刮刮卡的客户，刮刮卡上所获得的积分可累计兑换相应物品，累计上限不得超过200积分（获得200积分及以上不可累计）；</p>
          <p>3、一张电子银行业务办理凭证或信用卡消费凭条只能兑换一次物品；</p>
          <p>4、获得积分的客户请在活动截止日期，即2018年3月31日前兑换相应物品，过期积分作废。</p>
          <br>
          <h3>大年初三赢彩头活动：</h3>
          <p><strong>活动时间：</strong>2018年2月18日8：30—10：30</p>
          <p>凡在活动期间到衡南农商银行各网点办理一年定期存款5万元以上(含)，在获得原有刮刮卡奖励的同时，可额外获得网点现场赢彩头抽奖活动一次，每个网点抽奖限量50名，抽必中，每个奖项皆有机会获得10积分、500积分、1000积分，积分可兑换心仪物品。</p>
          <br>
          <p><strong>网点还有情人节活动、三八节活动等您哦。</strong></p>
        </div>
      </div>
      <router-link to="/market" tag="div">
        <img class="return_btn" src="../assets/return_btn.png" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'isActiveRules'
  }
</script>

<style scoped>
.activeRules {
  background: transparent url('../assets/red_bg_02.jpg') no-repeat;
  background-size: cover;
}
.isActiveRules {
  margin: 15% auto auto;
  width: 75%;
  height: 85%;
}
.isActiveRules .content {
  width: 90%;
  height: 70%;
  padding: 5%;
  margin: 0 auto;

  text-align: left;
  color: #fff;
  border-radius: 10px;
  box-shadow: 3px 3px #ff0,
              3px -3px #ff0,
              -3px 3px #ff0,
              -3px -3px #ff0;
}
.isActiveRules .content .txt {
  padding-right: 3px;
  height: 100%;
  background-color: red;
  box-shadow: 5px 5px 10px red, 5px -5px 10px red, -5px 5px 10px red, -5px -5px 10px red;
  overflow-x: hidden;
  overflow-y: auto;
}
.isActiveRules .content .txt::-webkit-scrollbar {
  width: 8px;
  /*background-color: #ccc;*/
  border-radius: 5px;
}

.isActiveRules .content .txt::-webkit-scrollbar-button:start:decrement,
.isActiveRules .content .txt::-webkit-scrollbar-button:end:increment {
  display: none;
}
.isActiveRules .content .txt::-webkit-scrollbar-button:vertical:start:increment,
.isActiveRules .content .txt::-webkit-scrollbar-button:vertical:end:decrement {
  display: none;
}
.isActiveRules .content .txt::-webkit-scrollbar-button:end:increment {}
.isActiveRules .content .txt::-webkit-scrollbar-button:start:decrement {
  background-color: transparent;
}
.isActiveRules .content .txt::-webkit-scrollbar-track-piece:vertical:start {
  /*background-color: #000;*/
}
/* 垂直滚动条的第三层轨道的下段 */
.isActiveRules .content .txt::-webkit-scrollbar-track-piece:vertical:end {
  background-color: transparent;
}
/* 垂直滚动条的滑动块 */
.isActiveRules .content .txt::-webkit-scrollbar-thumb:vertical {
  background: transparent url('../assets/scrollbar.png') center no-repeat;
  background-size: 100%;
}

.isActiveRules .content h3 {
  font-size: 18px;
}
.isActiveRules .content p {
  color: #eee;
  font-size: 14px;
  line-height: 1.8
}
.isActiveRules .content strong {
  color: #fff
}
.isActiveRules .return_btn {
  display: block;
  width: 50%;
  margin: 10% auto 0;
}
</style>