<template>
  <view :class="wrapClass" :style="viewStyle" @tap="onClick">
    <view :class="contentClass" :style="contentStyle">
      <block v-if="useSlot">
        <slot />
      </block>
      <block v-else>
        <view class="van-grid-item__icon icon-class">
          <van-icon v-if="icon" :name="icon" :dot="dot" :info="badge || info" :size="iconSize" />
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
  name: 'VanGridItem',
  ...VantComponent({
    classes: ['content-class', 'icon-class', 'text-class'],
    mixins: [{ ...link, props: {} }]
  }),
  components: {
    VanIcon
  },
  props: {
    ...link.props,
    icon: String,
    dot: Boolean,
    info: null,
    badge: null,
    text: String,
    useSlot: Boolean,
    customClass: String,
    itemIndex: Number
  },

  data() {
    return {
      viewStyle: '',
      contentStyle: '',
      center: false,
      border: false,
      square: false,
      gutter: false,
      clickable: false,
      direction: '',
      iconSize: ''
    }
  },

  computed: {
    wrapClass() {
      const { square, customClass } = this
      return `custom-class ${customClass} ${utils.bem('grid-item', { square })}`
    },
    contentClass() {
      const { center, square, clickable, border, gutter, direction } = this
      return `content-class ${utils.bem('grid-item__content', [direction, {
        center,
        square,
        clickable,
        surround: border && gutter
      }])} ${border ? 'van-hairline--surround' : ''}`
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.updateStyle()
    })
  },

  methods: {
    updateStyle() {
      let parent
      // #ifdef H5
      parent = this.$parent.$parent
      // #endif
      // #ifndef H5
      parent = this.$parent
      // #endif
      if (parent.$options.name !== 'VanGrid') {
        return
      }

      const { columnNum, border, square, gutter, clickable, center, direction, iconSize } = parent
      const width = `${100 / columnNum}%`

      const styleWrapper = []
      styleWrapper.push(`width: ${width}`)

      if (square) {
        styleWrapper.push(`padding-top: ${width}`)
      }

      if (gutter) {
        const gutterValue = addUnit(gutter)
        styleWrapper.push(`padding-right: ${gutterValue}`)

        /* let $children
        // #ifdef H5
        $children = parent.$children[0].$children
        // #endif
        // #ifndef H5
        $children = parent.$children
        // #endif
        const index = $children.map(item => item._uid).indexOf(this._uid) */
        const index = this.itemIndex
        if (index >= columnNum && !square) {
          styleWrapper.push(`margin-top: ${gutterValue}`)
          console.log('进入到这里')
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
      this.direction = direction
      this.iconSize = iconSize
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
