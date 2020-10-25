<template>
  <demo-home :list="list" />
</template>

<script>
import list from '@/config'
const finishList = []
list.map(item => {
  const noEmpty = item.list.some(it => it.status === 'finish')
  if (noEmpty) {
    finishList.push({
      ...item,
      list: item.list.filter(it => it.status === 'finish')
    })
  }
})
export default {
  data() {
    return {
      list: finishList
    }
  },
  onLoad() {
    // #ifdef MP-QQ
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    })
    // #endif
  }
}
</script>

<style>
page {
  background: #fff;
}
</style>
