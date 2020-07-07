<template>
  <view :class="checkboxClass">
    <view class="van-checkbox__icon-wrap" @click="onIconClick">
      <slot v-if="useIconSlot" name="icon" />
      <van-icon
        v-else
        name="success"
        size="0.8em"
        :class="currentIconClass"
        :style="iconStyle"
        :custom-class="currentIconClass"
        :custom-style="iconStyle"
      />
    </view>
    <view :class="currentLabelClass" @click="onClickLabel">
      <slot />
    </view>
  </view>
</template>

<script>
import utils from '../wxs/utils'
import VanIcon from '../van-icon/van-icon'
import { VantComponent } from '../common/component'
import { ChildrenMixin } from '../mixins/relation'
function emit(target, value) {
  target.$emit('input', value)
  target.$emit('change', value)
}
export default {
  name: 'VanCheckbox',
  components: {
    VanIcon
  },

  ...VantComponent({
    mixins: [ChildrenMixin('vanCheckboxGroup')],
    classes: ['icon-class', 'label-class'],

    props: {
      value: Boolean,
      name: String,
      disabled: Boolean,
      useIconSlot: Boolean,
      checkedColor: String,
      labelPosition: String,
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
        currentValue: false,
        parentDisabled: false
      }
    },

    computed: {
      checkboxClass() {
        return `van-checkbox custom-class ${this.customClass}`
      },
      currentIconClass() {
        return `icon-class ${this.iconClass} ${utils.bem('checkbox__icon', [
          this.shape,
          {
            disabled: this.disabled || this.parentDisabled,
            checked: this.currentValue
          }
        ])}`
      },
      iconStyle() {
        const { checkedColor, currentValue, disabled, parentDisabled, iconSize } = this
        var styles = [
          ['font-size', utils.addUnit(iconSize)],
          ['line-height', '1.25em']
        ]
        if (checkedColor && currentValue && !disabled && !parentDisabled) {
          styles.push(['border-color', checkedColor])
          styles.push(['background-color', checkedColor])
        }

        return styles.map(item => item.join(':')).join(';')
      },
      currentLabelClass() {
        return `label-class ${this.labelClass} ${utils.bem('checkbox__label', [
          this.labelPosition,
          { disabled: this.disabled || this.parentDisabled }
        ])}`
      },

      groupValue() {
        return this.vanCheckboxGroup ? this.vanCheckboxGroup.value : null
      },
      groupDisabled() {
        return this.vanCheckboxGroup ? this.vanCheckboxGroup.disabled : null
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
      if (this.vanCheckboxGroup) {
        this.updateChild()
        return
      }
      this.currentValue = this.value
    },

    methods: {
      emitChange(value) {
        if (this.vanCheckboxGroup) {
          this.setParentValue(value)
        } else {
          emit(this, value)
          this.currentValue = value
        }
      },

      onIconClick() {
        if (this.readonly) {
          return
        }
        this.toggle()
      },

      toggle() {
        const { parentDisabled, disabled, currentValue } = this
        if (!disabled && !parentDisabled) {
          this.emitChange(!currentValue)
        }
      },

      onClickLabel() {
        const { readonly, labelDisabled, parentDisabled, disabled, currentValue } = this
        if (!readonly && !disabled && !labelDisabled && !parentDisabled) {
          this.emitChange(!currentValue)
        }
      },

      setParentValue(value) {
        const parentValue = this.vanCheckboxGroup.value.slice()
        const { name } = this
        const { max } = this.vanCheckboxGroup

        if (value) {
          if (max && parentValue.length >= max) {
            return
          }
          if (parentValue.indexOf(name) === -1) {
            parentValue.push(name)
            emit(this.vanCheckboxGroup, parentValue)
          }
        } else {
          const index = parentValue.indexOf(name)
          if (index !== -1) {
            parentValue.splice(index, 1)
            emit(this.vanCheckboxGroup, parentValue)
          }
        }
      },

      updateChild() {
        if (this.vanCheckboxGroup) {
          const { value, disabled } = this.vanCheckboxGroup
          const { name } = this
          this.currentValue = value.indexOf(name) !== -1
          emit(this, value.indexOf(name) !== -1)
          this.parentDisabled = disabled
        }
      }
    }
  })
}
</script>

<style lang="less">
@import './index.less';
</style>
