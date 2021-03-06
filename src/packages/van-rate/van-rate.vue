<template>
  <view class="van-rate custom-class" :class="customClass" @touchmove="onTouchMove">
    <view
      class="van-rate__item"
      v-for="(item, index) in innerCountArray"
      :key="index"
      :style="{ 'padding-right': index !== count - 1 ? itemStyle : '' }"
    >
      <van-icon
        :name="index + 1 <= innerValue ? icon : voidIcon"
        class="van-rate__icon icon-class"
        :style="iconStyle"
        :custom-style="iconStyle"
        :custom-class="iconClass"
        :data-score="index"
        :color="disabled ? disabledColor : index + 1 <= innerValue ? color : voidColor"
        @click="onSelect(index)"
      />

      <van-icon
        v-if="allowHalf"
        :name="index + 0.5 <= innerValue ? icon : voidIcon"
        :class="iconHalfClass"
        :style="iconStyle"
        :custom-style="iconStyle"
        :custom-class="iconHalfClass"
        :data-score="index - 0.5"
        :color="disabled ? disabledColor : index + 0.5 <= innerValue ? color : voidColor"
        @click="onSelect(index - 0.5)"
      />
    </view>
  </view>
</template>

<script>
import { VantComponent } from '../common/component'
import VanIcon from '../van-icon/van-icon'
const utils = require('../wxs/utils')
export default {
  components: {
    VanIcon
  },
  ...VantComponent({
    classes: ['icon-class'],
    props: {
      value: {
        type: Number
      },
      readonly: Boolean,
      disabled: Boolean,
      allowHalf: Boolean,
      size: {
        type: [String, Number],
        default: null
      },
      icon: {
        type: String,
        default: 'star'
      },
      voidIcon: {
        type: String,
        default: 'star-o'
      },
      color: {
        type: String,
        default: '#ffd21e'
      },
      voidColor: {
        type: String,
        default: '#c7c7c7'
      },
      disabledColor: {
        type: String,
        default: '#bdbdbd'
      },
      count: {
        type: Number,
        default: 5
      },
      gutter: null,
      touchable: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        innerValue: 0,
        innerCountArray: new Array(6).fill('')
      }
    },

    computed: {
      itemStyle() {
        const { gutter } = this
        return utils.addUnit(gutter)
      },
      iconStyle() {
        const { size } = this
        return `font-size: ${utils.addUnit(size)}`
      },
      iconHalfClass() {
        return `icon-class ${this.iconClass} ${utils.bem('rate__icon', ['half'])}`
      }
    },

    created() {
      this.innerValue = this.value
      this.innerCountArray = new Array(this.count).fill('')
    },

    methods: {
      onSelect(score) {
        if (!this.disabled && !this.readonly) {
          this.innerValue = score + 1
          this.$nextTick(() => {
            this.$emit('input', score + 1)
            this.$emit('change', score + 1)
          })
        }
      },

      onTouchMove(event) {
        if (!this.touchable || this.allowHalf) return

        const { clientX } = event.touches[0]

        this.getRect('.van-rate__icon', true).then(list => {
          const _list = list.map((item, index) => ({ ...item, score: index }))
          const target = _list
            .sort(item => item.right - item.left)
            .find(item => clientX >= item.left && clientX <= item.right)
          if (target != null) {
            this.onSelect(target.score)
          }
        })
      }
    }
  })
}
</script>

<style lang="less">
@import './index.less';
</style>
