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
          <view class="desc-class" :class="descClass">{{ item.desc }}</view>
        </view>
        <view class="van-step__circle-container">
          <block v-if="index !== active">
            <van-icon
              v-if="item.inactiveIcon || inactiveIcon"
              :color="iconColor"
              :name="item.inactiveIcon || inactiveIcon"
              custom-class="van-step__icon"
              class="van-step__icon"
              :custom-style="fixIconStyle"
            />
            <view
              v-else
              class="van-step__circle"
              :style="{ 'background-color': index < active ? activeColor : inactiveColor }"
            />
          </block>

          <van-icon
            v-else
            :name="item.activeIcon || activeIcon"
            :color="activeColor"
            custom-class="van-step__icon"
            class="van-step__icon"
            :custom-style="fixIconStyle"
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
  components: {
    VanIcon
  },
  ...VantComponent({
    classes: ['desc-class'],
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
        return `custom-class ${this.customClass} ${ utils.bem('steps', [this.direction]) }`
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
      },
      fixIconStyle() {
        let style = ''
        // #ifdef MP-TOUTIAO
        style = 'left: 0; top: 0'
        // #endif
        return style
      }
    },
    methods: {
      onClick(index) {
        this.$emit('click-step', index)
      }
    }
  })
}
</script>

<style lang="less">
@import './index.less';
</style>
