<template>
  <div>
    <demo-block title="基本用法">
      <van-checkbox
        v-model="checkbox1"
        custom-class="demo-checkbox"
        @change="onChange"
      >
        复选框
      </van-checkbox>
    </demo-block>

    <demo-block title="禁用状态">
      <van-checkbox
        disabled
        :value="false"
        custom-class="demo-checkbox"
      >
        复选框
      </van-checkbox>
      <van-checkbox
        disabled
        :value="true"
        custom-class="demo-checkbox"
      >
        复选框
      </van-checkbox>
    </demo-block>

    <demo-block title="自定义形状">
      <van-checkbox
        v-model="checkboxShape"
        shape="square"
        custom-class="demo-checkbox"
        @change="onChange"
      >
        复选框
      </van-checkbox>
    </demo-block>

    <demo-block title="自定义颜色">
      <van-checkbox
        v-model="checkbox2"
        checked-color="#07c160"
        custom-class="demo-checkbox"
        @change="onChange"
      >
        复选框
      </van-checkbox>
    </demo-block>

    <demo-block title="自定义大小">
      <van-checkbox
        icon-size="25px"
        v-model="checkboxSize"
        custom-class="demo-checkbox"
        @change="onChange"
      >
        复选框
      </van-checkbox>
    </demo-block>

    <demo-block title="自定义图标">
      <van-checkbox
        use-icon-slot
        v-model="checkbox3"
        custom-class="demo-checkbox"
        @change="onChange"
      >
        自定义图标
        <image
          slot="icon"
          class="icon"
          mode="widthFix"
          :src="checkbox3 ? activeIcon : inactiveIcon"
        />
      </van-checkbox>
    </demo-block>

    <demo-block title="禁用文本点击">
      <van-checkbox
        label-disabled
        v-model="checkboxLabel"
        custom-class="demo-checkbox"
        @change="onChange"
      >
        复选框
      </van-checkbox>
    </demo-block>

    <demo-block title="复选框组">
      <van-checkbox-group v-model="result" @change="onChange">
        <van-checkbox
          v-for="item in list"
          :key="item"
          :name="item"
          custom-class="demo-checkbox"
        >
          复选框 {{ item }}
        </van-checkbox>
      </van-checkbox-group>
    </demo-block>

    <demo-block title="限制最大可选数">
      <van-checkbox-group v-model="result2" max="2" @change="onChange">
        <van-checkbox
          v-for="item in list"
          :key="item"
          :name="item"
          custom-class="demo-checkbox"
        >
          复选框 {{ item }}
        </van-checkbox>
      </van-checkbox-group>
    </demo-block>

    <demo-block title="搭配单元格组件使用">
      <van-checkbox-group v-model="result3" @change="onChange">
        <van-cell-group >
          <van-cell
            v-for="(item, index) in list"
            :key="item"
            :title="`复选框 ${ item }`"
            value-class="value-class"
            clickable
            @click="toggle(index)"
          >
            <van-checkbox ref="checkboxes" :component-id="`checkboxes-${index}`" :clickable="false" :name="item" />
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
    </demo-block>

  </div>
</template>

<script>
import DemoBlock from '@/components/demo-block/index'
import VanCell from '@/packages/van-cell/van-cell'
import VanCellGroup from '@/packages/van-cell-group/van-cell-group'
import VanCheckbox from '@/packages/van-checkbox/van-checkbox'
import VanCheckboxGroup from '@/packages/van-checkbox-group/van-checkbox-group'
import { getComponentById } from '@/packages/wxs/get-component'
export default {
  components: {
    DemoBlock,
    VanCell,
    VanCellGroup,
    VanCheckbox,
    VanCheckboxGroup
  },
  data() {
    return {
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkboxLabel: true,
      checkboxSize: true,
      checkboxShape: true,
      list: ['a', 'b', 'c'],
      result: ['a', 'b'],
      result2: [],
      result3: [],
      activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png'
    }
  },
  methods: {
    onChange() {
      console.log('值改变了')
    },

    toggle(index) {
      // #ifdef MP-ALIPAY
      const $checkboxes = getComponentById(this, `checkboxes-${index}`)[0]
      $checkboxes.toggle()
      // #endif
      // #ifndef MP-ALIPAY
      this.$refs.checkboxes[index].toggle()
      // #endif
    },

    noop() {}
  }
}
</script>

<style>
.demo-checkbox-group {
  margin: 10px 0 0 20px;
}

.demo-checkbox {
  margin: 10px 0 0 20px;
}

.value-class {
  flex: none !important;
}

.van-cell__value {
  flex: none !important;
}

.icon {
  width: 20px;
}
</style>
