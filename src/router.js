import Vue from 'vue'
import Router from 'vue-router'
import Admin from './views/Admin.vue'
import Game from './views/Game.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'admin',
      component: Admin
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    }
  ]
})
