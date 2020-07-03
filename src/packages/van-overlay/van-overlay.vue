<template>
  <van-transition
    :show="show"
    custom-class="van-overlay"
    :custom-style="transitionCustomStyle"
    :duration="duration"
    move-handle
    @el-click="onClick"
  >
    <slot></slot>
  </van-transition>
</template>

<script>
import VanTransition from '@/packages/van-transition/van-transition'
import { VantComponent } from '../common/component'
export default {
  components: {
    VanTransition
  },
  ...VantComponent({
    props: {
      show: Boolean,
      duration: {
        type: [String, Number, Object],
        default: 300
      },
      zIndex: {
        type: Number,
        default: 1
      }
    },
    computed: {
      transitionCustomStyle() {
        return `z-index: ${ this.zIndex }; ${ this.customStyle }`
      }
    },
    methods: {
      onClick() {
        this.$emit('click-overlay')
      },

      // for prevent touchmove
      noop() {}
    }
  })
}
</script>

<style lang="less">
@import './index.less';
</style>
