<template>
  <div class="mask">
    <div class="isPlayed center boxShadow">
      <p>抱歉！您已参与过游戏。</p>
      <p>感谢您的参与，祝您新春愉快。</p>
      <router-link tag="div" class="close_btn" to="/home"></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'isPlayed'
  }
</script>

<style scoped>
.isPlayed {
  padding-top: 12%;
  height: 18%;
}
.isPlayed p {
  display: flex;
  justify-content: center;
}
</style>