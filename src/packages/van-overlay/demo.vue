<template>
  <div>
    <demo-block title="基础用法" padding>
      <van-button type="primary" @click="onClickShow">
        显示遮罩层
      </van-button>
      <van-overlay :show="show" @click-overlay="onClickHide" />
    </demo-block>

    <demo-block title="嵌入内容" padding>
      <van-button type="primary" @click="onClickShowEmbedded">
        嵌入内容
      </van-button>
      <van-overlay :show="showEmbedded" @click-overlay="onClickHideEmbedded">
        <view class="wrapper">
          <div class="block" catch:tap="noop" />
        </view>
      </van-overlay>
    </demo-block>

    <div style="height: 100vh"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      showEmbedded: false
    }
  },
  methods: {
    onClickShow() {
      this.show = true
    },

    onClickHide() {
      this.show = false
    },

    onClickShowEmbedded() {
      this.showEmbedded = true
    },

    onClickHideEmbedded() {
      this.showEmbedded = false
    },

    noop() {}
  }
}
</script>

<style>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>
