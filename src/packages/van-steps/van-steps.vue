<template>
  <view :class="wrapClass">
    <view class="van-step__wrapper">
      <view
        v-for="(item, index) in steps"
        :key="index"
        @tap="onClick(index)"
        :class="stepClass"
        :style="stepStyle"
      >
        <view class="van-step__title" :style="[index === active ? { color: activeColor } : {}]">
          <view>{{ item.text }}</view>
          <view class="desc-class">{{ item.desc }}</view>
        </view>
        <view class="van-step__circle-container">
          <block v-if="index !== active">
            <van-icon
              v-if="inactiveIcon"
              :color="iconColor"
              :name="inactiveIcon"
              custom-class="van-step__icon"
            />
            <view
              v-else
              class="van-step__circle"
              :style="{ 'background-color': index < active ? activeColor : inactiveColor }"
            />
          </block>

          <van-icon
            v-else
            :name="activeIcon"
            :color="activeColor"
            custom-class="van-step__icon"
          />
        </view>
        <view
          v-if="index !== steps.length - 1"
          class="van-step__line"
          :style="{ 'background-color': index < active ? activeColor : inactiveColor }"
        />
      </view>
    </view>
  </view>
</template>

<script>
import VanIcon from '../van-icon/van-icon'
import utils from '../wxs/utils'
import { VantComponent } from '../common/component'
import { GREEN, GRAY_DARK } from '../common/color'
export default {
  ...VantComponent({
    classes: ['desc-class']
  }),
  components: {
    VanIcon
  },
  props: {
    icon: String,
    steps: Array,
    active: Number,
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: GREEN
    },
    inactiveColor: {
      type: String,
      default: GRAY_DARK
    },
    activeIcon: {
      type: String,
      default: 'checked'
    },
    inactiveIcon: String
  },
  computed: {
    status() {
      const { index, active } = this
      if (index < active) {
        return 'finish'
      } else if (index === active) {
        return 'process'
      }
      return 'inactive'
    },
    wrapClass() {
      return `custom-class ${ utils.bem('steps', [this.direction]) }`
    },
    stepClass() {
      const { direction, status } = this
      return `${ utils.bem('step', [direction, status]) } van-hairline`
    },
    stepStyle() {
      const { status, inactiveColor } = this
      return `${ status === 'inactive' ? 'color: ' + inactiveColor: '' }`
    },
    iconColor() {
      const { status, inactiveColor, activeColor } = this
      return `${ status === 'inactive' ? inactiveColor : activeColor }`
    }
  },
  methods: {
    onClick(index) {
      this.$emit('click-step', index)
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
