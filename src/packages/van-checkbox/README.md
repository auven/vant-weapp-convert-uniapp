# Checkbox 复选框

### 引入

推荐使用 `easycom` 的方式引入，详细介绍见[快速上手](#/quickstart#easycom-mo-shi-tui-jian)

## 代码演示

### 基础用法

通过`v-model/value`绑定复选框的勾选状态

```html
<template>
  <van-checkbox v-model="checked" @change="onChange">复选框</van-checkbox>
</template>

<script>
export default {
  data() {
    return {
      checked: true
    }
  },

  methods: {
    onChange() {
      console.log(this.checked)
    }
  }
}
</script>
```

### 禁用状态

通过设置`disabled`属性可以禁用复选框

```html
<van-checkbox disabled v-model="checked" @change="onChange">
  复选框
</van-checkbox>
```

### 自定义形状

将`shape`属性设置为`square`，复选框的形状会变成方形

```html
<van-checkbox v-model="checked" shape="square" @change="onChange">
  复选框
</van-checkbox>
```

### 自定义颜色

通过`checked-color`属性可以自定义选中状态下的图标颜色

```html
<van-checkbox
  v-model="checked"
  checked-color="#07c160"
  @change="onChange"
>
  复选框
</van-checkbox>
```

### 自定义大小

通过`icon-size`属性可以自定义图标的大小

```html
<van-checkbox v-model="checked" icon-size="25px">复选框</van-checkbox>
```

### 自定义图标

通过 icon 插槽自定义图标

```html
<template>
  <van-checkbox use-icon-slot v-model="checked" @change="onChange">
    自定义图标
    <image slot="icon" :src="checked ? activeIcon : inactiveIcon" />
  </van-checkbox>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      activeIcon: '//img.yzcdn.cn/icon-active.png',
      inactiveIcon: '//img.yzcdn.cn/icon-normal.png',
    }
  },

  methods: {
    onChange() {
      console.log(this.checked)
    }
  }
}
</script>
```

### 禁用文本点击

通过设置`label-disabled`属性可以禁用复选框文本点击

```html
<van-checkbox v-model="checked" label-disabled>复选框</van-checkbox>
```

### 复选框组

需要与`van-checkbox-group`一起使用，选中值是一个数组，通过`value`绑定在`van-checkbox-group`上，数组中的项即为选中的`Checkbox`的`name`属性设置的值

```html
<template>
  <van-checkbox-group v-model="result" @change="onChange">
    <van-checkbox name="a">复选框 a</van-checkbox>
    <van-checkbox name="b">复选框 b</van-checkbox>
    <van-checkbox name="c">复选框 c</van-checkbox>
  </van-checkbox-group>
</template>

<script>
export default {
  data() {
    return {
      result: ['a', 'b']
    }
  },

  methods: {
    onChange() {
      console.log(this.result)
    }
  }
}
</script>
```

### 限制最大可选数

```html
<van-checkbox-group v-model="result" @change="onChange" max="2">
  <van-checkbox name="a">复选框 a</van-checkbox>
  <van-checkbox name="b">复选框 b</van-checkbox>
  <van-checkbox name="c">复选框 c</van-checkbox>
</van-checkbox-group>
```

### 搭配单元格组件使用

此时你需要再引入`Cell`和`CellGroup`组件，并通过 checkbox 的 toggle 方法手动触发切换

```html
<template>
  <van-checkbox-group v-model="result" @change="onChange">
    <van-cell-group>
      <van-cell
        v-for="(item, index) in list"
        :key="item"
        :title="`复选框 ${ item }`"
        value-class="value-class"
        clickable
        @click="toggle(index)"
      >
        <van-checkbox ref="checkboxes" readonly :name="item" />
      </van-cell>
    </van-cell-group>
  </van-checkbox-group>
</template>

<script>
export default {
  data() {
    return {
      list: ['a', 'b', 'c'],
      result: ['a', 'b']
    }
  },

  methods: {
    onChange() {
      console.log(this.result)
    }

    toggle(index) {
      this.$refs.checkboxes[index].toggle()
    }
  }
}
</script>

<style>
.value-class {
  flex: none !important;
}
</style>
```

## API

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| name | 标识 Checkbox 名称 | _string_ | - | - |
| shape | 形状，可选值为 `round` `square` | _string_ | `round` | - |
| value | 是否为选中状态 | _boolean_ | `false` | - |
| disabled | 是否禁用单选框 | _boolean_ | `false` | - |
| readonly | 是否为只读状态 | _boolean_ | `false` | - |
| label-disabled | 是否禁用单选框内容点击 | _boolean_ | `false` | - |
| label-position | 文本位置，可选值为 `left` | _string_ | `right` | - |
| use-icon-slot | 是否使用 icon slot | _boolean_ | `false` | - |
| checked-color | 选中状态颜色 | _string_ | `#1989fa` | - |
| icon-size | icon 大小 | _string \| number_ | `20px` |

### CheckboxGroup Props

| 参数     | 说明                   | 类型      | 默认值        | 版本 |
| -------- | ---------------------- | --------- | ------------- | ---- |
| name     | 在表单内提交时的标识符 | _string_  | -             | -    |
| value    | 所有选中项的 name      | _Array_   | -             | -    |
| disabled | 是否禁用所有单选框     | _boolean_ | `false`       | -    |
| max      | 设置最大可选数         | _number_  | `0`（无限制） | -    |

### Checkbox Event

| 事件名      | 说明                     | 回调参数     |
| ----------- | ------------------------ | ------------ |
| @change | 当绑定值变化时触发的事件 | 当前组件的值 |

### Checkbox 外部样式类

| 类名         | 说明           |
| ------------ | -------------- |
| custom-class | 根节点样式类   |
| icon-class   | 图标样式类     |
| label-class  | 描述信息样式类 |

### CheckboxGroup Event

| 事件名      | 说明                     | 回调参数     |
| ----------- | ------------------------ | ------------ |
| @change | 当绑定值变化时触发的事件 | 当前组件的值 |

### Checkbox Slot

| 名称 | 说明       |
| ---- | ---------- |
| -    | 自定义文本 |
| icon | 自定义图标 |

### Checkbox 方法

通过 selectComponent 可以获取到 checkbox 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍         |
| ------ | ---- | ------ | ------------ |
| toggle | -    | -      | 切换选中状态 |
