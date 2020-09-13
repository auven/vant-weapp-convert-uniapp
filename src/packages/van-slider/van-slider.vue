<template>
  <view
    :class="wrapClass"
    :style="wrapStyle"
    @tap="onClick"
  >
    <view
      class="van-slider__bar"
      :style="sliderBarStyle"
    >
      <view
        class="van-slider__button-wrapper"
        @touchstart="onTouchStart"
        @touchmove.stop.prevent="onTouchMove"
        @touchend="onTouchEnd"
        @touchcancel="onTouchEnd"
      >
        <slot v-if="useButtonSlot" name="button" />
        <view v-else class="van-slider__button" />
      </view>
    </view>
  </view>
</template>

<script>
import { VantComponent } from '../common/component'
import { touch } from '../mixins/touch'
const utils = require('../wxs/utils')
export default VantComponent({
  mixins: [touch],
  props: {
    disabled: Boolean,
    useButtonSlot: Boolean,
    activeColor: String,
    inactiveColor: String,
    max: {
      type: [String, Number],
      default: 100
    },
    min: {
      type: [String, Number],
      default: 0
    },
    step: {
      type: [String, Number],
      default: 1
    },
    value: {
      type: [String, Number],
      default: 0
    },
    barHeight: {
      type: [String, Number],
      default: 2
    }
  },
  data() {
    return {
      barStyle: ''
    }
  },
  computed: {
    wrapClass() {
      const { customClass, disabled } = this
      return `custom-class ${customClass} ${ utils.bem('slider', { disabled }) }`
    },
    wrapStyle() {
      const { inactiveColor } = this
      return inactiveColor ? 'background:' + inactiveColor : ''
    },
    compBarStyle() {
      const { barHeight, activeColor } = this
      var styles = [['height', utils.addUnit(barHeight)]]

      if (activeColor) {
        styles.push(['background', activeColor])
      }

      return styles.map(item => item.join(':')).join(';')
    },
    sliderBarStyle() {
      const { barStyle, compBarStyle } = this
      return `${ barStyle };${ compBarStyle }`
    }
  },

  created() {
    this.updateValue(this.value)
  },

  methods: {
    onTouchStart(event) {
      if (this.disabled) return

      this.touchStart(event)
      this.startValue = this.format(this.value)
      this.dragStatus = 'start'
    },

    onTouchMove(event) {
      if (this.disabled) return

      if (this.dragStatus === 'start') {
        this.$emit('drag-start')
      }

      this.touchMove(event)
      this.dragStatus = 'draging'

      this.getRect('.van-slider').then(rect => {
        const diff = (this.deltaX / rect.width) * 100
        this.newValue = this.startValue + diff
        this.updateValue(this.newValue, false, true)
      })
    },

    onTouchEnd() {
      if (this.disabled) return

      if (this.dragStatus === 'draging') {
        this.updateValue(this.newValue, true)
        this.$emit('drag-end')
      }
    },

    onClick(event) {
      if (this.disabled) return

      const { min } = this

      this.getRect('.van-slider').then(rect => {
        // 支付宝下是 clientX
        const value =
          ((event.detail.x || event.detail.clientX - rect.left) / rect.width) * this.getRange() + Number(min)
        this.updateValue(value, true)
      })
    },

    updateValue(value, end, drag) {
      value = this.format(value)
      const { min } = this
      const width = `${((value - min) * 100) / this.getRange()}%`

      this.barStyle = `width: ${width}; ${drag ? 'transition: none;' : ''}`
      this.$emit('input', value)

      if (drag) {
        this.$emit('drag', { value })
      }

      if (end) {
        this.$emit('change', value)
      }
    },

    getRange() {
      const { max, min } = this
      return max - min
    },

    format(value) {
      const { max, min, step } = this
      return Math.round(Math.max(min, Math.min(value, max)) / step) * step
    }
  }
})
</script>

<style lang="less">
@import './index.less';
</style>
