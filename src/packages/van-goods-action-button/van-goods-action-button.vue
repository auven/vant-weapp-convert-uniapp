<template>
  <van-button
    :id="id"
    :lang="lang"
    :type="type"
    :color="color"
    :plain="plain"
    :loading="loading"
    :disabled="disabled"
    :open-type="openType"
    :class="mainClass"
    custom-class="van-goods-action-button__inner"
    :business-id="businessId"
    :session-from="sessionFrom"
    :app-parameter="appParameter"
    :send-message-img="sendMessageImg"
    :send-message-path="sendMessagePath"
    :show-message-card="showMessageCard"
    :send-message-title="sendMessageTitle"
    @click="onClick"
    @error="bindError"
    @contact="bindContact"
    @opensetting="bindOpenSetting"
    @getuserinfo="bindGetUserInfo"
    @getphonenumber="bindGetPhoneNumber"
    @launchapp="bindLaunchApp"
  >
    {{ text }}
    <slot></slot>
  </van-button>
</template>

<script>
import VanButton from '../van-button/van-button'
import { VantComponent } from '../common/component'
import { ChildrenMixin } from '../mixins/relation'
import { link } from '../mixins/link'
import { button } from '../mixins/button'
import { openType } from '../mixins/open-type'
const utils = require('../wxs/utils')
export default {
  components: {
    VanButton
  },
  ...VantComponent({
    mixins: [link, button, openType, ChildrenMixin('vanGoodsAction')],
    props: {
      text: String,
      color: String,
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      type: {
        type: String,
        default: 'danger'
      }
    },
    data() {
      return {
        isFirst: false,
        isLast: false
      }
    },
    computed: {
      mainClass() {
        return utils.bem('goods-action-button', [this.type, { first: this.isFirst, last: this.isLast, plain: this.plain }])
      },
    },
    mounted() {
      this.updateStyle()
    },
    methods: {
      onClick(event) {
        this.$emit('click', event)
        this.jumpLink()
      },

      updateStyle() {
        const parent = this.vanGoodsAction
        if (parent == null) {
          return
        }

        const length = this.parentChildren.length
        let index
        // #ifndef MP-TOUTIAO
        index = this.index
        // #endif
        // #ifdef MP-TOUTIAO
        index = this._getIndex()
        // #endif
        this.isFirst = index === 0
        this.isLast = index === length - 1
      }
    }
  })
}
</script>

<style lang="less">
@import './index.less';
</style>
