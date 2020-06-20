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
  ...VantComponent(),
  components: {
    VanTransition
  },
  props: {
    show: Boolean,
    customStyle: String,
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
      console.log('点击蒙版')
      this.$emit('click-overlay')
    },

    // for prevent touchmove
    noop() {}
  }
}
</script>
