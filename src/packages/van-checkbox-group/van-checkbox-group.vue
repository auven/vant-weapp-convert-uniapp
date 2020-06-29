<template>
  <div><slot /></div>
</template>

<script>
import { VantComponent } from '../common/component'
import { getComponentByOptionsName } from '../wxs/get-component'
import { ParentMixin } from '../mixins/relation'
export default VantComponent({
  mixins: [ParentMixin('vanCheckboxGroup')],
  props: {
    max: [Number, String],
    value: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    // #ifdef MP-TOUTIAO
    value() {
      this.updateChildren()
    },
    disabled() {
      this.updateChildren()
    }
    // #endif
  },

  methods: {
    // #ifdef MP-TOUTIAO
    updateChildren() {
      this.$nextTick(() => {
        const $children = getComponentByOptionsName(this, 'VanCheckbox')
        $children.forEach(child => {
          this.updateChild(child)
        })
      })
    },
    updateChild(child) {
      const { value, disabled } = this
      child.currentValue = value.indexOf(child.name) !== -1
      child.parentDisabled = disabled
    }
    // #endif
  }
})
</script>

<style lang="less">
@import './index.less';
</style>
