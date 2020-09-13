<template>
  <view :class="wrapClass" :style="wrapStyle">
    <slot />
    <van-icon
      v-if="closeable"
      name="cross"
      class="van-tag__close"
      custom-class="van-tag__close"
      @click="onClose"
    />
  </view>
</template>

<script>
import { VantComponent } from '../common/component'
import VanIcon from '../van-icon/van-icon'
const utils = require('../wxs/utils')
export default {
  components: {
    VanIcon
  },
  ...VantComponent({
    props: {
      size: String,
      mark: Boolean,
      color: String,
      plain: Boolean,
      round: Boolean,
      textColor: String,
      type: {
        type: String,
        default: 'default'
      },
      closeable: Boolean
    },

    computed: {
      wrapClass() {
        const { customClass, type, size, mark, plain, round } = this
        return `custom-class ${customClass} ${utils.bem('tag', [
          type,
          size,
          { mark, plain, round }
        ])}`
      },
      wrapStyle() {
        const { color, plain, textColor } = this
        return `${color && !plain ? 'background-color: ' + color + ';' : ''}${
          textColor || (color && plain) ? 'color: ' + (textColor || color) : ''
        }`
      }
    },

    methods: {
      onClose() {
        this.$emit('close')
      }
    }
  })
}
</script>

<style lang="less">
@import './index.less';
</style>
