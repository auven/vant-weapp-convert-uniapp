# Slider 滑块

### 引入

推荐使用 `easycom` 的方式引入，详细介绍见[快速上手](#/quickstart#easycom-mo-shi-tui-jian)

## 代码演示

### 基本用法

```html
<van-slider value="50" @change="onChange" />
```

```js
export default {
  methods: {
    onChange(value) {
      uni.showToast({
        icon: 'none',
        title: `当前值：${value}`
      });
    }
  }
}
```

### 指定选择范围

```html
<van-slider min="-50" max="50" />
```

### 禁用

```html
<van-slider value="50" disabled />
```

### 指定步长

```html
<van-slider value="50" step="10" />
```

### 自定义样式

```html
<van-slider value="50" bar-height="4px" active-color="#ee0a24" />
```

### 自定义按钮

```html
<van-slider v-model="currentValue" use-button-slot @drag="onDrag">
  <view class="custom-button" slot="button">
    {{ currentValue }}/100
  </view>
</van-slider>
```

```js
export default {
  data() {
    return {
      currentValue: 50
    }
  },
  methods: {
    onDrag(detail) {
      console.log(this.currentValue)

      console.log(detail)
    }
  }
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| value | 当前进度百分比，取值范围为 0-100 | _number_ | `0` | - |
| disabled | 是否禁用滑块 | _boolean_ | `false` | - |
| max | 最大值 | _number_ | `100` | - |
| min | 最小值 | _number_ | `0` | - |
| step | 步长 | _number_ | `1` | - |
| bar-height | 进度条高度，默认单位为 `px` | _string \| number_ | `2px` | - |
| active-color | 进度条激活态颜色 | _string_ | `#1989fa` | - |
| inactive-color | 进度条默认颜色 | _string_ | `#e5e5e5` | - |

### Events

| 事件名          | 说明             | 参数                         |
| --------------- | ---------------- | ---------------------------- |
| @drag       | 拖动进度条时触发 | event.detail.value: 当前进度 |
| @change     | 进度值改变后触发 | event.detail: 当前进度       |
| @drag-start | 开始拖动时触发   | -                            |
| @drag-end   | 结束拖动时触发   | -                            |

### 外部样式类

| 类名         | 说明         |
| ------------ | ------------ |
| custom-class | 根节点样式类 |
