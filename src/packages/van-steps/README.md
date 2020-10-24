# Steps 步骤条

### 引入

推荐使用 `easycom` 的方式引入，详细介绍见[快速上手](#/quickstart#easycom-mo-shi-tui-jian)

## 代码演示

### 基础用法

```html
<van-steps :steps="steps" :active="active" />
```

```javascript
export default {
  data() {
    return {
      steps: [
        {
          text: '步骤一',
          desc: '描述信息',
        },
        {
          text: '步骤二',
          desc: '描述信息',
        },
        {
          text: '步骤三',
          desc: '描述信息',
        },
        {
          text: '步骤四',
          desc: '描述信息',
        },
      ],
    }
  },
}
```

### 自定义样式

可以通过 `active-icon` 和 `active-color` 属性设置激活状态下的图标和颜色

```html
<van-steps
  :steps="steps"
  :active="active"
  active-icon="success"
  active-color="#38f"
/>
```

### 自定义图标

可以通过 `inactiveIcon` 和 `activeIcon` 属性分别设置每一项的图标

```html
<van-steps :steps="steps" :active="active" />
```

```javascript
export default {
  data() {
    return {
      steps: [
        {
          text: '步骤一',
          desc: '描述信息',
          inactiveIcon: 'location-o',
          activeIcon: 'success',
        },
        {
          text: '步骤二',
          desc: '描述信息',
          inactiveIcon: 'like-o',
          activeIcon: 'plus',
        },
        {
          text: '步骤三',
          desc: '描述信息',
          inactiveIcon: 'star-o',
          activeIcon: 'cross',
        },
        {
          text: '步骤四',
          desc: '描述信息',
          inactiveIcon: 'phone-o',
          activeIcon: 'fail',
        },
      ],
    }
  },
}
```

### 竖向步骤条

可以通过设置`direction`属性来改变步骤条的显示方式

```html
<van-steps
  :steps="steps"
  :active="active"
  direction="vertical"
  active-color="#ee0a24"
/>
```

## API

### Steps Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| active | 当前步骤 | _number_ | 0 | - |
| direction | 显示方向，可选值为 `horizontal` `vertical` | _string_ | `horizontal` | - |
| active-color | 激活状态颜色 | _string_ | `#07c160` | - |
| inactive-color | 未激活状态颜色 | _string_ | `#969799` | - |
| active-icon | 激活状态底部图标，可选值见 [Icon 组件](#/icon) | _string_ | `checked` | - |
| inactive-icon | 未激活状态底部图标，可选值见 [Icon 组件](#/icon) | _string_ | - | - |

### Events

| 事件名称        | 说明                 | 回调参数                    |
| --------------- | -------------------- | --------------------------- |
| @click-step | 点击步骤时触发的事件 | index:当前步骤的索引 |

### 外部样式类

| 类名         | 说明           |
| ------------ | -------------- |
| custom-class | 根节点样式类   |
| desc-class   | 描述信息样式类 |
