import { basic } from '../mixins/basic'

function VantComponent(vantOptions = {}) {
  vantOptions.externalClasses = vantOptions.classes

  // add default externalClasses
  vantOptions.externalClasses = vantOptions.externalClasses || []
  vantOptions.externalClasses.push('custom-class')

  // add default mixins
  vantOptions.mixins = vantOptions.mixins || []
  vantOptions.mixins.push(basic)

  // add default options
  vantOptions.options = {
    multipleSlots: true,
    addGlobalClass: true
  }

  return vantOptions
}

export { VantComponent }
