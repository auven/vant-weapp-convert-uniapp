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
      type: Number,
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

  methods: {
    updateChildren() {
      this.children.forEach(child => {
        child.updateStyle()
      })
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
