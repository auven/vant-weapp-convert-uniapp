<template>
  <!-- #ifndef H5 || APP-PLUS -->
  <block>
  <!-- #endif -->
  <!-- #ifdef H5 || APP-PLUS -->
  <div>
  <!-- #endif -->
    <van-overlay
      v-if="overlay"
      :show="show"
      :z-index="zIndex"
      :custom-style="overlayStyle"
      :duration="duration"
      @click-overlay="onClickOverlay"
    />
    <view
      v-if="inited"
      :class="popupBodyClass"
      :style="popupBodyStyle"
      @transitionend="onTransitionEnd"
    >
      <slot />
      <van-icon
        v-if="closeable"
        :name="closeIcon"
        :class="currentCloseIconClass"
        :custom-class="currentCloseIconClass"
        @click.native="onClickCloseIcon"
      />
    </view>
  <!-- #ifdef H5 || APP-PLUS -->
  </div>
  <!-- #endif -->
  <!-- #ifndef H5 || APP-PLUS -->
  </block>
  <!-- #endif -->
</template>

<script>
import utils from '../wxs/utils'
import VanIcon from '../van-icon/van-icon'
import VanOverlay from '../van-overlay/van-overlay'
import { VantComponent } from '../common/component';
import { transition } from '../mixins/transition';
const transitionMixin = transition(false)
export default {
  components: {
    VanIcon,
    VanOverlay
  },
  ...VantComponent({
    classes: [
      'enter-class',
      'enter-active-class',
      'enter-to-class',
      'leave-class',
      'leave-active-class',
      'leave-to-class',
      'close-icon-class',
    ],
    mixins: [transitionMixin],
    props: {
      round: Boolean,
      closeable: Boolean,
      overlayStyle: String,
      transition: {
        type: String,
      },
      zIndex: {
        type: Number,
        default: 100,
      },
      overlay: {
        type: Boolean,
        default: true,
      },
      closeIcon: {
        type: String,
        default: 'cross',
      },
      closeIconPosition: {
        type: String,
        default: 'top-right',
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: true,
      },
      position: {
        type: String,
        default: 'center',
      },
      safeAreaInsetBottom: {
        type: Boolean,
        default: true,
      },
      safeAreaInsetTop: {
        type: Boolean,
        default: false,
      }
    },

    data() {
      return {
        currentName: ''
      }
    },

    computed: {
      popupBodyClass() {
        const { customClass, classes, position, round, safeAreaInsetBottom, safeAreaInsetTop } = this
        return `custom-class ${ customClass } ${ classes } ${ utils.bem('popup', [position, { round, safe: safeAreaInsetBottom, safeTop: safeAreaInsetTop }]) }`
      },
      popupBodyStyle() {
        const { zIndex, currentDuration, display, customStyle } = this
        return `z-index: ${ zIndex }; -webkit-transition-duration:${ currentDuration }ms; transition-duration:${ currentDuration }ms; ${ display ? '' : 'display: none;' };${ customStyle }`
      },
      currentCloseIconClass() {
        return `close-icon-class ${ this.closeIconClass } van-popup__close-icon van-popup__close-icon--${ this.closeIconPosition }`
      }
    },

    watch: {
      transition() {
        this.observeClass()
      }
    },

    created() {
      this.observeClass();
    },

    methods: {
      onClickCloseIcon() {
        this.$emit('close');
      },

      onClickOverlay() {
        this.$emit('click-overlay');

        if (this.closeOnClickOverlay) {
          this.$emit('close');
        }
      },

      observeClass() {
        const { transition, position, duration } = this;

        this.currentName = transition || position

        if (transition === 'none') {
          this.duration = 0
          this.originDuration = duration
        } else if (this.originDuration != null) {
          this.duration = this.originDuration
        }
      },
    },
  })
}
</script>

<style lang="less">
@import './index.less';
</style>
