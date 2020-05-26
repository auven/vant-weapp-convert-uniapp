<template>
  <button
    :id="id"
    :data-detail="dataset"
    :class="buttonClass"
    hover-class="van-button--active hover-class"
    :lang="lang"
    :style="buttonStyle"
    :open-type="disabled ? '' : openType"
    :business-id="businessId"
    :session-from="sessionFrom"
    :send-message-title="sendMessageTitle"
    :send-message-path="sendMessagePath"
    :send-message-img="sendMessageImg"
    :show-message-card="showMessageCard"
    :app-parameter="appParameter"
    :aria-label="ariaLabel"
    @tap="onClick"
    @getuserinfo="bindGetUserInfo"
    @contact="bindContact"
    @getphonenumber="bindGetPhoneNumber"
    @error="bindError"
    @launchapp="bindLaunchApp"
    @opensetting="bindOpenSetting"
  >
    <block v-if="loading">
      <van-loading
        custom-class="loading-class"
        :size="loadingSize"
        :type="loadingType"
        :color="loadingColor(type, color, plain)"
      />
      <view v-if="loadingText" class="van-button__loading-text">
        {{ loadingText }}
      </view>
    </block>
    <block v-else>
      <van-icon
        v-if="icon"
        size="1.2em"
        :name="icon"
        :class-prefix="classPrefix"
        class="van-button__icon"
        custom-style="line-height: inherit;"
      />
      <view class="van-button__text">
        <slot />
      </view>
    </block>
  </button>
</template>

<script>
import { VantComponent } from '../common/component'
import { button } from '../mixins/button'
import { openType } from '../mixins/open-type'
import VanIcon from '../icon/icon'
import VanLoading from '../loading/loading'
const utils = require('../wxs/utils')
export default {
  ...VantComponent({
    classes: ['hover-class', 'loading-class'],
    mixins: [button, openType]
  }),
  components: {
    VanIcon,
    VanLoading
  },
  props: {
    icon: String,
    classPrefix: {
      type: String,
      default: 'van-icon'
    },
    plain: Boolean,
    block: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    loadingText: String,
    customStyle: String,
    loadingType: {
      type: String,
      default: 'circular'
    },
    type: {
      type: String,
      default: 'default'
    },
    dataset: null,
    size: {
      type: String,
      default: 'normal'
    },
    loadingSize: {
      type: String,
      default: '20px'
    },
    color: {
      type: String
    }
  },
  computed: {
    baseStyle() {
      let style = ''

      const { color, plain } = this

      if (color) {
        style += `color: ${plain ? color : 'white'};`

        if (!plain) {
          // Use background instead of backgroundColor to make linear-gradient work
          style += `background: ${color};`
        }

        // hide border when color is linear-gradient
        if (color.indexOf('gradient') !== -1) {
          style += 'border: 0;'
        } else {
          style += `border-color: ${color};`
        }
      }

      return style
    },
    buttonClass() {
      const { type, size, block, round, plain, square, loading, disabled, hairline } = this
      const bemClass = utils.bem('button', [type, size, { block, round, plain, square, loading, disabled, hairline, unclickable: disabled || loading }])
      return `custom-class ${ bemClass } ${ hairline ? 'van-hairline--surround' : '' }`
    },
    buttonStyle() {
      const { baseStyle, customStyle } = this
      return `${ baseStyle }} ${ customStyle }}`
    }
  },

  created() {
    console.log(this.$options)
  },

  methods: {
    loadingColor(type, color, plain) {
      if (plain) {
        return color ? color : '#c9c9c9'
      }

      if (type === 'default') {
        return '#c9c9c9'
      }
      return 'white'
    },
    onClick() {
      if (this.disabled) {
        return
      }
      if (!this.loading) {
        this.$emit('click')
      }
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
