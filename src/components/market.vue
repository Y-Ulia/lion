<template>
  <div class="market">
    <img class="logo" src="../assets/logo.png" alt="">
    <div class="red_envelopes_rain">
      <img class="rain1" src="../assets/red_envelopes_rain_01.png" alt="">
      <img class="rain2" src="../assets/red_envelopes_rain_02.png" alt="">
      <img class="cloud_01" src="../assets/cloud_01.png" alt="">
      <img class="cloud_02" src="../assets/cloud_02.png" alt="">
      <img class="cloud_03" src="../assets/cloud_03.png" alt="">
      <img class="big_lion" src="../assets/lion.png" alt="">
      <img class="title_name" src="../assets/title_name.png" alt="">
    </div>
    <div class="mfooter">
      <div class="activity_rules">
        <img class="rules_name" src="../assets/rules_name_btn.png" alt="">
        <router-link to="/isActiveRules">
          <img class="activity_rules_btn" src="../assets/activity_rules_btn.png" alt="">
        </router-link>
      </div>
      <div class="partake_game">
          <img class="game_name" src="../assets/game_name_bg.png" alt="">
          <router-link to="home">
              <img class="partake_game_btn" src="../assets/partake_game_btn.png" alt="">
          </router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'
  import isWxBrowser from '#/isWxBrowser'
  export default {
    name: 'market',
    created() {
      axios.get('/pv?field=pv')
      //页面需要缓存标记一下
      localStorage.setItem('market', 'market');

      if(!isWxBrowser()) {
        this.$router.push('/market/isWxBrowser')
      }
      if(localStorage.token) {
        this.$router.push('/home/isPlayed')
      }
    }
  }
</script>

<style>
  @import '../css/market.css';
</style>







