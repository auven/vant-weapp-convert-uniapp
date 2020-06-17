<template>
  <view :class="mainClass" :style="mainStyle">
    <slot />
  </view>
</template>

<script>
import utils from '../wxs/utils'
import { VantComponent } from '../common/component'
export default {
  ...VantComponent(),
  props: {
    dashed: {
      type: Boolean,
      value: false
    },
    hairline: {
      type: Boolean,
      value: false
    },
    contentPosition: {
      type: String,
      value: ''
    },
    fontSize: {
      type: Number,
      value: ''
    },
    borderColor: {
      type: String,
      value: ''
    },
    textColor: {
      type: String,
      value: ''
    },
    customStyle: {
      type: String,
      value: ''
    }
  },
  computed: {
    mainClass() {
      const { dashed, hairline, contentPosition } = this
      return `custom-class ${ utils.bem('divider', [{dashed, hairline}, contentPosition]) }`
    },
    mainStyle() {
      return `${ this.borderColor  ? 'border-color: ' + this.borderColor + ';' : '' }${ this.textColor ? 'color: ' + this.textColor + ';' : '' }${ this.fontSize ? 'font-size: ' + this.fontSize + 'px;' : '' }${ this.customStyle }`
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
