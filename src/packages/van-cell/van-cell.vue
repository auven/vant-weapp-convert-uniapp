<template>
  <view
    class="custom-class"
    :class="cellClass"
    :hover-class="selfHoverClass"
    hover-stay-time="70"
    :style="customStyle"
    @tap="onClick"
  >
    <van-icon
      v-if="icon"
      :name="icon"
      class="van-cell__left-icon-wrap"
      custom-class="van-cell__left-icon-wrap van-cell__left-icon"
    />
    <slot v-else name="icon" />

    <view
      :style="
        titleWidth ? 'max-width:' + titleWidth + ';min-width:' + titleWidth : ''
      "
      class="van-cell__title title-class"
      :class="titleClass"
    >
      <block v-if="title">{{ title }}</block>
      <slot v-else name="title" />

      <view v-if="label || useLabelSlot" class="van-cell__label label-class" :class="labelClass">
        <slot v-if="useLabelSlot" name="label" />
        <block v-else-if="label">{{ label }}</block>
      </view>
    </view>

    <view class="van-cell__value value-class" :class="valueClass">
      <block v-if="value || value === 0">{{ value }}</block>
      <slot v-else />
    </view>

    <van-icon
      v-if="isLink"
      :name="arrowDirection ? 'arrow' + '-' + arrowDirection : 'arrow'"
      :class="selfRightIconClass"
      :custom-class="selfRightIconClass"
    />
    <slot v-else name="right-icon" />

    <slot name="extra" />
  </view>
</template>

<script>
import { VantComponent } from '../common/component'
import { link } from '../mixins/link'
import VanIcon from '../van-icon/van-icon'
const utils = require('../wxs/utils')
export default {
  components: {
    VanIcon
  },
  ...VantComponent({
    classes: [
      'title-class',
      'label-class',
      'value-class',
      'right-icon-class',
      'hover-class',
    ],

    mixins: [link],

    props: {
      title: null,
      value: null,
      icon: String,
      size: String,
      label: String,
      center: Boolean,
      isLink: Boolean,
      required: Boolean,
      clickable: Boolean,
      titleWidth: String,
      arrowDirection: String,
      useLabelSlot: Boolean,
      border: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      cellClass() {
        const { customClass, size, center, border, isLink, clickable, required } = this
        const cellClass = utils.bem('cell', [
          size,
          {
            center,
            required,
            borderless: !border,
            clickable: isLink || clickable
          }
        ])
        return `${customClass} ${cellClass}`
      },
      selfRightIconClass() {
        return `van-cell__right-icon-wrap right-icon-class van-cell__right-icon ${this.rightIconClass}`
      },
      selfHoverClass() {
        return `van-cell--hover hover-class ${this.hoverClass}`
      }
    },
    methods: {
      onClick(event) {
        this.$emit('click', event.detail)
        this.jumpLink()
      }
    }
  })
}
</script>

<style lang="less">
@import './index.less';
</style>
