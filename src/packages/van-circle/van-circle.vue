<template>
  <view class="van-circle">
    <!-- 头条小程序 canvas-id 会相互污染 -->
    <!-- #ifdef MP-TOUTIAO -->
    <canvas
      class="van-circle__canvas"
      :style="{ width: size + 'px', height: size + 'px' }"
      :canvas-id="circleId"
    ></canvas>
    <!-- #endif -->
    <!-- #ifndef MP-TOUTIAO -->
    <canvas
      class="van-circle__canvas"
      :type="type"
      :style="{ width: size + 'px', height: size + 'px' }"
      :id="circleId"
      :canvas-id="circleId"
    ></canvas>
    <!-- #endif -->
    <view v-if="!text" class="van-circle__text">
      <slot></slot>
    </view>
    <cover-view v-else class="van-circle__text">{{ text }}</cover-view>
  </view>
</template>

<script>
import { VantComponent } from '../common/component'
import { isObj } from '../common/utils'
import { BLUE, WHITE } from '../common/color'
import { adaptor } from './canvas'
function format(rate) {
  return Math.min(Math.max(rate, 0), 100)
}
const PERIMETER = 2 * Math.PI
const BEGIN_ANGLE = -Math.PI / 2
const STEP = 1
export default VantComponent({
  props: {
    circleId: {
      type: String,
      default: 'van-circle'
    },
    text: String,
    lineCap: {
      type: String,
      default: 'round'
    },
    value: {
      type: [String, Number],
      default: 0
    },
    speed: {
      type: Number,
      default: 50
    },
    size: {
      type: [String, Number],
      default: 100
    },
    fill: String,
    layerColor: {
      type: String,
      default: WHITE
    },
    color: {
      type: [String, Object],
      default: BLUE
    },
    type: {
      type: String,
      default: ''
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    clockwise: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      uid: 0
    }
  },

  watch: {
    value() {
      this.reRender()
    },
    size() {
      this.drawCircle(this.currentValue)
    },
    color() {
      this.setHoverColor().then(() => {
        this.drawCircle(this.currentValue)
      })
    }
  },

  created() {
    this.uid = this._uid
    const { value } = this
    this.currentValue = value
  },

  mounted() {
    this.setHoverColor().then(() => {
      this.drawCircle(this.currentValue)
    })
  },

  destroyed() {
    this.clearInterval()
  },

  methods: {
    getContext() {
      const { type, size } = this
      const defaultContext = () => {
        const ctx = uni.createCanvasContext(this.circleId, this)
        return Promise.resolve(ctx)
      }
      if (type !== '2d') {
        return defaultContext()
      }

      // #ifdef MP-WEIXIN
      // 微信下支持 2d 模式
      return new Promise(resolve => {
        uni
          .createSelectorQuery()
          .in(this)
          .select(`#${this.circleId}`)
          .node()
          .exec(res => {
            const canvas = res[0].node
            const ctx = canvas.getContext(type)

            if (!this.inited) {
              const dpr = uni.getSystemInfoSync().pixelRatio
              this.inited = true
              canvas.width = size * dpr
              canvas.height = size * dpr
              ctx.scale(dpr, dpr)
            }

            resolve(adaptor(ctx))
          })
      })
      // #endif
      // #ifndef MP-WEIXIN
      // eslint-disable-next-line no-unreachable
      return defaultContext()
      // #endif
    },

    setHoverColor() {
      const { color, size } = this

      if (isObj(color)) {
        return this.getContext().then((context) => {
          const LinearColor = context.createLinearGradient(size, 0, 0, 0)
          Object.keys(color)
            .sort((a, b) => parseFloat(a) - parseFloat(b))
            .map((key) =>
              LinearColor.addColorStop(parseFloat(key) / 100, color[key])
            )
          this.hoverColor = LinearColor
        })
      }

      this.hoverColor = color
      return Promise.resolve()
    },
    presetCanvas(context, strokeStyle, beginAngle, endAngle, fill) {
      const { strokeWidth, lineCap, clockwise, size } = this
      const position = size / 2
      const radius = position - strokeWidth / 2

      context.setStrokeStyle(strokeStyle)
      context.setLineWidth(strokeWidth)
      context.setLineCap(lineCap)
      context.beginPath()
      context.arc(position, position, radius, beginAngle, endAngle, !clockwise)
      context.stroke()

      if (fill) {
        context.setFillStyle(fill)
        context.fill()
      }
    },

    renderLayerCircle(context) {
      const { layerColor, fill } = this
      this.presetCanvas(context, layerColor, 0, PERIMETER, fill)
    },

    renderHoverCircle(context, formatValue) {
      const { clockwise, hoverColor } = this
      // 结束角度
      const progress = PERIMETER * (formatValue / 100)
      const endAngle = clockwise
        ? BEGIN_ANGLE + progress
        : 3 * Math.PI - (BEGIN_ANGLE + progress)

      this.presetCanvas(context, hoverColor, BEGIN_ANGLE, endAngle)
    },

    drawCircle(currentValue) {
      const { size } = this

      this.getContext().then(context => {
        context.clearRect(0, 0, size, size)
        this.renderLayerCircle(context)

        const formatValue = format(currentValue)
        if (formatValue !== 0) {
          this.renderHoverCircle(context, formatValue)
        }

        context.draw()
      })
    },

    reRender() {
      // tofector 动画暂时没有想到好的解决方案
      const { value, speed } = this

      if (speed <= 0 || speed > 1000) {
        this.drawCircle(value)
        return
      }

      this.clearInterval()
      this.currentValue = this.currentValue || 0
      this.interval = setInterval(() => {
        if (this.currentValue !== value) {
          if (this.currentValue < value) {
            this.currentValue += STEP
          } else {
            this.currentValue -= STEP
          }
          this.drawCircle(this.currentValue)
        } else {
          this.clearInterval()
        }
      }, 1000 / speed)
    },

    clearInterval() {
      if (this.interval) {
        clearInterval(this.interval)
        this.interval = null
      }
    }
  }
})
</script>

<style lang="less">
@import './index.less';
</style>
