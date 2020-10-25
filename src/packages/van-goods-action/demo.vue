<template>
  <div>
    <demo-block title="基础用法">
      <van-goods-action
        custom-class="goods-action-position"
        :safe-area-inset-bottom="false"
      >
        <van-goods-action-icon icon="chat-o" text="客服" open-type="contact" />
        <van-goods-action-icon
          icon="cart-o"
          text="购物车"
          @click="onClickIcon"
        />
        <van-goods-action-button
          text="加入购物车"
          type="warning"
          @click="onClickButton"
          class="van-goods-action-button-host"
        />
        <van-goods-action-button text="立即购买" @click="onClickButton" class="van-goods-action-button-host" />
      </van-goods-action>
    </demo-block>

    <demo-block title="提示信息">
      <van-goods-action
        custom-class="goods-action-position"
        :safe-area-inset-bottom="false"
      >
        <van-goods-action-icon icon="chat-o" text="客服" dot />
        <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button text="加入购物车" type="warning" class="van-goods-action-button-host" />
        <van-goods-action-button text="立即购买" class="van-goods-action-button-host" />
      </van-goods-action>
    </demo-block>

    <demo-block title="自定义按钮颜色">
      <van-goods-action
        custom-class="goods-action-position"
        :safe-area-inset-bottom="false"
      >
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button
          color="#be99ff"
          type="warning"
          text="加入购物车"
          class="van-goods-action-button-host"
        />
        <van-goods-action-button color="#7232dd" text="立即购买" class="van-goods-action-button-host" />
      </van-goods-action>
    </demo-block>

    <demo-block title="朴素按钮">
      <van-goods-action
        custom-class="goods-action-position"
        :safe-area-inset-bottom="false"
      >
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button
          color="#7232dd"
          text="加入购物车"
          type="warning"
          class="van-goods-action-button-host"
        />
        <van-goods-action-button plain color="#7232dd" text="立即购买" class="van-goods-action-button-host" />
      </van-goods-action>
    </demo-block>

    <van-toast ref="van-toast" id="van-toast" />
  </div>
</template>

<script>
import Toast from '../van-toast/toast'
export default {
  methods: {
    onClickIcon() {
      Toast('点击图标')
    },

    onClickButton() {
      Toast('点击按钮')
    }
  }
}
</script>

<style>
.goods-action-position {
  position: relative !important;
}
</style>
