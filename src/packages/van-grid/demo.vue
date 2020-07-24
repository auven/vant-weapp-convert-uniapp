<template>
  <div>
    <demo-block title="基本用法">
      <van-grid>
        <van-grid-item icon="photo-o" icon-color="red" text="文字" v-for="item in array4" :key="item" />
      </van-grid>
    </demo-block>

    <demo-block title="自定义列数">
      <van-grid column-num="3">
        <van-grid-item icon="photo-o" text="文字" v-for="item in array6" :key="item" />
      </van-grid>
    </demo-block>

    <demo-block title="自定义内容">
      <van-grid column-num="3" :border="false">
        <van-grid-item use-slot v-for="n in array3" :key="n">
          <image style="width: 100%; height: 90px;" :src="`https://img.yzcdn.cn/vant/apple-${ n + 1 }.jpg`" />
        </van-grid-item>
      </van-grid>
    </demo-block>

    <demo-block title="正方形格子">
      <van-grid square>
        <van-grid-item icon="photo-o" text="文字" v-for="n in array8" :key="n" />
      </van-grid>
    </demo-block>

    <demo-block title="格子间距">
      <van-grid :gutter="gutter" :column-num="columnNum" :direction="direction">
        <van-grid-item icon="photo-o" text="文字" v-for="n in array8" :key="n" />
      </van-grid>
    </demo-block>

    <div style="padding: 15px">
      <van-button @click="toggleGutter" type="primary" custom-style="margin-right: 15px">修改格子间距</van-button>
      <van-button @click="toggleColumnNum" type="primary" custom-style="margin-right: 15px">修改列数</van-button>
      <van-button @click="toggleDirection" type="primary">修改横向竖向</van-button>
    </div>

    <demo-block title="内容横排">
      <van-grid direction="horizontal" column-num="3">
        <van-grid-item icon="photo-o" text="文字" v-for="item in array3" :key="item" />
      </van-grid>
    </demo-block>

    <demo-block title="页面跳转">
      <van-grid clickable column-num="2">
        <van-grid-item icon="home-o" link-type="navigateTo" url="/packages/dashboard/index" text="Navigate 跳转" />
        <van-grid-item icon="search" link-type="reLaunch" url="/packages/dashboard/index" text="ReLaunch 跳转" />
      </van-grid>
    </demo-block>

    <demo-block title="徽标提示">
      <van-grid column-num="2">
        <van-grid-item icon="home-o" text="文字" dot />
        <van-grid-item icon="search" text="文字" info="99+" />
      </van-grid>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array3: [0, 1, 2],
      array4: [0, 1, 2, 3],
      array6: [0, 1, 2, 3, 4, 5],
      array8: [0, 1, 2, 3, 4, 5, 6, 7],
      gutter: 10,
      columnNum: 4,
      direction: 'vertical'
    }
  },
  methods: {
    toggleDirection() {
      this.direction = this.direction === 'vertical' ? 'horizontal' : 'vertical'
    },
    toggleColumnNum() {
      this.columnNum = this.columnNum === 4 ? 2 : 4
    },
    toggleGutter() {
      this.gutter = this.gutter === 10 ? 20 : 10
    }
  }
}
</script>

<style>

</style>
