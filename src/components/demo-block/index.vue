<template>
  <view
    :class="wrapClass"
  >
    <view v-if="title" class="demo-block__title">{{ title }}</view>
    <slot />
  </view>
</template>

<script>
export default {
  props: {
    title: String,
    padding: Boolean
  },
  computed: {
    wrapClass() {
      const { padding } = this
      return `custom-class demo-block van-clearfix ${ padding ? 'demo-block--padding' : '' }`
    }
  }
}
</script>

<style lang="less">
@import '~@/packages/common/index.less';

.demo-block__title {
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  color: rgba(69, 90, 100, 0.6);
  padding: 20px 15px 15px;
}

.demo-block--padding {
  padding: 0 15px;
}

.demo-block--padding .demo-block__title {
  padding-left: 0;
}
</style>
