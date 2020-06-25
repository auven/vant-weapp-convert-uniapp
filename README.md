# vant-weapp-convert-uniapp

将 [`vant-weapp`](https://github.com/youzan/vant-weapp) 转化成 [`uniapp`](https://uniapp.dcloud.io/) 组件，目前基于 `vant-weapp@1.3.3` 版本进行转化。

## 使用

<img src="https://img.shields.io/npm/v/vant-weapp-convert-uniapp.svg?style=for-the-badge" alt="npm version" />

### 安装

> 注意：如果开发 app 的，请使用 alpha 版的 uni-app 依赖库。因为正式版会出现这个问题[App v-for 渲染组件报错（alpha 版已修复）](https://github.com/dcloudio/uni-app/issues/1820)

```bash
npm i vant-weapp-convert-uniapp -S
npm i less less-loader -D
```

### 配置 babel.config.js

```js
...
plugins.push([
  'import',
  {
    'libraryName': 'vant-weapp-convert-uniapp',
    'customName': (name) => {
      return `vant-weapp-convert-uniapp/lib/${name}/${name}`
    }
  },
  'vant-weapp-convert-uniapp'
])
...
```

### 导入组件

第一步，`App.vue` 中导入必要的全局样式

```vue
<style lang="less">
@import 'vant-weapp-convert-uniapp/common/index.less';
</style>
```

第二步，页面中引入需要的组件

```vue
<template>
  <van-button>按钮</van-button>
</template>

<script>
import { VanButton } from 'vant-weapp-convert-uniapp'
export default {
  components: {
    VanButton
  }
}
</script>
```

## 转化进度 (27/49)

- 基础组件
  - [x] Button 按钮 `van-button`
  - [x] Cell 单元格 `van-cell-group` `van-cell`
  - [x] Icon 图标 `van-icon`
  - [x] Image 图片 `van-image`
  - [x] Layout 布局 `van-row` `van-col`
  - [x] Popup 弹出层 `van-popup`
  - [x] Transition 动画 `van-transition`
- 表单组件
  - [ ] Calendar 日历 `van-calendar`
  - [x] Checkbox 复选框 `van-checkbox` `van-checkbox-group`
  - [ ] DatetimePicker 时间选择 `van-datetime-picker`
  - [ ] Field 输入框 `van-field`
  - [ ] Picker 选择器 `van-picker`
  - [ ] Radio 单选框 `van-radio` `van-radio-group`
  - [x] Rate 评分 `van-rate`
  - [ ] Search 搜索 `van-search`
  - [x] Slider 滑块 `van-slider`
  - [x] Stepper 步进器 `van-stepper`
  - [x] Switch 开关 `van-switch`
  - [ ] Uploader 文件上传 `van-uploader`
- 反馈组件
  - [x] ActionSheet 上拉菜单 `van-action-sheet`
  - [x] Dialog 弹出框 `van-dialog`
  - [ ] DropdownMenu 下拉菜单 `van-dropdown-menu` `van-dropdown-item`
  - [x] Loading 加载 `van-loading`
  - [ ] Notify 消息提示 `van-notify`
  - [x] Overlay 遮罩层 `van-overlay`
  - [ ] SwipeCell 滑动单元格 `van-swipe-cell`
  - [x] Toast 轻提示 `van-toast`
- 展示组件
  - [x] Circle 环形进度条 `van-circle`
  - [ ] Collapse 折叠面板 `van-collapse` `van-collapse-item`
  - [x] CountDown 倒计时 `van-count-down`
  - [x] Divider 分割线 `van-divider`
  - [ ] NoticeBar 通告栏 `van-notice-bar`
  - [x] Panel 面板 `van-panel`
  - [x] Progress 进度条 `van-progress`
  - [ ] Skeleton 骨架屏 `van-skeleton`
  - [x] Steps 步骤条 `van-steps`
  - [x] Sticky 粘性布局 `van-sticky`
  - [x] Tag 标签 `van-tag`
  - [ ] TreeSelect 分类选择 `van-tree-select`
- 导航组件
  - [x] Grid 宫格 `van-grid` `van-grid-item`
  - [ ] IndexBar 索引栏 `van-index-bar` `van-index-anchor`
  - [ ] Sidebar 侧边导航 `van-sidebar` `van-sidebar-item`
  - [ ] NavBar 导航栏 `van-nav-bar`
  - [x] Tab 标签页 `van-tab` `van-tabs` （转化得我要吐血，难搞）
  - [ ] Tabbar 标签栏 `van-tabbar` `van-tabbar-item`
- 业务组件
  - [ ] Area 省市区选择 `van-area`
  - [ ] Card 商品卡片 `van-card`
  - [ ] SubmitBar 提交订单栏 `van-submit-bar`
  - [ ] GoodsAction 商品导航 `van-goods-action` `van-goods-action-icon` `van-goods-action-button`

### 平台支持

- 微信小程序
- QQ小程序
- 头条小程序
- 支付宝小程序
- 百度小程序
- H5
- APP

## 一些问题

- 组件里 canvas 的 style 动态绑定不能太复杂，不然会导致 canvas 2d 的时候 width 和 height 设置失败，如：`:style="{ width: width, height: height }"` 就可以，而 `:style="mainStyle"` 或者是 `:style="{ width: fn(size), height: fn(size) }"` 都不行。
- 支付宝小程序中 vue 不支持 mixins 带 props 的对象
- `::before` 和 `::after` 仅微信小程序和App生效
- 支付宝小程序不支持in(component)，使用无效果
- `van-grid` 如果设置了 `gutter` ，则 `van-grid-item` 需要设置 `item-index`
- `van-overlay` 组件样式得在全局引入，不然会出现嵌套组件里的样式不生效
- 支付宝小程序不支持在组件上加 `click` `touchmove` 等事件
- 支付宝小程序不支持 `.stop.prevent` 事件修饰符
- [App v-for 渲染组件报错（alpha 版已修复）](https://github.com/dcloudio/uni-app/issues/1820) ，app 会出现这个问题，目前正式版尚未修复。。。所以请使用 alpha 版吧。。。
- 头条小程序在 computed 中拿不到 inject 进来的父组件的相关数据
- 支付宝小程序中，嵌套组件里面设置 ref 不生效，参考[pages/checkbox/index.vue](./src/pages/checkbox/index.vue)
- 小程序 props 没办法传递 function
- 支付宝里会出现这个问题，[父子组件使用props传值，支付宝小程序中出现错误](https://github.com/dcloudio/uni-app/issues/1378)，出现问题的代码文件参考[pages/sticky/index.vue](./src/pages/sticky/index.vue)
- 小程序中不能将 vue 实例给赋值到 data 变量中
- 头条小程序 van-tabs 的 animated 设置为 true 后样式有点问题
- van-tab 必须设置 index 。
