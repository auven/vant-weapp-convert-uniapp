<template>
  <view class="custom-class van-empty" :class="customClass">
    <view class="van-empty__image">
      <slot name="image"></slot>
    </view>
    <view class="van-empty__image">
      <image v-if="imageUrl"
        class="van-empty__image__img"
        :src="imageUrl" />
    </view>
    <view class="van-empty__description">
      <slot name="description"></slot>
    </view>
    <view class="van-empty__description">
      {{ description }}
    </view>
    <view class="van-empty__bottom">
      <slot></slot>
    </view>
  </view>
</template>

<script>
import { VantComponent } from '../common/component'
const PRESETS = ['error', 'search', 'default', 'network']
export default VantComponent({
  props: {
    description: String,
    image: {
      type: String,
      default: 'default',
    },
  },
  data() {
    return {
      imageUrl: ''
    }
  },
  created() {
    if (PRESETS.indexOf(this.image) !== -1) {
      this.imageUrl = `https://img.yzcdn.cn/vant/empty-image-${this.image}.png`
    } else {
      this.imageUrl = this.image
    }
  }
})
</script>

<style lang="less">
@import './index.less';
</style>
