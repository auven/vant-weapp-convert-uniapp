<template>
  <view :class="containerClass" :style="containerStyle">
    <view :class="wrapClass" :style="wrapStyle">
      <slot />
    </view>
  </view>
</template>

<script>
import utils from '../wxs/utils'
import { VantComponent } from '../common/component'
import { isObj } from '../common/utils'
const ROOT_ELEMENT = '.van-sticky'
export default VantComponent({
  props: {
    zIndex: {
      type: Number,
      default: 99
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean
    },
    container: {
      type: Object,
      default: () => {}
    },
    scrollTop: {
      type: null
    }
  },
  data() {
    return {
      fixed: false,
      transform: 0,
      height: 0
    }
  },
  computed: {
    wrapClass() {
      return utils.bem('sticky-wrap', { fixed: this.fixed })
    },
    wrapStyle() {
      var style = ''

      if (this.transform) {
        style += 'transform: translate3d(0, ' + this.transform + 'px, 0);'
      }

      if (this.fixed) {
        // #ifdef H5
        style += 'top: ' + (this.offsetTop + this.height) + 'px;'
        // #endif
        // #ifndef H5
        style += 'top: ' + this.offsetTop + 'px;'
        // #endif
      }

      if (this.zIndex) {
        style += 'z-index: ' + this.zIndex + ';'
      }

      return style
    },

    containerClass() {
      return `custom-class ${this.customClass} van-sticky van-sticky-${this._uid}`
    },
    containerStyle() {
      var style = ''

      if (this.fixed) {
        style += 'height: ' + this.height + 'px;'
      }

      if (this.zIndex) {
        style += 'z-index: ' + this.zIndex + ';'
      }

      return style
    }
  },

  watch: {
    offsetTop() {
      this.onScroll()
    },
    disabled() {
      this.onScroll()
    },
    scrollTop() {
      this.onScroll()
    }
  },
  mounted() {
    this.onScroll()
  },

  methods: {
    onScroll() {
      const { container, offsetTop, disabled } = this

      if (disabled) {
        this.setDataAfterDiff({
          fixed: false,
          transform: 0
        })
        return
      }

      let rootEl = ROOT_ELEMENT
      // #ifdef MP-ALIPAY
      rootEl = ROOT_ELEMENT + '-' + this._uid
      // #endif
      this.getRect(rootEl).then(root => {
        if (isObj(container)) {
          if ((offsetTop + root.height) > (container.height + container.top)) {
            this.setDataAfterDiff({
              fixed: false,
              transform: container.height - root.height
            })
          } else if (offsetTop >= root.top) {
            this.setDataAfterDiff({
              fixed: true,
              height: root.height,
              transform: 0
            })
          } else {
            this.setDataAfterDiff({ fixed: false, transform: 0 })
          }
        } else {
          if (offsetTop >= root.top) {
            this.setDataAfterDiff({ fixed: true, height: root.height })
            this.transform = 0
          } else {
            this.setDataAfterDiff({ fixed: false })
          }
        }
      })
    },

    setDataAfterDiff(data) {
      this.$nextTick(() => {
        const diff = Object.keys(data).reduce((prev, key) => {
          if (data[key] !== this[key]) {
            prev[key] = data[key]
          }

          return prev
        }, {})

        Object.keys(diff).map(key => {
          this[key] = diff[key]
        })

        this.$emit('scroll', {
          scrollTop: this.scrollTop,
          isFixed: data.fixed || this.fixed
        })
      })
    },

    getContainerRect() {
      const nodesRef = this.container()

      return new Promise(resolve => nodesRef.boundingClientRect(resolve).exec())
    }
  }
})
</script>

<style lang="less">
@import './index.less';
</style>
