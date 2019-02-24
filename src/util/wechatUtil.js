
import * as api from '@/api'
import Vue from 'vue'

export default {
  isReady: false,
  /** 注册微信jssdk ready和error事件 */
  bindWechatEvent (readyEvent, errorEvent) {
    this.registerReadyEvent(readyEvent)
    this.registerErrorEvent(errorEvent)
  },
  /** ready事件 */
  registerReadyEvent (fn) {
    let _this = this
    Vue.wechat.ready(function () {
      _this.isReady = true
      fn()
    })
  },
  /** error事件 */
  registerErrorEvent (fn) {
    Vue.wechat.error(fn)
  },
  /** wechat jssdk接入配置 */
  setWechatConfig (url, apiList) {
    api.getSignature(url).then(({data}) => {
      Vue.wechat.config({...data, ...{jsApiList: apiList}})
    }).catch(err => {
      console.log(err)
    })
  },
     /** ready事件前置处理判断,确保函数都在ready中执行 */
  readyPreProcess: function (fn) {
    if (this.isReady) {
      fn()
    } else {
        // 等ready方法执行后再执行这个函数
      Vue.wechat.ready(function () {
        fn()
      })
    }
  },
  // 发送给朋友圈
  shareTimeline (config) {
    this.readyPreProcess(() => {
      Vue.wechat.onMenuShareTimeline(config)
    })
  },
  // 发送给朋友
  shareAppMessage (config) {
    this.readyPreProcess(() => {
      Vue.wechat.onMenuShareAppMessage(config)
    })
  }

}
