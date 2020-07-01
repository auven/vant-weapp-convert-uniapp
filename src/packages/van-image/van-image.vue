<template>
  <view :style="viewStyle" :class="wrapClass" @tap="onClick">
    <image
      v-if="!error"
      :src="src"
      :mode="mode"
      :lazy-load="lazyLoad"
      class="image-class van-image__img"
      :class="imageClass"
      :show-menu-by-longpress="showMenuByLongpress"
      @load="onImageLoad"
      @error="onImageError"
    />

    <view
      v-if="loading && showLoading"
      class="loading-class van-image__loading"
      :class="loadingClass"
    >
      <slot v-if="useLoadingSlot" name="loading" />
      <van-icon v-else name="photo-o" size="22" />
    </view>
    <view v-if="error && showError" class="error-class van-image__error" :class="errorClass">
      <slot v-if="useErrorSlot" name="error" />
      <van-icon v-else name="warning-o" size="22" />
    </view>
  </view>
</template>

<script>
import { VantComponent } from '../common/component'
import VanIcon from '../van-icon/van-icon'
import { button } from '../mixins/button'
import { openType } from '../mixins/open-type'
import { addUnit, isDef } from '../common/utils'
const utils = require('../wxs/utils')

const FIT_MODE_MAP = {
  none: 'center',
  fill: 'scaleToFill',
  cover: 'aspectFill',
  contain: 'aspectFit',
  widthFix: 'widthFix',
  heightFix: 'heightFix'
}

export default {
  components: {
    VanIcon
  },
  ...VantComponent({
    classes: ['loading-class', 'error-class', 'image-class'],
    mixins: [button, openType],
    props: {
      src: {
        type: String
      },
      round: Boolean,
      width: {
        type: null
      },
      height: {
        type: null
      },
      radius: null,
      lazyLoad: Boolean,
      useErrorSlot: Boolean,
      useLoadingSlot: Boolean,
      showMenuByLongpress: Boolean,
      fit: {
        type: String,
        default: 'fill'
      },
      showError: {
        type: Boolean,
        default: true
      },
      showLoading: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        mode: '',
        error: false,
        loading: true,
        viewStyle: ''
      }
    },

    computed: {
      wrapClass() {
        const { customClass, round } = this
        return `custom-class ${customClass} ${ utils.bem('image', { round })}`
      }
    },

    mounted() {
      this.setMode()
      this.setStyle()
    },

    methods: {
      setMode() {
        this.mode = FIT_MODE_MAP[this.fit]
      },

      setStyle() {
        const { width, height, radius } = this
        let style = ''

        if (isDef(width)) {
          style += `width: ${addUnit(width)};`
        }

        if (isDef(height)) {
          style += `height: ${addUnit(height)};`
        }

        if (isDef(radius)) {
          style += 'overflow: hidden;'
          style += `border-radius: ${addUnit(radius)};`
        }

        this.viewStyle = style
      },

      // 这里不能命名为 onLoad ，会导致找不到这个方法
      onImageLoad(event) {
        this.loading = false

        this.$emit('load', event.detail)
      },

      // 这里不能命名为 onError ，会导致找不到这个方法
      onImageError(event) {
        this.loading = false
        this.error = true

        this.$emit('error', event.detail)
      },

      onClick(event) {
        this.$emit('click', event.detail)
      }
    }
  })
}
</script>

<style lang="less">
@import './index.less';
</style>
