<template>
  <view :class="mainClass" :style="mainStyle">
    <slot />
  </view>
</template>

<script>
import utils from '../wxs/utils'
import { VantComponent } from '../common/component'
export default VantComponent({
  props: {
    dashed: {
      type: Boolean,
      default: false
    },
    hairline: {
      type: Boolean,
      default: false
    },
    contentPosition: {
      type: String,
      default: ''
    },
    fontSize: {
      type: [Number, String],
      default: ''
    },
    borderColor: {
      type: String,
      default: ''
    },
    textColor: {
      type: String,
      default: ''
    }
  },
  computed: {
    mainClass() {
      const { customClass, dashed, hairline, contentPosition } = this
      return `custom-class ${customClass} ${ utils.bem('divider', [{dashed, hairline}, contentPosition]) }`
    },
    mainStyle() {
      return `${ this.borderColor  ? 'border-color: ' + this.borderColor + ';' : '' }${ this.textColor ? 'color: ' + this.textColor + ';' : '' }${ this.fontSize ? 'font-size: ' + this.fontSize + 'px;' : '' }${ this.customStyle }`
    }
  }
})
</script>

<style lang="less">
@import './index.less';
</style>
