<template>
  <van-button
    square
    :id="id"
    size="large"
    :lang="lang"
    :loading="loading"
    :disabled="disabled"
    :open-type="openType"
    :business-id="businessId"
    custom-class="van-goods-action-icon"
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
    <van-icon
      v-if="icon"
      :name="icon"
      :dot="dot"
      :info="info"
      class="van-goods-action-icon__icon"
      :custom-class="`van-goods-action-icon__icon ${iconClass}`"
    />
    <slot v-else name="icon" />
    <text class="text-class" :class="textClass">{{ text }}</text>
  </van-button>
</template>

<script>
import VanIcon from '../van-icon/van-icon'
import VanButton from '../van-button/van-button'
import { VantComponent } from '../common/component'
import { link } from '../mixins/link'
import { button } from '../mixins/button'
import { openType } from '../mixins/open-type'
export default {
  components: {
    VanIcon,
    VanButton
  },
  ...VantComponent({
    classes: ['icon-class', 'text-class'],

    mixins: [link, button, openType],

    props: {
      text: String,
      dot: Boolean,
      info: String,
      icon: String,
      disabled: Boolean,
      loading: Boolean
    },

    methods: {
      onClick(event) {
        this.$emit('click', event)
        this.jumpLink()
      }
    }
  })
}
</script>

<style lang="less">
@import './index.less';
</style>
