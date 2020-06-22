<template>
  <view class="custom-class van-row" :class="customClass" :style="viewStyle">
    <slot />
  </view>
</template>

<script>
import { VantComponent } from '../common/component'
export default VantComponent({
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
      /* this.getRelationNodes('../col/index').forEach(col => {
        col.setGutter(this.gutter)
      }) */
      this.$nextTick(() => {
        let $children
        // #ifdef H5
        $children = this.$children[0].$children
        // #endif
        // #ifndef H5
        $children = this.$children
        // #endif
        $children.forEach(child => {
          if (child.$options.name === 'VanCol') {
            child.setGutter(this.gutter)
          } else {
            console.log('不是 VanCol 组件')
          }
        })
      })
    }
  }
})
</script>

<style lang="less">
@import './index.less';
</style>
