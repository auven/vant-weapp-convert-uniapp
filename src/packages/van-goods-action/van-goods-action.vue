<template>
  <view class="custom-class" :class="mainClass">
    <slot />
  </view>
</template>

<script>
import { VantComponent } from '../common/component'
import { ParentMixin } from '../mixins/relation'
const utils = require('../wxs/utils')
export default VantComponent({
  mixins: [ParentMixin('vanGoodsAction')],
  props: {
    safeAreaInsetBottom: {
      type: Boolean,
      default: true,
    }
  },
  computed: {
    mainClass() {
      return `${utils.bem('goods-action', { safe: this.safeAreaInsetBottom })} ${this.customClass}`
    }
  },
  methods: {
    // #ifdef MP-TOUTIAO
    updateChildren() {
      this.$nextTick(() => {
        const $children = this.$children
        $children.forEach(child => {
          if (child.$options.name === 'VanGoodsActionButton') {
            child.updateStyle()
          } else {
            // console.log('不是 VanGridItem 组件')
          }
        })
      })
    }
    // #endif
  }
})
</script>

<style lang="less">
@import './index.less';
</style>
