# 快速上手

## 安装

### 通过 npm 安装

```bash
npm i vant-weapp-convert-uniapp -S
npm i less less-loader -D
```

## 使用

### 第一步， App.vue 中导入必要的全局样式（重要）

```html
<style lang="less">
@import 'vant-weapp-convert-uniapp/common/index.less';
</style>
```

### 第二步，页面中引入需要的组件，有以下两种方式

#### easycom 模式（推荐）

配置 src/pages.json

```json
{
  ...,
  "easycom": {
    "autoscan": true,
    "custom": {
      "van-(.*)": "vant-weapp-convert-uniapp/components/van-$1/van-$1.vue"
    }
  }
}

```

然后页面中就可以不用 import 组件直接使用了。

#### babel-plugin-import 按需引入

配置 babel.config.js

```js
...
plugins.push([
  'import',
  {
    'libraryName': 'vant-weapp-convert-uniapp',
    'customName': (name) => {
      return `vant-weapp-convert-uniapp/components/${name}/${name}`
    }
  },
  'vant-weapp-convert-uniapp'
])
...

```

页面中引入组件

```html
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

### 注意

- 支付宝小程序需要”启用 component2 编译”，在 `mainfest.json` 的 `mp-alipay` 里设置 `component2` 为 `true`，不然会导致获取不到 `$ref` ，并且组件的 `_uid` 是反序的。
- 如果开发 app 的，请使用 alpha 版的 uni-app 依赖库。因为正式版会出现这个问题[App v-for 渲染组件报错（alpha 版已修复）](https://github.com/dcloudio/uni-app/issues/1820)
