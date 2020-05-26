<template>
  <view class="custom-class van-row" :style="viewStyle">
    <slot />
  </view>
</template>

<script>
import { VantComponent } from '../common/component'
export default {
  ...VantComponent(),
  props: {
    gutter: {
      type: Number
    }
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
      /* this.getRelationNodes('../col/index').forEach(col => {
        col.setGutter(this.gutter)
      }) */
      this.$nextTick(() => {
        this.$children.forEach(child => {
          if (child.$options.name === 'VanCol') {
            child.setGutter(this.gutter)
          } else {
            console.log('不是 VanCol 组件')
          }
        })
      })
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
