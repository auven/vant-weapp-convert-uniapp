<template>
  <div>
    <demo-block title="基础用法">
      <van-circle type="2d" v-model="value" :text="`${value}%`" />
    </demo-block>

    <demo-block title="样式定制">
      <van-circle v-model="value" :stroke-width="6" text="宽度定制" />
      <van-circle v-model="value" layer-color="#eeeeee" color="#ee0a24" text="颜色定制" />
      <van-circle v-model="value" :color="gradientColor" text="渐变色" />
      <van-circle v-model="value" color="#07c160" :clockwise="false" text="逆时针" />
      <van-circle v-model="value" size="120" text="大小定制" />
    </demo-block>

    <van-button type="primary" size="small" @tap="run(10)">增加</van-button>
    <van-button type="danger" size="small" @tap="run(-10)">减少</van-button>

  </div>
</template>

<script>
import DemoBlock from '@/components/demo-block'
import VanButton from '@/packages/van-button/van-button'
import VanCircle from '@/packages/van-circle/van-circle'
const format = rate => Math.min(Math.max(rate, 0), 100);
export default {
  components: {
    DemoBlock,
    VanButton,
    VanCircle
  },
  data() {
    return {
      value: 25,
      gradientColor: {
        '0%': '#ffd01e',
        '100%': '#ee0a24'
      }
    }
  },
  methods: {
    run(step) {
      this.value = format((this.value += step))
    }
  }
}
</script>

<style>
.van-circle {
  margin: 5px 10px 20px;
}
.van-button{
  margin-left: 10px;
}
</style>
