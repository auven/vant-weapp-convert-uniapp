<template>
  <view class="van-stepper custom-class" :class="customClass">
    <view
      v-if="showMinus"
      data-type="minus"
      :style="stepperBtnStyle"
      :class="stepperMinusClass"
      hover-class="van-stepper__minus--hover"
      hover-stay-time="70"
      @tap="onTap"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    />
    <input
      :type="integer ? 'number' : 'digit'"
      :class="stepperInputClass"
      :style="stepperInputStyle"
      :value="currentValue"
      :focus="focus"
      :disabled="disabled || disableInput"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
    />
    <view
      v-if="showPlus"
      data-type="plus"
      :style="stepperBtnStyle"
      :class="stepperPlusClass"
      hover-class="van-stepper__plus--hover"
      hover-stay-time="70"
      @tap="onTap"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    />
  </view>
</template>

<script>
import { VantComponent } from '../common/component'
import { isDef } from '../common/utils'
const utils = require('../wxs/utils')
const LONG_PRESS_START_TIME = 600
const LONG_PRESS_INTERVAL = 200

// add num and avoid float number
function add(num1, num2) {
  const cardinal = 10 ** 10
  return Math.round((num1 + num2) * cardinal) / cardinal
}

function equal(value1, value2) {
  return String(value1) === String(value2)
}
export default VantComponent({
  classes: ['input-class', 'plus-class', 'minus-class'],
  props: {
    value: {
      type: null
    },
    integer: {
      type: Boolean
    },
    disabled: Boolean,
    inputWidth: null,
    buttonSize: null,
    asyncChange: Boolean,
    disableInput: Boolean,
    decimalLength: {
      type: Number,
      default: null
    },
    min: {
      type: null,
      default: 1
    },
    max: {
      type: null,
      default: Number.MAX_SAFE_INTEGER
    },
    step: {
      type: null,
      default: 1
    },
    showPlus: {
      type: Boolean,
      default: true
    },
    showMinus: {
      type: Boolean,
      default: true
    },
    disablePlus: Boolean,
    disableMinus: Boolean,
    longPress: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      currentValue: ''
    }
  },

  computed: {
    stepperBtnStyle() {
      const { buttonSize } = this
      return `width: ${ utils.addUnit(buttonSize) }; height: ${ utils.addUnit(buttonSize) }`
    },
    stepperMinusClass() {
      const { minusClass, disabled, disableMinus, currentValue, min } = this
      return `minus-class ${minusClass} ${ utils.bem('stepper__minus', { disabled: disabled || disableMinus || currentValue <= min }) }`
    },
    stepperPlusClass() {
      const { plusClass, disabled, disablePlus, currentValue, max } = this
      return `plus-class ${plusClass} ${ utils.bem('stepper__plus', { disabled: disabled || disablePlus || currentValue >= max }) }`
    },
    stepperInputClass() {
      const { inputClass, disabled, disableInput } = this
      return `input-class ${inputClass} ${ utils.bem('stepper__input', { disabled: disabled || disableInput }) }`
    },
    stepperInputStyle() {
      const { inputWidth, buttonSize } = this
      return `width: ${ utils.addUnit(inputWidth) }; height: ${ utils.addUnit(buttonSize) }`
    }
  },

  watch: {
    value(val) {
      this.currentValue = this.format(val)
    }
  },

  created() {
    this.currentValue = this.format(this.value)
  },

  methods: {
    check() {
      const val = this.format(this.currentValue)
      if (!equal(val, this.currentValue)) {
        this.currentValue = val
      }
    },

    isDisabled(type) {
      if (type === 'plus') {
        return (
          this.disabled ||
          this.disablePlus ||
          this.currentValue >= this.max
        )
      }

      return (
        this.disabled ||
        this.disableMinus ||
        this.currentValue <= this.min
      )
    },

    onFocus(event) {
      this.$emit('focus', event.detail)
    },

    onBlur(event) {
      const value = this.format(event.detail.value)
      this.emitChange(value)
      this.$emit('blur', {
        ...event.detail,
        value
      })
    },

    // filter illegal characters
    filter(value) {
      value = String(value).replace(/[^0-9.-]/g, '')

      if (this.integer && value.indexOf('.') !== -1) {
        value = value.split('.')[0]
      }

      return value
    },

    // limit value range
    format(value) {
      value = this.filter(value)

      // format range
      value = value === '' ? 0 : +value
      value = Math.max(Math.min(this.max, value), this.min)

      // format decimal
      if (isDef(this.decimalLength)) {
        value = value.toFixed(this.decimalLength)
      }

      return value
    },

    onInput(event) {
      const { value = '' } = event.detail || {}

      // allow input to be empty
      if (value === '') {
        return
      }

      let formatted = this.filter(value)

      // limit max decimal length
      if (isDef(this.decimalLength) && formatted.indexOf('.') !== -1) {
        const pair = formatted.split('.')
        formatted = `${pair[0]}.${pair[1].slice(0, this.decimalLength)}`
      }

      this.emitChange(formatted)
    },

    emitChange(value) {
      if (!this.asyncChange) {
        this.currentValue = value

        this.$emit('input', value)
      }

      this.$emit('change', value)
    },

    onChange() {
      const { type } = this
      if (this.isDisabled(type)) {
        this.$emit('overlimit', type)
        return
      }

      const diff = type === 'minus' ? -this.step : +this.step

      const value = this.format(add(+this.currentValue, diff))

      this.emitChange(value)
      this.$emit(type)
    },

    longPressStep() {
      this.longPressTimer = setTimeout(() => {
        this.onChange()
        this.longPressStep()
      }, LONG_PRESS_INTERVAL)
    },

    onTap(event) {
      const { type } = event.currentTarget.dataset
      this.type = type
      this.onChange()
    },

    onTouchStart(event) {
      if (!this.longPress) {
        return
      }
      clearTimeout(this.longPressTimer)

      const { type } = event.currentTarget.dataset
      this.type = type
      this.isLongPress = false

      this.longPressTimer = setTimeout(() => {
        this.isLongPress = true
        this.onChange()
        this.longPressStep()
      }, LONG_PRESS_START_TIME)
    },

    onTouchEnd() {
      if (!this.longPress) {
        return
      }
      clearTimeout(this.longPressTimer)
    }
  }
})
</script>

<style lang="less">
@import './index.less';
</style>
