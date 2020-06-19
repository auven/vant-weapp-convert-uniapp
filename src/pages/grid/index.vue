<template>
  <div>
    <demo-block title="基本用法">
      <van-grid>
        <van-grid-item icon="photo-o" text="文字" v-for="item in array4" :key="item" />
      </van-grid>
    </demo-block>

    <demo-block title="自定义列数">
      <van-grid column-num="3">
        <van-grid-item icon="photo-o" text="文字" v-for="item in array6" :key="item" />
      </van-grid>
    </demo-block>

    <demo-block title="自定义内容">
      <van-grid column-num="3" :border="false">
        <van-grid-item use-slot v-for="index in array3" :key="index">
          <image style="width: 100%; height: 90px;" :src="`https://img.yzcdn.cn/vant/apple-${ index + 1 }.jpg`" />
        </van-grid-item>
      </van-grid>
    </demo-block>

    <demo-block title="正方形格子">
      <van-grid square>
        <van-grid-item icon="photo-o" text="文字" v-for="item in array8" :key="item" />
      </van-grid>
    </demo-block>

    <demo-block title="格子间距">
      <van-grid :gutter="10">
        <van-grid-item icon="photo-o" text="文字" v-for="(item, index) in array8" :key="item" :item-index="index" />
      </van-grid>
    </demo-block>

    <demo-block title="内容横排">
      <van-grid direction="horizontal" column-num="3">
        <van-grid-item icon="photo-o" text="文字" v-for="item in array3" :key="item" />
      </van-grid>
    </demo-block>

    <demo-block title="页面跳转">
      <van-grid clickable column-num="2">
        <van-grid-item icon="home-o" link-type="navigateTo" url="/pages/dashboard/index" text="Navigate 跳转" />
        <van-grid-item icon="search" link-type="reLaunch" url="/pages/dashboard/index" text="ReLaunch 跳转" />
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
import DemoBlock from '@/components/demo-block'
import VanGrid from '@/packages/van-grid/van-grid'
import VanGridItem from '@/packages/van-grid-item/van-grid-item'
export default {
  components: {
    DemoBlock,
    VanGrid,
    VanGridItem
  },
  data() {
    return {
      array3: [0, 1, 2],
      array4: [0, 1, 2, 3],
      array6: [0, 1, 2, 3, 4, 5],
      array8: [0, 1, 2, 3, 4, 5, 6, 7]
    }
  }
}
</script>

<style>

</style>
