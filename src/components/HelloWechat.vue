 <template>
     <div>测试微信</div>
</template>

<script>
import {wechatMixin} from '@/mixins'
import {urlUtil} from '@/util'
export default {
  name: '',

  mixins: [wechatMixin],

  components: {},

  props: {},

  data () {
    return {

    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {
    this.bindShareTimeLine()
    this.bindShareAppMessage()
  },

  destroyed () {},

  methods: {
    // 微信朋友圈
    bindShareTimeLine () {
      this.onMenuShareTimeline({
        title: '发送到朋友圈', // 分享标题
        link: location.href.split('#')[0], // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: `${urlUtil.getProjectPath()}/static/img/share.jpg`, // 分享图标
        success: function () {
    // 用户点击了分享后执行的回调函数
        }
      })
    },
    // 发送给朋友
    bindShareAppMessage () {
      this.onMenuShareAppMessage({
        title: '发送给朋友', // 分享标题
        desc: '这里是描述信息', // 分享描述
        link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: `${urlUtil.getProjectPath()}/static/img/share.jpg`, // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
// 用户点击了分享后执行的回调函数
        }
      })
    }
  }
}
</script>

<style scoped>

</style>