// 定义一个混入对象
import {wechatUtil} from '@/util'

export let wechatMixin = {
  methods: {
    onMenuShareTimeline: function (config) {
      wechatUtil.shareTimeline(config)
    },
    onMenuShareAppMessage: function (config) {
      wechatUtil.shareAppMessage(config)
    }

  }
}
