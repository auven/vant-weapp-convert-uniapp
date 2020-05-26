<template>
  <div>
    <van-button @click="active = 0">用法示例</van-button>
    <van-button @click="active = 1">基础图标</van-button>
    <van-button @click="active = 2">线框风格</van-button>
    <van-button @click="active = 3">实底风格</van-button>
    <div v-if="active === 0" title="用法示例" class="demo-tab-pane">
      <demo-block title="基础用法">
        <van-col custom-class="col" span="6">
          <van-icon :name="demoIcon" size="32px" custom-class="icon" />
        </van-col>
        <van-col custom-class="col" span="6">
          <van-icon :name="demoImage" size="32px" custom-class="icon" />
        </van-col>
      </demo-block>
      <demo-block title="提示信息">
        <van-col custom-class="col" span="6">
          <van-icon :name="demoIcon" size="32px" custom-class="icon" dot />
        </van-col>
        <van-col custom-class="col" span="6">
          <van-icon :name="demoIcon" size="32px" custom-class="icon" info="9" />
        </van-col>
        <van-col custom-class="col" span="6">
          <van-icon
            :name="demoIcon"
            size="32px"
            custom-class="icon"
            info="99+"
          />
        </van-col>
      </demo-block>
      <demo-block title="图标颜色">
        <van-col custom-class="col" span="6">
          <van-icon
            :name="demoIcon"
            size="32px"
            custom-class="icon"
            color="#1989fa"
          />
        </van-col>
        <van-col custom-class="col" span="6">
          <van-icon
            :name="demoIcon"
            size="32px"
            custom-class="icon"
            color="#07c160"
          />
        </van-col>
      </demo-block>
      <demo-block title="图标大小">
        <van-col custom-class="col" span="6">
          <van-icon :name="demoIcon" size="40" custom-class="icon" />
        </van-col>
        <van-col custom-class="col" span="6">
          <van-icon :name="demoIcon" size="3rem" custom-class="icon" />
        </van-col>
      </demo-block>
    </div>
    <div v-if="active === 1" title="基础图标" class="demo-tab-pane">
      <van-col
        v-for="(item, index) in icons.basic"
        :key="index"
        custom-class="col"
        span="6"
      >
        <van-icon :name="item" size="32px" class="icon" />
        <view class="text">{{ item }}</view>
      </van-col>
    </div>
    <div v-if="active === 2" title="线框风格" class="demo-tab-pane">
      <van-col
        v-for="(item, index) in icons.outline"
        :key="index"
        custom-class="col"
        span="6"
      >
        <van-icon :name="item" size="32px" class="icon" />
        <view class="text">{{ item }}</view>
      </van-col>
    </div>
    <div v-if="active === 3" title="实底风格" class="demo-tab-pane">
      <van-col
        v-for="(item, index) in icons.filled"
        :key="index"
        custom-class="col"
        span="6"
      >
        <van-icon :name="item" size="32px" custom-class="icon" />
        <view class="text">{{ item }}</view>
      </van-col>
    </div>
  </div>
</template>

<script>
import icons from './config'
import DemoBlock from '@/components/demo-block'
import VanCol from '@/packages/col/col'
import VanIcon from '@/packages/icon/icon'
import VanButton from '@/packages/button/button'
export default {
  components: {
    DemoBlock,
    VanCol,
    VanIcon,
    VanButton
  },
  data() {
    return {
      icons,
      active: 0,
      demoIcon: 'chat-o',
      demoImage: 'https://b.yzcdn.cn/vant/icon-demo-1126.png'
    }
  },
  methods: {
    onSwitch(event) {
      this.active = event.detail.index
    }
  }
}
</script>

<style>
page {
  padding-bottom: 0;
  background: #fff;
}

.col {
  display: inline-block;
  float: none;
  text-align: center;
  vertical-align: middle;
}

.icon {
  display: block;
  margin: 16px 0;
  color: #323233;
}

.text {
  display: block;
  height: 36px;
  margin: -4px 0 4px;
  padding: 0 5px;
  color: #646566;
  font-size: 12px;
  line-height: 18px;
}

.demo-tab-pane {
  margin: 20px;
  background-color: #fff;
}
</style>
