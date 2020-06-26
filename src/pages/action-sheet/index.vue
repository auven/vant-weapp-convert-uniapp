<template>
  <div>
    <demo-block title="基础用法" padding>
      <van-button type="primary" @click="toggleActionSheet1">弹出菜单</van-button>
      <van-action-sheet
        :show="show1"
        :actions="action1"
        @close="toggleActionSheet1"
        @select="toggleActionSheet1"
      />
    </demo-block>

    <demo-block title="选项状态" padding>
      <van-button type="primary" @click="toggleActionSheet2">弹出菜单</van-button>
      <van-action-sheet
        :show="show2"
        :actions="action2"
        @close="toggleActionSheet2"
        @cancel="toggleActionSheet2"
        @select="toggleActionSheet2"
      />
    </demo-block>

    <demo-block title="展示取消按钮" padding>
      <van-button type="primary" @click="toggleActionSheet3">弹出菜单</van-button>
      <van-action-sheet
        :show="show3"
        :actions="action1"
        cancel-text="取消"
        @close="toggleActionSheet3"
      >
      </van-action-sheet>
    </demo-block>

    <demo-block title="展示描述信息" padding>
      <van-button type="primary" @click="toggleActionSheet4">弹出菜单</van-button>
      <van-action-sheet
        :show="show4"
        :actions="action1"
        description="这是一段描述信息"
        @close="toggleActionSheet4"
      >
      </van-action-sheet>
    </demo-block>

    <demo-block title="展示标题栏" padding>
      <van-button type="primary" @click="toggleActionSheet5">弹出菜单</van-button>
      <van-action-sheet
        :show="show5"
        title="标题"
        @close="toggleActionSheet5"
      >
        <view class="content">内容</view>
      </van-action-sheet>
    </demo-block>

    <demo-block title="微信开发能力" padding>
      <van-button type="primary" @click="toggleActionSheet6">弹出菜单</van-button>
      <van-action-sheet
        :show="show6"
        title="标题"
        @close="toggleActionSheet6"
        :actions="action6"
        @getuserinfo="onGetUserInfo"
      >
      </van-action-sheet>
    </demo-block>
  </div>
</template>

<script>
import DemoBlock from '@/components/demo-block/index'
import VanButton from '@/packages/van-button/van-button'
import VanActionSheet from '@/packages/van-action-sheet/van-action-sheet'
export default {
  components: {
    DemoBlock,
    VanButton,
    VanActionSheet
  },
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      action1: [
        { name: '选项' },
        { name: '选项' },
        { name: '选项', subname: '副文本' }
      ],
      action2: [
        { name: '选项', color: '#07c160' },
        { loading: true },
        { name: '禁用选项', disabled: true }
      ],
      action6: [
        { name: '获取用户信息', color: '#07c160', openType: 'getUserInfo' }
      ]
    }
  },
  methods: {
    toggle(type) {
      this[type] = !this[type]
    },

    toggleActionSheet1() {
      this.toggle('show1')
    },

    toggleActionSheet2() {
      this.toggle('show2')
    },

    toggleActionSheet3() {
      this.toggle('show3')
    },

    toggleActionSheet4() {
      this.toggle('show4')
    },

    toggleActionSheet5() {
      this.toggle('show5')
    },
    toggleActionSheet6() {
      this.toggle('show6')
    },
    onGetUserInfo(e) {
      console.log(e)
    }
  }
}
</script>

<style>
.content {
  padding: 20px;
}
</style>
