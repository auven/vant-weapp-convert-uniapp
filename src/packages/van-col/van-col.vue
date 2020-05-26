<template>
  <view
    :class="wrapClass"
    :style="viewStyle"
  >
    <slot />
  </view>
</template>

<script>
import { VantComponent } from '../common/component'
const utils = require('../wxs/utils')
export default {
  name: 'VanCol',
  ...VantComponent({}),
  props: {
    span: [Number, String],
    offset: Number
  },

  data() {
    return {
      viewStyle: ''
    }
  },

  computed: {
    wrapClass() {
      const { span, offset } = this
      return `custom-class ${ utils.bem('col', [span]) } ${ offset ? 'van-col--offset-' + offset : '' }`
    }
  },

  methods: {
    setGutter(gutter) {
      console.log('我是 VanCol', gutter)
      const padding = `${gutter / 2}px`
      const viewStyle = gutter
        ? `padding-left: ${padding}; padding-right: ${padding};`
        : ''

      if (viewStyle !== this.viewStyle) {
        this.viewStyle = viewStyle
      }
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
