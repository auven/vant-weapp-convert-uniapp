<template>
  <button
    :id="id"
    :data-detail="dataset"
    :class="buttonClass"
    :hover-class="btnHoverClass"
    :lang="lang"
    :form-type="formType"
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
    @click="onClick"
    @getuserinfo="bindGetUserInfo"
    @contact="bindContact"
    @getphonenumber="bindGetPhoneNumber"
    @error="bindError"
    @launchapp="bindLaunchApp"
    @opensetting="bindOpenSetting"
  >
    <block v-if="loading">
      <van-loading
        :custom-class="loadingCustomClass"
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
        custom-class="van-button__icon"
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
import VanIcon from '../van-icon/van-icon'
import VanLoading from '../van-loading/van-loading'
const utils = require('../wxs/utils')
export default {
  // 组件必须这样子引入，不能放在 VantComponent 里面
  components: {
    VanIcon,
    VanLoading
  },
  ...VantComponent({
    classes: ['hover-class', 'loading-class'],
    mixins: [button, openType],
    props: {
      formType: String,
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
        const { customClass, type, size, block, round, plain, square, loading, disabled, hairline } = this
        const bemClass = utils.bem('button', [type, size, { block, round, plain, square, loading, disabled, hairline, unclickable: disabled || loading }])
        return `custom-class ${ customClass } ${ bemClass } ${ hairline ? 'van-hairline--surround' : '' }`
      },
      buttonStyle() {
        const { baseStyle, customStyle } = this
        return `${ baseStyle } ${ customStyle }`
      },
      btnHoverClass() {
        return `van-button--active hover-class ${this.hoverClass}`
      },
      loadingCustomClass() {
        return `loading-class ${this.loadingClass}`
      }
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
      onClick(e) {
        if (this.disabled) {
          return
        }
        if (!this.loading) {
          this.$emit('click', e)
        }
      }
    }
  })
}
</script>

<style lang="less">
@import './index.less';
</style>
