import Vue from 'vue'
import Router from 'vue-router'
import HelloWechat from '@/components/HelloWechat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWechat',
      component: HelloWechat
    }
  ]
})
