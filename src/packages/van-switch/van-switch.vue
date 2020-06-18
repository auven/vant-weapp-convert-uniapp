<template>
  <view
    :class="wrapClass"
    :style="wrapStyle"
    @tap="onClick"
  >
    <view class="van-switch__node node-class">
      <van-loading
        v-if="loading"
        :color="loadingColor"
        class="van-switch__loading"
        custom-class="van-switch__loading"
      />
    </view>
  </view>
</template>

<script>
import { BLUE, GRAY_DARK } from '../common/color'
import { VantComponent } from '../common/component'
import VanLoading from '../van-loading/van-loading'
const utils = require('../wxs/utils')
export default {
  ...VantComponent({
    classes: ['node-class']
  }),
  components: {
    VanLoading
  },
  props: {
    value: {
      type: null
    },
    loading: Boolean,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    size: {
      type: String,
      default: '30px'
    },
    activeValue: {
      type: null,
      default: true
    },
    inactiveValue: {
      type: null,
      default: false
    },
    customClass: String
    // asyncChange: Boolean
  },

  data() {
    return {
      loadingColor: ''
    }
  },

  computed: {
    wrapClass() {
      const { customClass, value, activeValue, disabled } = this
      return `custom-class ${ customClass } ${ utils.bem('switch', { on: value === activeValue, disabled }) }`
    },
    wrapStyle() {
      const { size, value, activeColor, inactiveColor } = this
      return `font-size: ${ size }; ${ (value ? activeColor : inactiveColor) ? 'background-color: ' + (value ? activeColor : inactiveColor ) : '' }`
    }
  },

  created() {
    const { value } = this
    const loadingColor = this.getLoadingColor(value)
    this.loadingColor = loadingColor
  },

  methods: {
    getLoadingColor(checked) {
      const { activeColor, inactiveColor } = this
      return checked ? activeColor || BLUE : inactiveColor || GRAY_DARK
    },

    onClick() {
      const { activeValue, inactiveValue } = this
      if (!this.disabled && !this.loading) {
        const checked = this.value === activeValue
        const value = checked ? inactiveValue : activeValue
        // if (!asyncChange) {
        //   // 非异步控制
        //   this.$emit('input', value)
        // }
        this.$emit('input', value)
        this.$emit('change', value)
      }
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
