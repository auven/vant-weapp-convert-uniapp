<template>
  <view :class="wrapClass" :style="viewStyle" @tap="onClick">
    <view :class="contentClass" :style="contentStyle">
      <block v-if="useSlot">
        <slot />
      </block>
      <block v-else>
        <view class="van-grid-item__icon icon-class">
          <van-icon v-if="icon" :name="icon" :dot="dot" :info="info" />
          <slot v-else name="icon"></slot>
        </view>
        <view class="van-grid-item__text text-class">
          <text v-if="text">{{ text }}</text>
          <slot v-else name="text"></slot>
        </view>
      </block>
    </view>
  </view>
</template>

<script>
import { link } from '../mixins/link'
import { VantComponent } from '../common/component'
import { addUnit } from '../common/utils'
import VanIcon from '../van-icon/van-icon'
const utils = require('../wxs/utils')
export default {
  ...VantComponent({
    classes: ['content-class', 'icon-class', 'text-class'],
    mixins: [link]
  }),
  components: {
    VanIcon
  },
  props: {
    icon: String,
    dot: Boolean,
    info: null,
    text: String,
    useSlot: Boolean
  },

  data() {
    return {
      viewStyle: '',
      contentStyle: '',
      center: false,
      border: false,
      square: false,
      gutter: false,
      clickable: false
    }
  },

  computed: {
    wrapClass() {
      const { square } = this
      return `custom-class ${utils.bem('grid-item', { square })}`
    },
    contentClass() {
      const { center, square, clickable, border, gutter } = this
      return `content-class ${utils.bem('grid-item__content', {
        center,
        square,
        clickable,
        surround: border && gutter
      })} ${border ? 'van-hairline--surround' : ''}`
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.updateStyle()
    })
  },

  methods: {
    updateStyle() {
      const parent = this.$parent
      if (parent.$options.name !== 'VanGrid') {
        return
      }

      const { columnNum, border, square, gutter, clickable, center, $children } = parent
      const width = `${100 / columnNum}%`

      const styleWrapper = []
      styleWrapper.push(`width: ${width}`)

      if (square) {
        styleWrapper.push(`padding-top: ${width}`)
      }

      if (gutter) {
        const gutterValue = addUnit(gutter)
        styleWrapper.push(`padding-right: ${gutterValue}`)

        const index = $children.indexOf(this)
        if (index >= columnNum) {
          styleWrapper.push(`margin-top: ${gutterValue}`)
        }
      }

      let contentStyle = ''

      if (square && gutter) {
        const gutterValue = addUnit(gutter)

        contentStyle = `
          right: ${gutterValue};
          bottom: ${gutterValue};
          height: auto;
        `
      }

      this.viewStyle = styleWrapper.join('; ')
      this.contentStyle = contentStyle
      this.center = center
      this.border = border
      this.square = square
      this.gutter = gutter
      this.clickable = clickable
    },

    onClick() {
      this.$emit('click')
      this.jumpLink()
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
