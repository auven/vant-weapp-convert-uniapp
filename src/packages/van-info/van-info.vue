<template>
  <view
    v-if="info !== null && info !== '' || dot"
    :class="wrapClass"
    :style="customStyle"
  >{{ dot ? '' : info }}</view>
</template>

<script>
import { VantComponent } from '../common/component'
const utils = require('../wxs/utils')
export default VantComponent({
  props: {
    dot: Boolean,
    info: {
      type: [String, Number],
      default: null
    }
  },
  computed: {
    wrapClass() {
      const { dot } = this
      return `custom-class ${this.customClass} van-info ${ utils.bem('info', { dot }) }`
    }
  }
})
</script>

<style lang="less">
@import './index.less';
</style>
