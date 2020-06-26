<template>
  <div>
    <demo-block title="基础用法">
      <van-tabs :active="1" @change="onChange">
        <van-tab
          v-for="(item, index) in tabs4"
          :key="index"
          :title="'标签 ' + item"
          :index="index"
        >
          <view class="content">
            {{ '内容' + item }}
          </view>
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block title="通过名称匹配">
      <van-tabs active="b">
        <van-tab
          v-for="(item, index) in tabsWithName"
          :key="index"
          :name="item.name"
          :index="index"
          :title="'标签 ' + item.index"
        >
          <view class="content">
            {{ '内容' + item.index}}
          </view>
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block title="横向滚动">
      <van-tabs>
        <van-tab
          v-for="(item, index) in tabs6"
          :key="index"
          :index="index"
          :title="'标签 ' + item"
        >
          <view class="content">
            {{ '内容' + item }}
          </view>
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block title="禁用标签">
      <van-tabs @disabled="onClickDisabled">
        <van-tab
          v-for="(item, index) in tabs3"
          :key="index"
          :disabled="index === 1"
          :index="index"
          :title="'标签 ' + item"
        >
          <view class="content">
            {{ '内容' + item }}
          </view>
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block title="样式风格">
      <van-tabs type="card" tab-class="special-tab">
        <van-tab
          v-for="(item, index) in tabs3"
          :key="index"
          :index="index"
          :title="'标签 ' + item"
        >
          <view class="content-2">
            {{ '内容' + item }}
          </view>
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block title="点击事件">
      <van-tabs @click="onClick">
        <van-tab
          v-for="(item, index) in tabs2"
          :key="index"
          :index="index"
          :title="'标签 ' + item"
        >
          <view class="content">
            {{ '内容' + item }}
          </view>
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block title="粘性布局">
      <van-tabs ref="vanTabsSticky" component-id="vanTabsSticky" sticky :scroll-top="scrollTop">
        <van-tab
          v-for="(item, index) in tabs4"
          :key="index"
          :index="index"
          :title="'标签 ' + item"
        >
          <view class="content">
            {{ '内容' + item }}
          </view>
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block title="切换动画">
      <van-tabs animated>
        <van-tab
          v-for="(item, index) in tabs4"
          :key="index"
          :index="index"
          :title="'标签 ' + item"
        >
          <view class="content">
            {{ '内容' + item }}
          </view>
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block title="滑动切换">
      <van-tabs swipeable>
        <van-tab
          v-for="(item, index) in tabs4"
          :key="index"
          :index="index"
          :title="'标签 ' + item"
        >
          <view class="content">
            {{ '内容' + item }}
          </view>
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block title="自定义标题">
      <van-tabs :active="1" @change="onChange" tab-class="special-tab" tab-active-class="special-tab-active">
        <van-icon
          slot="nav-right"
          name="search"
          custom-class="right-nav"
          @click="onClickNavRight"
        />
        <van-tab
          v-for="(item, index) in tabs4"
          :key="index"
          :title="'标签 ' + item"
          :dot="index === 1"
          :info="index === 2 ? 99 : null"
          :index="index"
        >
          <view class="content">
            {{ '内容' + item }}
          </view>
        </van-tab>
      </van-tabs>
    </demo-block>

    <div style="height: 120vh"></div>
  </div>
</template>

<script>
import DemoBlock from '@/components/demo-block/index'
import VanIcon from '@/packages/van-icon/van-icon'
import VanTab from '@/packages/van-tab/van-tab'
import VanTabs from '@/packages/van-tabs/van-tabs'
import { getComponentById } from '@/packages/wxs/get-component'
export default {
  components: {
    DemoBlock,
    VanIcon,
    VanTab,
    VanTabs
  },
  data() {
    return {
      tabs2: [1, 2],
      tabs3: [1, 2, 3],
      tabs4: [1, 2, 3, 4],
      tabs6: [1, 2, 3, 4, 5, 6],
      tabsWithName: [
        { name: 'a', index: 1 },
        { name: 'b', index: 2 },
        { name: 'c', index: 3 }
      ],
      scrollTop: 0
    }
  },
  onPageScroll(e) {
    this.scrollTop = e.scrollTop
    this.getVanTabsSticky().updateContainer()
  },
  methods: {
    getVanTabsSticky() {
      let $vanTabsSticky
      // #ifdef MP-ALIPAY
      $vanTabsSticky = getComponentById(this, 'vanTabsSticky')[0]
      // #endif
      // #ifndef MP-ALIPAY
      $vanTabsSticky = this.$refs.vanTabsSticky
      // #endif
      return $vanTabsSticky
    },

    onClickDisabled(detail) {
      uni.showToast({
        title: `标签 ${detail.index + 1} 已被禁用`,
        icon: 'none'
      });
    },

    onChange(detail) {
      uni.showToast({
        title: `切换到标签 ${detail.index + 1}`,
        icon: 'none'
      });
    },

    onClickNavRight() {
      uni.showToast({
        title: '点击 right nav',
        icon: 'none'
      });
    },

    onClick(detail) {
      uni.showToast({
        title: `点击标签 ${detail.index + 1}`,
        icon: 'none'
      });
    }
  }
}
</script>

<style>
page {
  padding-bottom: 300px;
}

.content {
  padding: 20px;
  background-color: #fff;
}

.content-2 {
  padding: 20px;
}

.right-nav {
  padding: 0 10px;
  line-height: 44px !important;
  background-color: #fff;
}

.special-tab {
  transition: all 0.25s ease-in-out;
}

.special-tab-active {
  font-size: 1.05em !important;
}
</style>
