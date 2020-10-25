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
    :custom-class="`van-goods-action-button__inner ${mainClass}`"
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
  name: 'VanGoodsActionButton',
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
      // #ifndef MP-TOUTIAO
      this.updateStyle()
      // #endif
      // #ifdef MP-TOUTIAO
      this.vanGoodsAction.updateChildren()
      // #endif
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

        let length
        let index
        // #ifndef MP-TOUTIAO
        length = this.parentChildren.length
        index = this.index
        // #endif
        // #ifdef MP-TOUTIAO
        length = this._getParentChildren().length
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
