<template>
  <div><slot /></div>
</template>

<script>
import { VantComponent } from '../common/component'
import { ParentMixin } from '../mixins/relation'
import { getComponentByOptionsName } from '../wxs/get-component'
export default VantComponent({
  mixins: [ParentMixin('vanRadioGroup')],
  props: {
    value: null,
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
        const $children = getComponentByOptionsName(this, 'VanRadio')
        $children.forEach(child => {
          child.updateChild()
        })
      })
    }
    // #endif
  }
})
</script>

<style lang="less">
@import './index.less';
</style>
