# Circle 环形进度条

### 引入

推荐使用 `easycom` 的方式引入，详细介绍见[快速上手](#/quickstart#easycom-mo-shi-tui-jian)

## 代码演示

### 基础用法

`value/v-model`属性表示进度条的目标进度。

```html
<van-circle v-model="30" text="text" />
```

### 宽度定制

通过`stroke-width`属性来控制进度条宽度

```html
<van-circle v-model="value" stroke-width="6" text="宽度定制" />
```

### 颜色定制

通过`color`属性来控制进度条颜色，`layer-color`属性来控制轨道颜色

```html
<van-circle
  v-model="value"
  layer-color="#eeeeee"
  color="#ee0a24"
  text="颜色定制"
/>
```

### 渐变色

`color`属性支持传入对象格式来定义渐变色

```html
<van-circle v-model="value" :color="gradientColor" text="渐变色" />
```

```javascript
export default {
  data() {
    return {
      value: 25,
      gradientColor: {
        '0%': '#ffd01e',
        '100%': '#ee0a24',
      },
    }
  },
}
```

### 逆时针方向

将`clockwise`设置为`false`，进度会从逆时针方向开始

```html
<van-circle
  v-model="value"
  color="#07c160"
  :clockwise="false"
  text="逆时针"
/>
```

### 大小定制

通过`size`属性设置圆环直径

```html
<van-circle v-model="value" size="120" text="大小定制" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| circle-id | canvas 唯一 id | _string_ | `van-circle` | --- |
| value/v-model | 目标进度 | _number_ | `0` | - |
| type | 指定 canvas 类型，可选值为 `2d` | _string_ | - | - |
| size | 圆环直径，默认单位为 `px` | _number_ | `100` | - |
| color | 进度条颜色，传入对象格式可以定义渐变色 | _string \| object_ | `#1989fa` | - |
| layer-color | 轨道颜色 | _string_ | `#fff` | - |
| fill | 填充颜色 | _string_ | - | - |
| speed | 动画速度（单位为 value/s） | _number_ | `50` | - |
| text | 文字 | _string_ | - | - |
| stroke-width | 进度条宽度 | _number_ | `4` | - |
| clockwise | 是否顺时针增加 | _boolean_ | `true` | - |

> 注意：当同一个页面中存在多个 `van-circle` 时，必须指定不同的 `circle-id` ，不然数据会串线。

### Slots

| 名称 | 说明                                                       |
| ---- | ---------------------------------------------------------- |
| -    | 自定义文字内容，如果设置了`fill`，插槽内容会被原生组件覆盖 |
