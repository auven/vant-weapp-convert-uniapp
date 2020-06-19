<template>
  <view :class="wrapClass" :style="viewStyle">
    <slot />
  </view>
</template>

<script>
import { VantComponent } from '../common/component'
import { addUnit } from '../common/utils'
export default {
  ...VantComponent(),

  name: 'VanGrid',

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
      viewStyle: ''
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
    square() {
      this.updateChildren()
    },
    gutter() {
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
  },

  created() {
    const { gutter } = this
    if (gutter) {
      this.viewStyle = `padding-left: ${addUnit(gutter)}`
    }
  },

  mounted() {
    this.updateChildren()
  },

  methods: {
    updateChildren() {
      this.$nextTick(() => {
        let $children
        // #ifdef H5
        $children = this.$children[0].$children
        // #endif
        // #ifndef H5
        $children = this.$children
        // #endif
        $children.forEach(child => {
          if (child.$options.name === 'VanGridItem') {
            child.updateStyle()
          } else {
            console.log('不是 VanGridItem 组件')
          }
        })
      })
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
