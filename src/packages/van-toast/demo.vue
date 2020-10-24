<template>
  <div>
    <demo-block title="文字提示" padding>
      <van-button type="primary" @click="showToast" custom-class="demo-margin-right">文字提示</van-button>
      <van-button type="primary" @click="showLongToast">长文字提示</van-button>
    </demo-block>

    <demo-block title="加载提示" padding>
      <van-button type="primary" @click="showLoadingToast" custom-class="demo-margin-right">加载提示</van-button>
      <van-button type="primary" @click="showCustomLoadingToast">自定义加载图标</van-button>
    </demo-block>

    <demo-block title="成功/失败提示" padding>
      <van-button type="info" @click="showSuccessToast" custom-class="demo-margin-right">成功提示</van-button>
      <van-button type="danger" @click="showFailToast">失败提示</van-button>
    </demo-block>

    <demo-block title="动态更新提示" padding>
      <van-button type="primary" @click="showCustomizedToast">动态更新提示</van-button>
    </demo-block>

    <van-toast ref="van-toast" id="van-toast" />

    <van-toast ref="custom-selector" id="custom-selector" />

  </div>
</template>

<script>
import Toast from './toast'
export default {
  methods: {
    showToast() {
      Toast('提示内容');
    },

    showLongToast() {
      Toast('这是一条长文字提示，超过一定字数就会换行');
    },

    showLoadingToast() {
      Toast.loading({ message: '加载中...', forbidClick: true });
    },

    showCustomLoadingToast() {
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        loadingType: 'spinner',
      });
    },

    showSuccessToast() {
      Toast.success('成功文案');
    },

    showFailToast() {
      Toast.fail('失败提示');
    },

    showCustomizedToast() {
      const text = second => `倒计时 ${second} 秒`;
      const toast = Toast.loading({
        duration: 0,
        forbidClick: true,
        message: text(3),
        selector: 'custom-selector'
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.optionsMessage = text(second)
        } else {
          clearInterval(timer);
          Toast.clear();
        }
      }, 1000);
    }
  }
}
</script>

<style>

</style>
