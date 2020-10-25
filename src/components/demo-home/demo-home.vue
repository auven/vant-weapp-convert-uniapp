<template>
  <view class="demo-home">
    <view class="demo-home__title">
      <image
        mode="aspectFit"
        class="demo-home__image"
        src="https://images.weserv.nl/?url=https://gitee.com/auven/vant-weapp-convert-uniapp/raw/master/src/static/logo.png"
      />
      <view class="demo-home__text">Vant + Uniapp</view>
    </view>
    <view class="demo-home__desc">
      轻量、可靠的 Uniapp 跨端 UI 组件库
    </view>
    <view v-for="(group, index) in list" :key="index">
      <demo-home-nav :group="group" />
    </view>
  </view>
</template>

<script>
export default {
  props: {
    list: Array
  }
}
</script>

<style>
.demo-home {
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding: 46px 20px 20px;
  background: #fff;
}

.demo-home__title,
.demo-home__desc {
  padding-left: 16px;
  font-weight: normal;
  line-height: 1;
  user-select: none;
}

.demo-home__title {
  margin: 0 0 16px;
  font-size: 32px;
}

.demo-home__image,
.demo-home__text {
  display: inline-block;
  vertical-align: middle;
}

.demo-home__image {
  width: 32px;
  height: 32px;
}

.demo-home__text {
  margin-left: 16px;
  font-weight: 500;
}

.demo-home__title .demo-home--small {
  font-size: 24px;
}

.demo-home__desc {
  margin: 0 0 40px;
  color: rgba(69, 90, 100, 0.6);
  font-size: 14px;
}
</style>
