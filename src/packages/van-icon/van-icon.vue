<template>
  <view
    :class="wrapClass"
    :style="wrapStyle"
    @tap="onClick"
  >
    <van-info
      v-if="info !== null || dot"
      :dot="dot"
      :info="info"
      custom-class="van-icon__info"
    />
    <image
      v-if="isImageName"
      :src="name"
      mode="aspectFit"
      class="van-icon__image"
    />
  </view>
</template>

<script>
import { VantComponent } from '../common/component'
import VanInfo from '../van-info/van-info'
const utils = require('../wxs/utils')
export default {
  ...VantComponent({}),
  components: {
    VanInfo
  },
  props: {
    dot: Boolean,
    info: [String, Number],
    size: [String, Number],
    color: String,
    customStyle: String,
    classPrefix: {
      type: String,
      default: 'van-icon'
    },
    name: String,
    customClass: String
  },

  computed: {
    isImageName() {
      return this.name.indexOf('/') !== -1
    },
    wrapClass() {
      const { customClass, classPrefix, isImageName, name } = this
      return `custom-class ${customClass} ${ classPrefix } ${ isImageName ? 'van-icon--image' : classPrefix + '-' + name }`
    },
    wrapStyle() {
      const { color, size, customStyle } = this
      return `color: ${ color };font-size: ${ utils.addUnit(size) };${ customStyle }`
    }
  },

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
