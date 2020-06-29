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
import { ChildrenMixin } from '../mixins/relation'
const utils = require('../wxs/utils')
export default {
  name: 'VanGridItem',
  components: {
    VanIcon
  },
  ...VantComponent({
    classes: ['content-class', 'icon-class', 'text-class'],
    mixins: [link, ChildrenMixin('vanGrid')],
    props: {
      icon: String,
      dot: Boolean,
      info: null,
      badge: null,
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
      },
      gridGutter() {
        return this.vanGrid ? this.vanGrid.gutter : null
      },
      gridSquare() {
        return this.vanGrid ? this.vanGrid.square : null
      },
      gridClickable() {
        return this.vanGrid ? this.vanGrid.clickable : null
      },
      gridColumnNum() {
        return this.vanGrid ? this.vanGrid.columnNum : null
      },
      gridCenter() {
        return this.vanGrid ? this.vanGrid.center : null
      },
      gridBorder() {
        return this.vanGrid ? this.vanGrid.border : null
      },
      gridDirection() {
        return this.vanGrid ? this.vanGrid.direction : null
      },
      gridIconSize() {
        return this.vanGrid ? this.vanGrid.iconSize : null
      }
    },

    watch: {
      gridSquare() {
        this.updateStyle()
      },
      gridGutter() {
        this.updateStyle()
      },
      gridClickable() {
        this.updateStyle()
      },
      gridColumnNum() {
        this.updateStyle()
      },
      gridCenter() {
        this.updateStyle()
      },
      gridBorder() {
        this.updateStyle()
      },
      gridDirection() {
        this.updateStyle()
      },
      gridIconSize() {
        this.updateStyle()
      },
      // #ifdef MP-ALIPAY
      parentChildren() {
        if (this.gutter) {
          this.updateStyle()
        }
      }
      // #endif
    },

    created() {
      this.updateStyle()
    },

    methods: {
      updateStyle() {
        const parent = this.vanGrid
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

          let index
          // #ifndef MP-TOUTIAO
          index = this.index
          // #endif
          // #ifdef MP-TOUTIAO
          index = this._getIndex()
          // #endif
          if (index >= columnNum && !square) {
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
        this.direction = direction
        this.iconSize = iconSize
      },

      onClick() {
        this.$emit('click')
        this.jumpLink()
      }
    }
  })
}
</script>

<style lang="less">
@import './index.less';
</style>
