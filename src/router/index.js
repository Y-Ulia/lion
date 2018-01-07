import Vue from 'vue'
import Router from 'vue-router'
import Market from '@/market'
import Home from '@/home'
import Game from '@/game'

// 组件懒加载，已被页面打开速度更快
const isWxBrowser   = () => import('~/isWxBrowser.vue')
const isActiveRules = () => import('~/isActiveRules.vue')
const isGameRules   = () => import('~/isGameRules.vue')
const isPlayed      = () => import('~/isPlayed.vue')
const isPrize       = () => import('~/isPrize.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'market'
    },
    {
      path: '/isActiveRules',
      name: 'isActiveRules',
      component: isActiveRules
    },
    {
      path: '/market',
      name: 'market',
      component: Market,
      children: [
        {
          path: 'isWxBrowser',
          name: 'isWxBrowser',
          component: isWxBrowser
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'isGameRules',
          name: 'isGameRules',
          component: isGameRules
        },
        {
          path: 'isPlayed',
          name: 'isPlayed',
          component: isPlayed
        },
        {
          path: 'isPrize',
          name: 'isPrize',
          component: isPrize
        }
      ]
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    }
  ]
})
