<template>
  <div>
    <demo-block title="基础用法">
      <van-slider
        value="50"
        custom-class="slider"
        @change="onChange"
      />
    </demo-block>

    <demo-block title="指定选择范围">
      <van-slider
        custom-class="slider"
        min="-50"
        max="50"
        @change="onChange"
      />
    </demo-block>

    <demo-block title="禁用">
      <van-slider
        custom-class="slider"
        value="50"
        disabled
      />
    </demo-block>

    <demo-block title="指定步长">
      <van-slider
        custom-class="slider"
        value="50"
        step="10"
        @change="onChange"
      />
    </demo-block>

    <demo-block title="自定义样式">
      <van-slider
        value="50"
        custom-class="slider"
        bar-height="4px"
        active-color="#ee0a24"
      />
    </demo-block>

    <demo-block title="自定义按钮">
      <van-slider
        v-model="currentValue"
        custom-class="slider"
        use-button-slot
        active-color="#ee0a24"
        @drag="onDrag"
      >
        <view class="custom-button" slot="button">
          {{ currentValue }}
        </view>
      </van-slider>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentValue: 50
    }
  },
  methods: {
    onChange(value) {
      uni.showToast({
        icon: 'none',
        title: `当前值：${value}`
      });
    },

    onDrag(detail) {
      console.log(this.currentValue)

      console.log(detail)
    }
  }
}
</script>

<style>
.slider {
  margin: 0 15px 30px;
}

.custom-button {
  width: 26px;
  color: #fff;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  border-radius: 100px;
  background-color: #ee0a24;
}
</style>
