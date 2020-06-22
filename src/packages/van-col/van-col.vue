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
export default VantComponent({
  name: 'VanCol',
  props: {
    span: [Number, String],
    offset: [Number, String]
  },
  inject: ['vanRow'],

  data() {
    return {
      viewStyle: ''
    }
  },

  computed: {
    wrapClass() {
      const { customClass, span, offset } = this
      return `custom-class ${customClass} ${ utils.bem('col', [span]) } ${ offset ? 'van-col--offset-' + offset : '' }`
    }
  },

  created() {
    this.setGutter()
  },

  methods: {
    setGutter() {
      if (this.vanRow.gutter) {
        const padding = `${this.vanRow.gutter / 2}px`
        const viewStyle = this.vanRow.gutter
          ? `padding-left: ${padding}; padding-right: ${padding};`
          : ''

        if (viewStyle !== this.viewStyle) {
          this.viewStyle = viewStyle
        }
      }
    }
  }
})
</script>

<style lang="less">
@import './index.less';
</style>
