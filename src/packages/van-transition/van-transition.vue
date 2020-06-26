<template>
  <block v-if="inited">
    <view
      v-if="moveHandle"
      class="van-transition custom-class"
      :class="mainClass"
      :style="mainStyle"
      @transitionend="onTransitionEnd"
      @click="onClick"
      @touchmove.stop.prevent="noop"
    >
      <slot />
    </view>
    <view
      v-else
      class="van-transition custom-class"
      :class="mainClass"
      :style="mainStyle"
      @transitionend="onTransitionEnd"
      @click="onClick"
    >
      <slot />
    </view>
  </block>
</template>

<script>
import { VantComponent } from '../common/component'
import { transition } from '../mixins/transition'
const transitionMixin = transition(true)
export default VantComponent({
  classes: [
    'enter-class',
    'enter-active-class',
    'enter-to-class',
    'leave-class',
    'leave-active-class',
    'leave-to-class'
  ],
  mixins: [transitionMixin],
  props: {
    moveHandle: {
      type: Boolean,
      default: false,
      description: '是否阻止事件穿透'
    }
  },
  computed: {
    mainClass() {
      return `${this.customClass} ${this.classes}`
    },
    mainStyle() {
      return `-webkit-transition-duration:${ this.currentDuration }ms; transition-duration:${ this.currentDuration }ms; ${ this.display ? '' : 'display: none;' } ${ this.customStyle }`
    }
  },
  methods: {
    onClick() {
      this.$emit('el-click')
    },

    // for prevent touchmove
    noop() {}
  }
})
</script>

<style lang="less">
@import './index.less';
</style>

