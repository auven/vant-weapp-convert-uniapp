<template>
  <div class="demo-style">
    <demo-block title="文字省略">
      <div class="van-ellipsis">这是一段最多显示一行的文字，后面的内容会省略</div>
      <div class="van-multi-ellipsis--l2">这是一段最多显示两行的文字，后面的内容会省略。这是一段最多显示两行的文字，后面的内容会省略</div>
    </demo-block>

    <demo-block title="1px 边框">
      <div class="van-hairline--top" />
    </demo-block>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
@import './style/var';
.demo-style {
  .van-ellipsis,
  .van-multi-ellipsis--l2 {
    max-width: 300px;
    margin-left: @padding-md;
    font-size: 14px;
    line-height: 18px;
  }
  .van-ellipsis {
    margin-bottom: @padding-md;
  }
  .van-hairline--top {
    height: 30px;
    background-color: @white;
    &::after {
      top: 5px;
    }
  }
}
</style>
