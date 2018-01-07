<template>
  <div class="mask">
    <div class="isWeixinBrowser center boxShadow">
      <p>提示：</p>
      <p>请在微信端打开</p>
      <!-- <router-link tag="div" class="close_btn" to="/market"></router-link> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'isWxBrowser'
  }
</script>

<style scoped>
.isWeixinBrowser {
  padding-top: 12%;
  height: 18%;
}
.isWeixinBrowser p {
  display: flex;
  justify-content: center;
}
</style>