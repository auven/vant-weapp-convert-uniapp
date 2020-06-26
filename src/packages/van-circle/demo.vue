<template>
  <div>
    <demo-block title="基础用法">
      <van-circle circle-id="circle1" type="2d" v-model="value" :text="`${value}%`" />
    </demo-block>

    <demo-block title="样式定制">
      <van-circle circle-id="circle2" v-model="value" :stroke-width="6" text="宽度定制" />
      <van-circle circle-id="circle3" v-model="value" layer-color="#eeeeee" color="#ee0a24" text="颜色定制" />
      <van-circle circle-id="circle4" v-model="value" :color="gradientColor" text="渐变色" />
      <van-circle circle-id="circle5" v-model="value" color="#07c160" :clockwise="false" text="逆时针" />
      <van-circle circle-id="circle6" v-model="value" size="120" text="大小定制" />
    </demo-block>

    <van-button type="primary" size="small" @click="run(10)">增加</van-button>
    <van-button type="danger" size="small" @click="run(-10)">减少</van-button>

    <demo-block title="修改颜色">
      <van-circle circle-id="circle7" type="2d" v-model="value" :text="`${value}%`" :color="color" />
      <van-circle circle-id="circle8" v-model="value" :text="`${value}%`" :color="color" />
    </demo-block>

    <van-button v-for="(item, index) in colorList" :key="index" :color="item" @click="changeColor(item)">{{ item }}</van-button>

  </div>
</template>

<script>
const format = rate => Math.min(Math.max(rate, 0), 100);
export default {
  data() {
    return {
      value: 25,
      gradientColor: {
        '0%': '#ffd01e',
        '100%': '#ee0a24'
      },
      color: '#fa541c',
      colorList: ['#fa541c', '#13c2c2', '#722ed1', '#eb2f96']
    }
  },
  methods: {
    run(step) {
      this.value = format((this.value += step))
    },
    changeColor(color) {
      console.log('修改颜色', color)
      this.color = color
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
