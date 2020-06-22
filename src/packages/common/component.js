import { basic } from '../mixins/basic'

function VantComponent(vantOptions = {}) {
  vantOptions.externalClasses = vantOptions.classes

  // add default externalClasses
  vantOptions.externalClasses = vantOptions.externalClasses || []
  vantOptions.externalClasses.push('custom-class')

  // add default mixins
  const mixins = vantOptions.mixins || []
  mixins.push(basic)
  // #ifdef MP-ALIPAY
  // 支付宝小程序中 vue 不支持 mixins 带 props 的对象
  vantOptions.mixins = mixins.map(item => ({ ...item, props: {} }))
  vantOptions.props = {
    ...mixins.reduce((prev, curr) => ({ ...prev, ...(curr.props || {}) }), {}),
    ...vantOptions.props
  }
  // #endif
  // #ifndef MP-ALIPAY
  vantOptions.mixins = mixins
  // #endif

  // add default options
  vantOptions.options = {
    multipleSlots: true,
    addGlobalClass: true
  }

  return vantOptions
}

export { VantComponent }
