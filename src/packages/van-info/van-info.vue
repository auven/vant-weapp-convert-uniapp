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
export default {
  ...VantComponent(),
  props: {
    dot: Boolean,
    info: null,
    customStyle: String
  },
  computed: {
    wrapClass() {
      const { dot } = this
      return `custom-class van-info ${ utils.bem('info', { dot }) }`
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
