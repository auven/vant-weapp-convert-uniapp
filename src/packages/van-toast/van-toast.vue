<template>
  <div>
    <van-overlay
      :show="(optionsMask || optionsForbidClick) && optionsShow"
      :z-index="optionsZIndex"
      :custom-style="optionsMask ? '' : 'background-color: transparent;'"
    />
    <van-transition
      :show="optionsShow"
      :custom-style="`z-index: ${ optionsZIndex }`"
      custom-class="van-toast__container"
    >
      <view
        :class="toastClass"
        @touchmove.stop.prevent="noop"
      >
        <!-- text only -->
        <text v-if="optionsType === 'text'">{{ optionsMessage }}</text>

        <!-- with icon -->
        <block v-else>
          <van-loading
            v-if="optionsType === 'loading'"
            color="white"
            :type="optionsLoadingType"
            custom-class="van-toast__loading"
          />
          <van-icon v-else class="van-toast__icon" custom-class="van-toast__icon" :name="optionsType" />
          <text v-if="optionsMessage" class="van-toast__text">{{ optionsMessage }}</text>
        </block>

        <slot />
      </view>
    </van-transition>
  </div>
</template>

<script>
import VanIcon from '../van-icon/van-icon'
import VanLoading from '../van-loading/van-loading'
import VanOverlay from '../van-overlay/van-overlay'
import VanTransition from '../van-transition/van-transition'
import { VantComponent } from '../common/component'
export default {
  components: {
    VanIcon,
    VanLoading,
    VanOverlay,
    VanTransition
  },
  ...VantComponent({
    props: {
      show: Boolean,
      mask: Boolean,
      message: String,
      forbidClick: Boolean,
      zIndex: {
        type: Number,
        default: 1000,
      },
      type: {
        type: String,
        default: 'text',
      },
      loadingType: {
        type: String,
        default: 'circular',
      },
      position: {
        type: String,
        default: 'middle',
      },
    },

    data() {
      return {
        optionsType: null,
        optionsMask: null,
        optionsMessage: null,
        optionsShow: null,
        optionsZIndex: null,
        optionsDuration: null,
        optionsPosition: null,
        optionsForbidClick: null,
        optionsLoadingType: null,
      }
    },

    computed: {
      toastClass() {
        return `van-toast van-toast--${ this.optionsType === 'text' ? 'text' : 'icon' } van-toast--${ this.optionsPosition }`
      }
    },

    watch: {
      type: {
        handler(val) {
          this.optionsType = val
        },
        immediate: true
      },
      mask: {
        handler(val) {
          this.optionsMask = val
        },
        immediate: true
      },
      message: {
        handler(val) {
          this.optionsMessage = val
        },
        immediate: true
      },
      show: {
        handler(val) {
          this.optionsShow = val
        },
        immediate: true
      },
      zIndex: {
        handler(val) {
          this.optionsZIndex = val
        },
        immediate: true
      },
      position: {
        handler(val) {
          this.optionsPosition = val
        },
        immediate: true
      },
      forbidClick: {
        handler(val) {
          this.optionsForbidClick = val
        },
        immediate: true
      },
      loadingType: {
        handler(val) {
          this.optionsLoadingType = val
        },
        immediate: true
      }
    },

    methods: {
      // for prevent touchmove
      noop() {},
    },
  })
}
</script>

<style lang="less">
@import './index.less';
</style>
