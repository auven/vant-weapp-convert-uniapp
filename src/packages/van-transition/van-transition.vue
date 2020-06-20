<template>
  <view
    v-if="inited"
    class="van-transition custom-class"
    :class="mainClass"
    :style="mainStyle"
    @transitionend="onTransitionEnd"
  >
    <slot />
  </view>
</template>

<script>
import { VantComponent } from '../common/component'
import { transition } from '../mixins/transition'
const transitionMixin = transition(true)
export default {
  ...VantComponent({
    classes: [
      'enter-class',
      'enter-active-class',
      'enter-to-class',
      'leave-class',
      'leave-active-class',
      'leave-to-class'
    ],
    mixins: [{ ...transitionMixin, props: {} }]
  }),
  props: {
    ...transitionMixin.props,
    customClass: String
  },
  computed: {
    mainClass() {
      return `${this.customClass} ${this.classes}`
    },
    mainStyle() {
      return `-webkit-transition-duration:${ this.currentDuration }ms; transition-duration:${ this.currentDuration }ms; ${ this.display ? '' : 'display: none;' } ${ this.customStyle }`
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>

