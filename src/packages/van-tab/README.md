# Tab 标签页

### 引入

推荐使用 `easycom` 的方式引入，详细介绍见[快速上手](#/quickstart#easycom-mo-shi-tui-jian)

## 代码演示

### 基础用法

通过`active`设定当前激活标签对应的索引值，默认情况下启用第一个标签

```html
<template>
  <van-tabs :active="active" @change="onChange">
    <van-tab title="标签 1">内容 1</van-tab>
    <van-tab title="标签 2">内容 2</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 4">内容 4</van-tab>
  </van-tabs>
</template>

<script>
export default {
  data() {
    return {
      active: 1
    }
  },

  methods: {
    onChange(detail) {
      uni.showToast({
        title: `切换到标签 ${detail.index + 1}`,
        icon: 'none'
      })
    }
  }
}
</script>
```

### 通过名称匹配

在标签指定`name`属性的情况下，`active`的值为当前标签的`name`（此时无法通过索引值来匹配标签）

```html
<van-tabs active="a">
  <van-tab title="标签 1" name="a">内容 1</van-tab>
  <van-tab title="标签 2" name="b" >内容 2</van-tab>
  <van-tab title="标签 3" name="c">内容 3</van-tab>
</van-tabs>
```

### 横向滚动

多于 4 个标签时，Tab 可以横向滚动

```html
<van-tabs :active="active">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
  <van-tab title="标签 5">内容 5</van-tab>
  <van-tab title="标签 6">内容 6</van-tab>
</van-tabs>
```

### 禁用标签

设置`disabled`属性即可禁用标签。如果需要监听禁用标签的点击事件，可以在`van-tabs`上监听`disabled`事件

```html
<van-tabs @disabled="onClickDisabled">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2" disabled>内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
</van-tabs>
```

```javascript
export default {
  methods: {
    onClickDisabled(detail) {
      uni.showToast({
        title: `标签 ${detail.index + 1} 已被禁用`,
        icon: 'none'
      });
    },
  }
}
```

### 样式风格

`Tab`支持两种样式风格：`line`和`card`，默认为`line`样式，可以通过`type`属性修改样式风格

```html
<van-tabs type="card">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
</van-tabs>
```

### 点击事件

可以在`van-tabs`上绑定`click`事件，在回调参数的`detail`中可以取得被点击标签的标题和标识符

```html
<van-tabs @click="onClick">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
</van-tabs>
```

```javascript
export default {
  methods: {
    onClick(detail) {
      uni.showToast({
        title: `切换到标签 ${detail.index + 1}`,
        icon: 'none'
      })
    }
  }
}
```

### 粘性布局

通过`sticky`属性可以开启粘性布局，粘性布局下，当 Tab 滚动到顶部时会自动吸顶

```html
<van-tabs sticky>
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs>
```

### 切换动画

可以通过`animated`来设置是否启用切换 tab 时的动画。

```html
<van-tabs animated>
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs>
```

### 滑动切换

通过`swipeable`属性可以开启滑动切换标签页

```html
<van-tabs swipeable>
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs>
```

### 嵌套 popup

如果将 van-tabs 嵌套在 van-popup 等会隐藏内容的组件或节点内，当 van-tabs 显示时下划线将不会正常显示。

此时可以通过使用 `v-if` 手动控制 van-tabs 的渲染来规避这种场景。

```html
<van-popup :show="show">
  <van-tabs v-if="show">
    <van-tab title="标签 1">内容 1</van-tab>
    <van-tab title="标签 2">内容 2</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 4">内容 4</van-tab>
  </van-tabs>
</van-popup>
```

## API

### Tabs Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| active | 当前选中标签的标识符 | _string \| number_ | `0` | - |
| color | 标签颜色 | _string_ | `#ee0a24` | - |
| z-index | z-index 层级 | _number_ | `1` | - |
| type | 样式风格，可选值为`card` | _string_ | `line` | - |
| border | 是否展示外边框，仅在 `line` 风格下生效 | _boolean_ | `false` | - |
| duration | 动画时间 (单位秒) | _number_ | `0.3` | - |
| line-width | 底部条宽度 (px) | _string \| number_ | `40px` | - |
| line-height | 底部条高度 (px) | _string \| number_ | `3px` | - |
| swipe-threshold | 滚动阈值，设置标签数量超过多少个可滚动 | _number_ | `5` | - |
| animated | 是否使用动画切换 Tabs | _boolean_ | `false` | - |
| ellipsis | 是否省略过长的标题文字 | _boolean_ | `true` | - |
| sticky | 是否使用粘性定位布局 | _boolean_ | `false` | - |
| swipeable | 是否开启手势滑动切换 | _boolean_ | `false` | - |
| lazy-render | 是否开启标签页内容延迟渲染 | _boolean_ | `true` | - |
| offset-top | 粘性定位布局下与顶部的最小距离，单位`px` | _number_ | - | - |

> 注意：头条小程序下，当 `animated` 为 `true` 时，需要给 `van-tab` 组件加上 `class="van-tab-host"` 。

### Tab Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| name | 标签名称，作为匹配的标识符 | _string \| number_ | 标签的索引值 | - |
| title | 标题 | _string_ | - | - |
| disabled | 是否禁用标签 | _boolean_ | `false` | - |
| dot | 是否显示小红点 | _boolean_ | - | - |
| info | 图标右上角提示信息 | _string \| number_ | - | - |
| title-style | 自定义标题样式 | _string_ | - | - |

### Tabs Slot

| 名称      | 说明         |
| --------- | ------------ |
| nav-left  | 标题左侧内容 |
| nav-right | 标题右侧内容 |

### Tab Slot

| 名称 | 说明       |
| ---- | ---------- |
| -    | 标签页内容 |

### Tabs Event

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| @click | 点击标签时触发 | name：标签标识符，title：标题 |
| @change | 当前激活的标签改变时触发 | name：标签标识符，title：标题 |
| @disabled | 点击被禁用的标签时触发 | name：标签标识符，title：标题 |
| @scroll | 滚动时触发 | { scrollTop: 距离顶部位置, isFixed: 是否吸顶 } |

### 外部样式类

| 类名             | 说明             |
| ---------------- | ---------------- |
| custom-class     | 根节点样式类     |
| nav-class        | 标签栏样式类     |
| tab-class        | 标签样式类       |
| tab-active-class | 标签激活态样式类 |
