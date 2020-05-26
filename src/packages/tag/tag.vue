<template>
  <view :class="wrapClass" :style="wrapStyle">
    <slot />
    <van-icon
      v-if="closeable"
      name="cross"
      custom-class="van-tag__close"
      @click="onClose"
    />
  </view>
</template>

<script>
import { VantComponent } from '../common/component'
import VanIcon from '../icon/icon'
const utils = require('../wxs/utils')
export default {
  ...VantComponent(),
  components: {
    VanIcon
  },
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
      const { type, size, mark, plain, round } = this
      return `custom-class ${utils.bem('tag', [
        type,
        size,
        { mark, plain, round }
      ])} ${plain ? 'van-hairline--surround' : ''}`
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
}
</script>

<style lang="less">
@import './index.less';
</style>
