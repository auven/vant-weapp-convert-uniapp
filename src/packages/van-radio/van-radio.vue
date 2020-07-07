<template>
  <view class="van-radio custom-class" :class="customClass">
    <view
      v-if="labelPosition === 'left'"
      :class="radioLabelClass"
      @click="onClickLabel"
    >
      <slot />
    </view>
    <view
      class="van-radio__icon-wrap"
      :style="radioIconWrapStyle"
      @click="onChange"
    >
      <slot v-if="useIconSlot" name="icon" />
      <van-icon
        v-else
        name="success"
        :class="radioIconClass"
        :style="radioIconStyle"
        :custom-class="radioIconClass"
        :custom-style="radioIconCustomStyle"
      />
    </view>
    <view
      v-if="labelPosition === 'right'"
      :class="radioLabelClass"
      @click="onClickLabel"
    >
      <slot />
    </view>
  </view>
</template>

<script>
import utils from '../wxs/utils'
import VanIcon from '../van-icon/van-icon'
import { VantComponent } from '../common/component'
import { ChildrenMixin } from '../mixins/relation'
const parent = 'vanRadioGroup'
export default {
  name: 'VanRadio',
  components: {
    VanIcon
  },
  ...VantComponent({
    mixins: [ChildrenMixin(parent)],
    classes: ['icon-class', 'label-class'],
    props: {
      name: null,
      value: null,
      disabled: Boolean,
      useIconSlot: Boolean,
      checkedColor: String,
      labelPosition: {
        type: String,
        default: 'right'
      },
      labelDisabled: Boolean,
      shape: {
        type: String,
        default: 'round'
      },
      iconSize: {
        type: null,
        default: 20
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        currentValue: '',
        currentDisabled: false
      }
    },

    computed: {
      radioLabelClass() {
        return `label-class ${this.labelClass} ${ utils.bem('radio__label', [this.labelPosition, { disabled: this.currentDisabled }]) }`
      },
      radioIconWrapStyle() {
        return `font-size: ${ utils.addUnit(this.iconSize) };`
      },
      radioIconClass() {
        return `${this.iconClass} ${ utils.bem('radio__icon', [this.shape, { disabled: this.currentDisabled, checked: this.currentValue === this.name }]) }`
      },
      radioIconStyle() {
        return `font-size: ${ utils.addUnit(this.iconSize) };${ this.checkedColor && !this.currentDisabled && this.currentValue === this.name ? 'border-color:' + this.checkedColor + '; background-color:' + this.checkedColor + ';' : '' }`
      },
      radioIconCustomStyle() {
        return `line-height: ${ utils.addUnit(this.iconSize) };display: block;`
      },

      groupValue() {
        return this[parent] ? this[parent].value : null
      },
      groupDisabled() {
        return this[parent] ? this[parent].disabled : null
      }
    },

    watch: {
      groupValue() {
        this.updateChild()
      },
      groupDisabled() {
        this.updateChild()
      }
    },

    created() {
      this.updateChild()
    },

    methods: {
      emitChange(value) {
        const instance = this[parent] || this
        this.currentValue = value
        instance.$emit('input', value)
        instance.$emit('change', value)
      },

      onChange() {
        if (!this.readonly && !this.currentDisabled) {
          this.emitChange(this.name)
        }
      },

      onClickLabel() {
        const { readonly, currentDisabled, labelDisabled, name } = this
        if (!readonly && !currentDisabled && !labelDisabled) {
          this.emitChange(name)
        }
      },

      updateChild() {
        if (this[parent]) {
          const { value, disabled } = this[parent]
          this.currentValue = value
          this.currentDisabled = disabled || this.disabled
        }
      }
    }
  })
}
</script>

<style lang="less">
@import './index.less';
</style>
