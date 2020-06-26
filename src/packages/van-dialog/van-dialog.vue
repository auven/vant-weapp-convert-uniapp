<template>
  <van-popup
    :show="optionsShow"
    :z-index="optionsZIndex"
    :overlay="optionsOverlay"
    :transition="optionsTransition"
    :custom-class="`van-dialog ${ optionsClassName }`"
    :custom-style="popupCustomStyle"
    :overlay-style="optionsOverlayStyle"
    :close-on-click-overlay="optionsCloseOnClickOverlay"
    @close="onClickOverlay"
  >
    <view
      v-if="optionsTitle || useTitleSlot"
      :class="headerClass"
    >
      <slot v-if="useTitleSlot" name="title" />
      <block v-else-if="optionsTitle">{{ optionsTitle }}</block>
    </view>

    <slot v-if="useSlot" />
    <view
      v-else-if="optionsMessage"
      :class="messageClass"
    >
      <text class="van-dialog__message-text">{{ optionsMessage }}</text>
    </view>

    <view class="van-hairline--top van-dialog__footer">
      <van-button
        v-if="optionsShowCancelButton"
        size="large"
        :loading="loading.cancel"
        class="van-dialog__button van-hairline--right"
        custom-class="van-dialog__cancel van-dialog__button van-hairline--right"
        :custom-style="` color: ${ cancelButtonColor }`"
        @click="onCancel"
      >
        {{ optionsCancelButtonText }}
      </van-button>
      <van-button
        v-if="optionsShowConfirmButton"
        size="large"
        class="van-dialog__button"
        :loading="loading.confirm"
        custom-class="van-dialog__confirm van-dialog__button"
        :custom-style="`color: ${ confirmButtonColor }`"
        :open-type="optionsConfirmButtonOpenType"
        :lang="lang"
        :business-id="businessId"
        :session-from="sessionFrom"
        :send-message-title="sendMessageTitle"
        :send-message-path="sendMessagePath"
        :send-message-img="sendMessageImg"
        :show-message-card="showMessageCard"
        :app-parameter="appParameter"
        @click="onConfirm"
        @getuserinfo="bindGetUserInfo"
        @contact="bindContact"
        @getphonenumber="bindGetPhoneNumber"
        @error="bindError"
        @launchapp="bindLaunchApp"
        @opensetting="bindOpenSetting"
      >
        {{ optionsConfirmButtonText }}
      </van-button>
    </view>
  </van-popup>
</template>

<script>
import utils from '../wxs/utils'
import VanPopup from '../van-popup/van-popup'
import VanButton from '../van-button/van-button'
import { VantComponent } from '../common/component'
import { button } from '../mixins/button'
import { openType } from '../mixins/open-type'
import { GRAY, BLUE } from '../common/color'
export default {
  components: {
    VanPopup,
    VanButton
  },
  ...VantComponent({
    mixins: [button, openType],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      title: String,
      message: String,
      useSlot: Boolean,
      className: String,
      customStyle: String,
      asyncClose: Boolean,
      messageAlign: String,
      overlayStyle: String,
      useTitleSlot: Boolean,
      showCancelButton: Boolean,
      closeOnClickOverlay: Boolean,
      confirmButtonOpenType: String,
      width: null,
      zIndex: {
        type: Number,
        default: 2000
      },
      confirmButtonText: {
        type: String,
        default: '确认'
      },
      cancelButtonText: {
        type: String,
        default: '取消'
      },
      confirmButtonColor: {
        type: String,
        default: BLUE
      },
      cancelButtonColor: {
        type: String,
        default: GRAY
      },
      showConfirmButton: {
        type: Boolean,
        default: true
      },
      overlay: {
        type: Boolean,
        default: true
      },
      transition: {
        type: String,
        default: 'scale'
      }
    },
    data() {
      return {
        loading: {
          confirm: false,
          cancel: false
        },

        optionsShow: null,
        optionsTitle: null,
        optionsWidth: null,
        optionsMessage: null,
        optionsZIndex: null,
        optionsOverlay: null,
        optionsClassName: null,
        optionsAsyncClose: null,
        optionsTransition: null,
        optionsCustomStyle: null,
        optionsMessageAlign: null,
        optionsOverlayStyle: null,
        optionsConfirmButtonText: null,
        optionsCancelButtonText: null,
        optionsShowConfirmButton: null,
        optionsShowCancelButton: null,
        optionsCloseOnClickOverlay: null,
        optionsConfirmButtonOpenType: null
      }
    },
    computed: {
      popupCustomStyle() {
        return `width: ${ utils.addUnit(this.optionsWidth) };${ this.optionsCustomStyle }`
      },
      headerClass() {
        return `van-dialog__header ${ this.optionsMessage || this.useSlot ? '' : 'van-dialog--isolated' }`
      },
      messageClass() {
        return `van-dialog__message ${ this.optionsTitle ? 'van-dialog__message--has-title' : '' } ${ this.optionsMessageAlign ? 'van-dialog__message--' + this.optionsMessageAlign : '' }`
      }
    },
    watch: {
      show: {
        handler(val) {
          this.optionsShow = val
        },
        immediate: true
      },
      optionsShow: {
        handler(val) {
          !val && this.stopLoading()
        },
        immediate: true
      },
      title: {
        handler(val) {
          this.optionsTitle = val
        },
        immediate: true
      },
      width: {
        handler(val) {
          this.optionsWidth = val
        },
        immediate: true
      },
      message: {
        handler(val) {
          this.optionsMessage = val
        },
        immediate: true
      },
      zIndex: {
        handler(val) {
          this.optionsZIndex = val
        },
        immediate: true
      },
      overlay: {
        handler(val) {
          this.optionsOverlay = val
        },
        immediate: true
      },
      className: {
        handler(val) {
          this.optionsClassName = val
        },
        immediate: true
      },
      asyncClose: {
        handler(val) {
          this.optionsAsyncClose = val
        },
        immediate: true
      },
      transition: {
        handler(val) {
          this.optionsTransition = val
        },
        immediate: true
      },
      customStyle: {
        handler(val) {
          this.optionsCustomStyle = val
        },
        immediate: true
      },
      messageAlign: {
        handler(val) {
          this.optionsMessageAlign = val
        },
        immediate: true
      },
      overlayStyle: {
        handler(val) {
          this.optionsOverlayStyle = val
        },
        immediate: true
      },
      confirmButtonText: {
        handler(val) {
          this.optionsConfirmButtonText = val
        },
        immediate: true
      },
      cancelButtonText: {
        handler(val) {
          this.optionsCancelButtonText = val
        },
        immediate: true
      },
      showConfirmButton: {
        handler(val) {
          this.optionsShowConfirmButton = val
        },
        immediate: true
      },
      showCancelButton: {
        handler(val) {
          this.optionsShowCancelButton = val
        },
        immediate: true
      },
      closeOnClickOverlay: {
        handler(val) {
          this.optionsCloseOnClickOverlay = val
        },
        immediate: true
      },
      confirmButtonOpenType: {
        handler(val) {
          this.optionsConfirmButtonOpenType = val
        },
        immediate: true
      }
    },
    methods: {
      onConfirm() {
        this.handleAction('confirm')
      },

      onCancel() {
        this.handleAction('cancel')
      },

      onClickOverlay() {
        this.onClose('overlay')
      },

      handleAction(action) {
        if (this.optionsAsyncClose) {
          this.loading[action] = true
        }

        this.onClose(action)
      },

      close() {
        this.optionsShow = false
        // this.show = false
        this.$emit('update:show', false)
      },

      stopLoading() {
        this.loading = {
          confirm: false,
          cancel: false
        }
      },

      onClose(action) {
        if (!this.optionsAsyncClose) {
          this.close()
        }
        this.$emit('close', action)

        // 把 dialog 实例传递出去，可以通过 stopLoading() 在外部关闭按钮的 loading
        // #ifndef MP-TOUTIAO || MP-ALIPAY
        this.$emit(action, { dialog: this })
        // #endif
        // #ifdef MP-TOUTIAO || MP-ALIPAY
        this.$emit(action)
        // #endif

        const callback = this[action === 'confirm' ? 'onConfirmResolve' : 'onCancelReject']
        if (callback) {
          callback(this)
        }
      }
    }
  })
}
</script>

<style lang="less">
@import './index.less';
</style>
