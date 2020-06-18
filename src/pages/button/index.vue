<template>
  <div>
    <demo-block title="按钮类型" padding>
      <view class="row">
        <van-button id="im-id" :custom-style="demoMarginRight">默认按钮</van-button>
        <van-button type="primary" :custom-style="demoMarginRight">主要按钮</van-button>
        <van-button type="info" :custom-style="demoMarginRight">信息按钮</van-button>
      </view>
      <van-button type="danger" :custom-style="demoMarginRight">危险按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
    </demo-block>

    <demo-block title="朴素按钮" padding>
      <van-button type="primary" plain :custom-style="demoMarginRight">朴素按钮</van-button>
      <van-button type="info" plain>朴素按钮</van-button>
    </demo-block>

    <demo-block title="细边框" padding>
      <van-button type="primary" plain hairline :custom-style="demoMarginRight">细边框按钮</van-button>
      <van-button type="info" plain hairline>细边框按钮</van-button>
    </demo-block>

    <demo-block title="禁用状态" padding>
      <van-button type="primary" disabled :custom-style="demoMarginRight">禁用状态</van-button>
      <van-button type="info" disabled>禁用状态</van-button>
    </demo-block>

    <demo-block title="加载状态" padding>
      <van-button loading type="primary" :custom-style="demoMarginRight" />
      <van-button loading type="primary" loading-type="spinner" :custom-style="demoMarginRight" />
      <van-button loading type="info" loading-text="加载中..." />
    </demo-block>

    <demo-block title="按钮形状" padding>
      <van-button type="primary" square :custom-style="demoMarginRight">方形按钮</van-button>
      <van-button type="info" round>圆形按钮</van-button>
    </demo-block>

    <demo-block title="图标按钮" padding>
      <van-button type="primary" icon="star-o" :custom-style="demoMarginRight" />
      <van-button type="primary" icon="star-o" :custom-style="demoMarginRight">按钮</van-button>
      <van-button plain type="primary" icon="https://img.yzcdn.cn/vant/logo.png">按钮</van-button>
    </demo-block>

    <demo-block title="按钮尺寸" padding>
      <van-button type="primary" size="large" block :custom-style="demoMarginBottom">大号按钮</van-button>
      <van-button type="primary" :custom-style="demoMarginRight">普通按钮</van-button>
      <van-button type="primary" size="small" :custom-style="demoMarginRight">小型按钮</van-button>
      <van-button type="primary" size="mini">迷你按钮</van-button>
    </demo-block>

    <demo-block title="块级元素" padding>
      <van-button type="primary" :custom-style="demoMarginBottom">普通按钮</van-button>
      <van-button type="primary" block>块级元素</van-button>
    </demo-block>

    <demo-block title="自定义颜色" padding>
      <van-button color="#7232dd" :custom-style="demoMarginRight">单色按钮</van-button>
      <van-button color="#7232dd" :custom-style="demoMarginRight" plain>单色按钮</van-button>
      <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮</van-button>
    </demo-block>
  </div>
</template>

<script>
import DemoBlock from '@/components/demo-block'
import VanButton from '@/packages/van-button/van-button'
export default {
  components: {
    DemoBlock,
    VanButton
  }
}
</script>

<style>
.row {
  height: 44px;
  margin-bottom: 15px;
}
</style>
