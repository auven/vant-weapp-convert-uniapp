<template>
  <view class="custom-class van-row" :class="customClass" :style="viewStyle">
    <slot />
  </view>
</template>

<script>
import { VantComponent } from '../common/component'
export default VantComponent({
  provide() {
    return {
      vanRow: this
    }
  },
  props: {
    gutter: [String, Number]
  },

  data() {
    return {
      viewStyle: ''
    }
  },

  mounted() {
    if (this.gutter) {
      this.setGutter()
    }
  },

  methods: {
    setGutter() {
      const { gutter } = this
      const margin = `-${Number(gutter) / 2}px`
      const viewStyle = gutter
        ? `margin-right: ${margin}; margin-left: ${margin};`
        : ''

      this.viewStyle = viewStyle
    }
  }
})
</script>

<style lang="less">
@import './index.less';
</style>
