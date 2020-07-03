<div class="card">
  <div class="van-doc-intro">
    <img class="van-doc-intro__logo" style="width: 120px; height: 120px; box-shadow: none;" src="https://raw.githubusercontent.com/auven/vant-weapp-convert-uniapp/master/docs/images/logo.png">
    <h2 style="margin: 0; font-size: 32px; line-height: 60px;">Vant + Uniapp</h2>
    <p>轻量、可靠的 Uniapp 跨端 UI 组件库</p>
  </div>
</div>

### 介绍

将 [`vant-weapp`](https://github.com/youzan/vant-weapp) 转化成 [`uniapp`](https://uniapp.dcloud.io/) 组件，目前基于 `vant-weapp@1.3.3` 版本进行转化。**我不生产代码，我只是代码的搬运工。给同样喜欢 vant-weapp 的你，带来便捷的跨端开发体验。**

### 预览

扫描下方各端二维码，体验组件库示例：

<div>
  <div style="display: inline-block; text-align: center">
    <img style="width: 200px; height: 200px; box-shadow: none; object-fit: contain;" src="https://raw.githubusercontent.com/auven/vant-weapp-convert-uniapp/master/docs/images/h5.png">
    <p>H5</p>
  </div>
  <div style="display: inline-block; text-align: center">
    <img style="width: 200px; height: 200px; box-shadow: none; object-fit: contain;" src="https://raw.githubusercontent.com/auven/vant-weapp-convert-uniapp/master/docs/images/weixin.jpg">
    <p>微信小程序</p>
  </div>
  <div style="display: inline-block; text-align: center">
    <img style="width: 200px; height: 200px; box-shadow: none; object-fit: contain;" src="https://raw.githubusercontent.com/auven/vant-weapp-convert-uniapp/master/docs/images/alipay.jpg">
    <p>支付宝小程序</p>
  </div>
  <div style="display: inline-block; text-align: center">
    <img style="width: 200px; height: 200px; box-shadow: none; object-fit: contain;" src="https://raw.githubusercontent.com/auven/vant-weapp-convert-uniapp/master/docs/images/android.png">
    <p>安卓</p>
  </div>
</div>

### 快速上手

请参考 [快速上手](#/quickstart)

### 转化原理

自动化转化不会搞，而且自动化可能会导致挺多没用的代码的，所以只能手动将小程序的写法改成 vue 的写法，并且处理不同平台下的兼容性问题。

本身 vant-weapp 就是 vant 的衍生品，里面的写法很多都是从 vant 转化过来的，保留了 vue 的相关写法。
