require('./css/reset.css')
require('./css/base.css')
require('./css/css3.css')
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'//优化移动端click事件延迟300ms问题
import isWxBrowser from '#/isWxBrowser'
import removeClass from '#/removeClass'
import addClass from '#/addClass'

Vue.config.productionTip = false;
FastClick.attach(document.body);

// bgm
window.onload = function() {
  if(isWxBrowser()) {
    document.addEventListener("WeixinJSBridgeReady", audioAutoPlay, false);
  // document.addEventListener('YixinJSBridgeReady', audioAutoPlay, false);
  } else {
    audioAutoPlay()
  // var isAppInside = /micromessenger/i.test(navigator.userAgent.toLowerCase()) || /yixin/i.test(navigator.userAgent.toLowerCase());
  // if (!isAppInside) { //给非微信易信浏览器
  //   audioAutoPlay('myMusic');
  // }
  }
}

function audioAutoPlay(id) { //全局控制播放函数
  var audio = document.getElementById(id),
  play = function() {
      audio.play();
      document.removeEventListener("touchstart", play, false);
    };

  audio.play();
  document.addEventListener("touchstart", play, false);
}

function audioAutoPlay() {
  var audio = document.getElementById('myMusic');//音频标签

  audio.play();//载入即可播放

  function touchplay() {//触碰到也播放
    audio.play();
    document.removeEventListener("touchstart", touchplay,false)
  }

  document.addEventListener("touchstart", touchplay, false);

  document.addEventListener("touchend", function(e) {
    let music = e.target;
    if(music.id == 'music') {//bgm小图标
      if(audio.paused) {
        audio.play();
        addClass(music,'rotate')
      } else {
        audio.pause();
        removeClass(music,'rotate')
      }
    }
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
