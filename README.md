# vant-weapp-convert-uniapp

将 [`vant-weapp`](https://github.com/youzan/vant-weapp) 转化成 [`uniapp`](https://uniapp.dcloud.io/) 组件，目前基于 `vant-weapp@1.3.2` 版本进行转化。

## 使用

### 安装

```bash
npm i vant-weapp-convert-uniapp -S
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

## 转化进度

- 基础组件
  - [x] Button 按钮 `van-button`
  - [x] Cell 单元格 `van-cell-group` `van-cell`
  - [x] Icon 图标 `van-icon`
  - [x] Image 图片 `van-image`
  - [x] Layout 布局 `van-row` `van-col`
  - [ ] Popup 弹出层 `van-popup`
  - [ ] Transition 动画 `van-transition`
- 表单组件
  - [ ] Calendar 日历 `van-calendar`
  - [ ] Checkbox 复选框 `van-checkbox` `van-checkbox-group`
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
  - [ ] ActionSheet 上拉菜单 `van-action-sheet`
  - [ ] Dialog 弹出框 `van-dialog`
  - [ ] DropdownMenu 下拉菜单 `van-dropdown-menu` `van-dropdown-item`
  - [ ] Loading 加载 `van-loading`
  - [ ] Notify 消息提示 `van-notify`
  - [ ] Overlay 遮罩层 `van-overlay`
  - [ ] SwipeCell 滑动单元格 `van-swipe-cell`
  - [ ] Toast 轻提示 `van-toast`
- 展示组件
  - [x] Circle 环形进度条 `van-circle`
  - [ ] Collapse 折叠面板 `van-collapse` `van-collapse-item`
  - [x] CountDown 倒计时 `van-count-down`
  - [x] Divider 分割线 `van-divider`
  - [ ] NoticeBar 通告栏 `van-notice-bar`
  - [x] Panel 面板 `van-panel`
  - [x] Progress 进度条 `van-progress`
  - [ ] Skeleton 骨架屏 `van-skeleton`
  - [ ] Steps 步骤条 `van-steps`
  - [ ] Sticky 粘性布局 `van-sticky`
  - [x] Tag 标签 `van-tag`
  - [ ] TreeSelect 分类选择 `van-tree-select`
- 导航组件
  - [x] Grid 宫格 `van-grid` `van-grid-item`
  - [ ] IndexBar 索引栏 `van-index-bar` `van-index-anchor`
  - [ ] Sidebar 侧边导航 `van-sidebar` `van-sidebar-item`
  - [ ] NavBar 导航栏 `van-nav-bar`
  - [ ] Tab 标签页 `van-tab` `van-tabs`
  - [ ] Tabbar 标签栏 `van-tabbar` `van-tabbar-item`
- 业务组件
  - [ ] Area 省市区选择 `van-area`
  - [ ] Card 商品卡片 `van-card`
  - [ ] SubmitBar 提交订单栏 `van-submit-bar`
  - [ ] GoodsAction 商品导航 `van-goods-action` `van-goods-action-icon` `van-goods-action-button`

### 平台支持度

目前 **微信小程序**、 **QQ小程序**、 **头条小程序** 都能够比较好的支持。 **支付宝小程序** 和 **百度小程序** 多多少少有点问题，后续做特殊处理。

## 一些问题

- 组件里 canvas 的 style 动态绑定不能太复杂，不然会导致 canvas 2d 的时候 width 和 height 设置失败，如：`:style="{ width: width, height: height }"` 就可以，而 `:style="mainStyle"` 或者是 `:style="{ width: fn(size), height: fn(size) }"` 都不行。
- 支付宝小程序中 vue 不支持 mixins 带 props 的对象
