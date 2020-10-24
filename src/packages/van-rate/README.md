# Rate 评分

### 引入

推荐使用 `easycom` 的方式引入，详细介绍见[快速上手](#/quickstart#easycom-mo-shi-tui-jian)

## 代码演示

### 基础用法

```html
<van-rate v-model="value" @change="onChange" />
```

```javascript
export default {
  data() {
    return {
      value: 3,
    }
  },

  methods: {
    onChange(score) {
      console.log(score)
    }
  }
}
```

### 自定义图标

```html
<van-rate
  v-model="value"
  icon="like"
  void-icon="like-o"
  @change="onChange"
/>
```

### 自定义样式

```html
<van-rate
  v-model="value"
  :size="25"
  color="#ee0a24"
  void-color="#eee"
  void-icon="star"
  @change="onChange"
/>
```

### 半星

```html
<van-rate
  v-model="value"
  :size="25"
  allow-half
  color="#ee0a24"
  void-color="#eee"
  void-icon="star"
  @change="onChange"
/>
```

### 自定义数量

```html
<van-rate v-model="value" :count="6" @change="onChange" />
```

### 禁用状态

```html
<van-rate disabled v-model="value" @change="onChange" />
```

### 只读状态

```html
<van-rate readonly v-model="value" @change="onChange" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| name | 在表单内提交时的标识符 | _string_ | - | - |
| value | 当前分值 | _number_ | - | - |
| count | 图标总数 | _number_ | `5` | - |
| size | 图标大小，默认单位为 `px` | _string \| number_ | `20px` | - |
| gutter | 图标间距，默认单位为 `px` | _string \| number_ | `4px` |
| color | 选中时的颜色 | _string_ | `#ffd21e` | - |
| void-color | 未选中时的颜色 | _string_ | `#c7c7c7` | - |
| icon | 选中时的图标名称或图片链接，可选值见 [Icon 组件](#/icon) | _string_ | `star` | - |
| void-icon | 未选中时的图标名称或图片链接，可选值见 [Icon 组件](#/icon) | _string_ | `star-o` | - |
| allow-half | 是否允许半选 | _boolean_ | `false` | - |
| readonly | 是否为只读状态  | _boolean_ | `false` | - |
| disabled | 是否禁用评分 | _boolean_ | `false` | - |
| disabled-color | 禁用时的颜色 | _string_ | `#bdbdbd` | - |
| touchable | 是否可以通过滑动手势选择评分 | _boolean_ | `true` | - |

### Events

| 事件名称 | 说明                     | 回调参数              |
| -------- | ------------------------ | --------------------- |
| change   | 当前分值变化时触发的事件 | event.detail:当前分值 |

### 外部样式类

| 类名         | 说明         |
| ------------ | ------------ |
| custom-class | 根节点样式类 |
| icon-class   | 图标样式类   |
