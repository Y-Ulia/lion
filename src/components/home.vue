<template>
  <div class="index">
    <div class="home" v-show="!isGameRules">
      <img class="shandian center" src="../assets/dian.png" alt="">
      <img class="game_title" src="../assets/game_title.png" alt="">
      <img class="big_bone" src="../assets/big_bone.png" alt="">
      <div class="footer">
        <div class="left">
          <router-link :to="{ name: 'isPrize'}" tag="div" v-if="isPlayed">
            <img class="prize_btn" src="../assets/chakan.png" alt="" >
          </router-link>
          <router-link :to="{ name: 'game'}" tag="div"  v-else>
            <img class="start_game_btn" src="../assets/start_game_btn.png" alt="">
          </router-link>
          <router-link :to="{ name: 'isGameRules'}" tag="div">
            <img class="game_rules_btn" src="../assets/game_rules_btn.png" alt="">
          </router-link>
        </div>
        <div class="right">
          <img class="lion_dance" src="../assets/lion_dance.png" alt="">
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'index',
    computed: {
      isGameRules() {
        return this.$route.name === 'isGameRules' ? true : false;
      },
      isPlayed() {
        return localStorage.token;
      }
    },
    created() {
      if(localStorage.token) {
        this.$router.push('/home/isPlayed')
      }
    },
    mounted() {
      this.$nextTick(() => {
        if(!localStorage.market) {
          this.$router.push('/');
        }
      })
    },
  }
</script>

<style>
@import '../css/home.css';
</style>