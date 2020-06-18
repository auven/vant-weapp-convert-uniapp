<template>
  <view class="van-panel van-hairline--top-bottom custom-class" :class="customClass">
    <van-cell
      v-if="title || desc || status"
      :title="title"
      :label="desc"
      :value="status"
      :custom-class="headerClass"
      value-class="van-panel__header-value"
    />
    <slot v-else name="header" />

    <view class="van-panel__content">
      <slot />
    </view>

    <view
      v-if="useFooterSlot"
      class="van-panel__footer van-hairline--top footer-class"
      :class="footerClass"
    >
      <slot name="footer" />
    </view>
  </view>
</template>

<script>
import VanCell from '../van-cell/van-cell'
import { VantComponent } from '../common/component'
export default {
  ...VantComponent({
    classes: ['header-class', 'footer-class']
  }),
  components: {
    VanCell
  },
  props: {
    desc: String,
    title: String,
    status: String,
    useFooterSlot: Boolean,
    customClass: String,
    headerClass: String,
    footerClass: String
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
