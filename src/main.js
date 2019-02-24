// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from '@/router'
import App from './App'
import { WechatPlugin, AjaxPlugin } from 'vux'
import {wechatUtil} from '@/util'

Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)

wechatUtil.bindWechatEvent(() => {}, (err) => {
  console.log(err)
})

wechatUtil.setWechatConfig(window.location.href.split('#')[0], ['onMenuShareTimeline', 'onMenuShareAppMessage'])

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
