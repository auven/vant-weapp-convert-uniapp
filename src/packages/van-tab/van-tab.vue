<template>
  <view :class="tabClass" :style="[shouldShow ? {} : { display: 'none' }]">
    <slot v-if="shouldRender" />
  </view>
</template>

<script>
import utils from '../wxs/utils'
import { VantComponent } from '../common/component'
import { ChildrenMixin } from '../mixins/relation'
export default VantComponent({
  name: 'VanTab',
  mixins: [ChildrenMixin('vanTabs')],
  props: {
    dot: {
      type: Boolean
    },
    info: {
      type: null
    },
    title: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    titleStyle: {
      type: String
    },
    name: {
      type: [Number, String],
      default: ''
    }
  },

  data() {
    return {
      active: false,
      inited: false,
      shouldShow: false,
      shouldRender: false
    }
  },

  computed: {
    tabClass() {
      return `custom-class ${this.customClass} ${utils.bem('tab__pane', {
        active: this.active,
        inactive: !this.active
      })}`
    }
  },

  watch: {
    dot() {
      this.update()
    },
    info() {
      this.update()
    },
    title() {
      this.update()
    },
    disabled() {
      this.update()
    },
    titleStyle() {
      this.update()
    },
  },

  created() {
    this.update()
  },

  methods: {
    getComputedName() {
      if (this.name !== '') {
        return this.name
      }
      // #ifdef MP-TOUTIAO
      return this._getIndex()
      // #endif
      // #ifndef MP-TOUTIAO
      return this.index
      // #endif
    },

    updateRender(active) {
      const parentData = this.vanTabs

      this.inited = this.inited || active
      this.active = active
      this.shouldRender = this.inited || !parentData.lazyRender
      this.shouldShow = active || parentData.animated
    },

    update() {
      if (this.vanTabs) {
        this.vanTabs.updateTabs(this)
      }
    }
  }
})
</script>

<style lang="less">
@import './index.less';
</style>
