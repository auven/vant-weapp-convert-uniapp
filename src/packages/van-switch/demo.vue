<template>
  <div>
    <demo-block title="基础用法" padding>
      <van-switch
        v-model="checked"
        @change="onChange"
      />
    </demo-block>

    <demo-block title="禁用状态" padding>
      <van-switch
        v-model="checked"
        disabled
        @change="onChange"
      />
    </demo-block>

    <demo-block title="加载状态" padding>
      <van-switch
        v-model="checked"
        loading
        @change="onChange"
      />
    </demo-block>

    <demo-block title="自定义大小" padding>
      <van-switch
        v-model="checked"
        size="24px"
        loading
        @change="onChange"
      />
    </demo-block>

    <demo-block title="自定义颜色" padding>
      <van-switch
        v-model="checked"
        active-color="#07c160"
        inactive-color="#ee0a24"
        @change="onChange"
      />
    </demo-block>

    <demo-block title="异步控制" padding>
      <van-switch
        :value="checked2"
        size="36px"
        @input="onInput"
      />
    </demo-block>

  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      checked2: true
    }
  },
  methods: {
    onChange(value) {
      console.log('值改变了', this.checked, value)
    },

    onInput(value) {
      /* Dialog.confirm({
        title: '提示',
        message: '是否切换开关？'
      }).then((res) => {
        this.checked2 = detail
      }); */
      uni.showActionSheet({
        itemList: ['切换'],
        success: (res) => {
          if (res.tapIndex === 0) {
            this.checked2 = value
          }
        },
        fail: (res) => {
          console.log(res.errMsg)
        }
      })
    }
  }
}
</script>

<style>

</style>
