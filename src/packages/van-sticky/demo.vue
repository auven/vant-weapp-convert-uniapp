<template>
  <div>
    <demo-block title="基础用法">
      <van-sticky :scroll-top="pageScrollTop">
        <van-button type="primary" custom-style="margin-left: 15px">
          基础用法
        </van-button>
      </van-sticky>
    </demo-block>

    <demo-block title="吸顶距离">
      <van-sticky :offset-top="50" :scroll-top="pageScrollTop">
        <van-button type="info" custom-style="margin-left: 115px">
          吸顶距离
        </van-button>
      </van-sticky>
    </demo-block>

    <demo-block title="指定容器">
      <view id="container" style="height: 150px; background-color: #fff;">
        <van-sticky :container="container" :scroll-top="pageScrollTop">
          <van-button type="warning" custom-style="margin-left: 215px;">
            指定容器
          </van-button>
        </van-sticky>
      </view>
    </demo-block>

    <demo-block title="嵌套在 scroll-view 内使用">
      <scroll-view
        @scroll="onScroll"
        scroll-y
        id="scroller"
        style="height: 200px; background-color: #fff;"
      >
        <view style="height: 400px; padding-top: 50px;">
          <van-sticky
            :scroll-top="scrollTop"
            :offset-top="offsetTop"
          >
            <van-button type="warning">
              嵌套在 scroll-view 内
            </van-button>
          </van-sticky>
        </view>
      </scroll-view>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      container: null,
      scrollTop: 0,
      offsetTop: 0,
      pageScrollTop: 0
    }
  },
  onPageScroll(e) {
    this.pageScrollTop = e.scrollTop
    this.setContainer()
  },
  methods: {
    onScroll(event) {
      uni
        .createSelectorQuery()
        .select('#scroller')
        .boundingClientRect(res => {
          this.scrollTop = event.detail.scrollTop
          this.offsetTop = res.top
        })
        .exec()
    },
    setContainer() {
      uni
        .createSelectorQuery()
        .select('#container')
        .boundingClientRect(res => {
          this.container = res
        })
        .exec()
    }
  }
}
</script>

<style>
page {
  height: 200vh;
}

.van-button {
  margin-left: 16px;
}

.sticky-container {
  position: relative;
  z-index: -1;
  height: 150px;
  background-color: #fff;
}
</style>
