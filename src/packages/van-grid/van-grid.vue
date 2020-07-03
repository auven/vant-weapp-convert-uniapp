<template>
  <view :class="wrapClass" :style="viewStyle">
    <slot />
  </view>
</template>

<script>
import { VantComponent } from '../common/component'
import { addUnit } from '../common/utils'
import { ParentMixin } from '../mixins/relation'
export default VantComponent({
  name: 'VanGrid',
  mixins: [ParentMixin('vanGrid')],
  props: {
    square: {
      type: Boolean
    },
    gutter: {
      type: [Number, String],
      default: 0
    },
    clickable: {
      type: Boolean
    },
    columnNum: {
      type: [String, Number],
      default: 4
    },
    center: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    direction: String,
    iconSize: String
  },

  data() {
    return {
      viewStyle: '',
      childrenList: []
    }
  },

  computed: {
    wrapClass() {
      const { border, gutter } = this
      return `van-grid custom-class ${
        border && !gutter ? 'van-hairline--top' : ''
      }`
    }
  },

  watch: {
    gutter() {
      this.updateStyle()
      // #ifdef MP-TOUTIAO
      this.updateChildren()
      // #endif
    },
    // #ifdef MP-TOUTIAO
    square() {
      this.updateChildren()
    },
    clickable() {
      this.updateChildren()
    },
    columnNum() {
      this.updateChildren()
    },
    center() {
      this.updateChildren()
    },
    border() {
      this.updateChildren()
    },
    direction() {
      this.updateChildren()
    },
    iconSize() {
      this.updateChildren()
    }
    // #endif
  },

  created() {
    this.updateStyle()
  },

  methods: {
    updateStyle() {
      const { gutter } = this
      if (gutter) {
        this.viewStyle = `padding-left: ${addUnit(gutter)}`
      }
    },
    // #ifdef MP-TOUTIAO
    updateChildren() {
      this.$nextTick(() => {
        const $children = this.$children
        $children.forEach(child => {
          if (child.$options.name === 'VanGridItem') {
            child.updateStyle()
          } else {
            // console.log('不是 VanGridItem 组件')
          }
        })
      })
    }
    // #endif
  }
})
</script>

<style lang="less">
@import './index.less';
</style>
