<template>
  <view
    class="van-progress custom-class"
    :class="customClass"
    :style="wrapStyle"
  >
    <view
      class="van-progress__portion"
      :style="portionStyle"
    >
      <view
        v-if="showPivot && text"
        :style="pivotStyle"
        class="van-progress__pivot"
      >
        {{ text }}
      </view>
    </view>
  </view>
</template>

<script>
import { VantComponent } from '../common/component'
import { BLUE } from '../common/color'
import utils from '../wxs/utils'
export default VantComponent({
  props: {
    inactive: Boolean,
    percentage: [String, Number],
    pivotText: String,
    pivotColor: String,
    trackColor: String,
    showPivot: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: BLUE,
    },
    textColor: {
      type: String,
      default: '#fff',
    },
    strokeWidth: {
      type: null,
      default: 4,
    }
  },
  computed: {
    text() {
      return this.pivotText || this.percentage + '%'
    },
    wrapStyle() {
      const { strokeWidth, trackColor } = this
      return `height: ${ utils.addUnit(strokeWidth) }; ${ trackColor ? 'background: ' + trackColor : '' }`
    },
    portionStyle() {
      const { percentage, inactive, color } = this
      return `width: ${ percentage }%; background: ${ inactive ? '#cacaca' : color }`
    },
    pivotStyle() {
      const { textColor, pivotColor, inactive, color } = this
      return `color: ${ textColor }; background: ${ pivotColor ? pivotColor : inactive ? '#cacaca' : color }`
    }
  }
})
</script>

<style lang="less">
@import './index.less';
</style>
