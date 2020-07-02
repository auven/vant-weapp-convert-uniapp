<template>
  <view class="demo-home-nav">
    <view class="demo-home-nav__title">{{ group.groupName }}</view>
    <view class="demo-home-nav__group">
      <view
        v-for="item in group.list"
        :key="item.title"
        class="demo-home-nav__block"
        @tap="onClick(item)"
      >
        {{ item.title }}
        <van-icon name="arrow" :custom-style="demoHomeNavIcon" />
      </view>
    </view>
  </view>
</template>

<script>
import { isDef } from '../../packages/common/utils'
export default {
  props: {
    group: Object
  },

  data() {
    return {
      demoHomeNavIcon: `
        position: absolute;
        top: 50%;
        right: 16px;
        width: 16px;
        height: 16px;
        margin-top: -8px;
        color: rgb(182, 195, 210);
        font-weight: 900;
      `
    }
  },

  methods: {
    onClick(item) {
      uni.navigateTo({
        url: isDef(item.component) ? `/packages/${ item.path.replace('/', '') }/demo` : `/packages/van-${ item.path.replace('/', '') }/demo`
      })
    }
  }
}
</script>

<style>
.demo-home-nav__title {
  margin: 24px 0 8px 16px;
  color: rgba(69, 90, 100, 0.6);
  font-size: 14px;
}

.demo-home-nav__block {
  position: relative;
  display: flex;
  margin: 0 0 12px;
  padding-left: 20px;
  color: #323233;
  font-weight: 500;
  font-size: 14px;
  line-height: 40px;
  background: #f7f8fa;
  border-radius: 99px;
  transition: background 0.3s;
}

.demo-home-nav__block:hover {
  background: darken(#f7f8fa, 3%);
}

.demo-home-nav__block:active {
  background: darken(#f7f8fa, 6%);
}

.demo-home-nav__icon {
  position: absolute !important;
  top: 50%;
  right: 16px;
  width: 16px;
  height: 16px;
  margin-top: -8px;
  color: rgb(182, 195, 210);
  font-weight: 900 !important;
}
</style>
