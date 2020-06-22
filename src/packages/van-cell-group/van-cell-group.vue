<template>
  <view>
    <view v-if="title" class="van-cell-group__title">
      {{ title }}
    </view>
    <view :class="groupClass">
      <slot />
    </view>
  </view>
</template>

<script>
import { VantComponent } from '../common/component'
export default VantComponent({
  props: {
    title: String,
    border: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    groupClass() {
      const { customClass, border } = this
      return `custom-class ${customClass} van-cell-group ${ border ? 'van-hairline--top-bottom' : '' }`
    }
  }
})
</script>

<style lang="less">
@import './index.less';
</style>
