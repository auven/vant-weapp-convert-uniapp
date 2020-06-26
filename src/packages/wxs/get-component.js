import * as shvl from 'shvl'

// 通过id获取组件
const defaultOptions = {
  childrenKey: '$children',
  filterKey: 'componentId',
  filterValue: ''
}

function filterFn(item, options) {
  if (!options.filterValue) {
    return true
  } else if (Array.isArray(options.filterValue)) {
    return options.filterValue.includes(shvl.get(item, options.filterKey))
  } else {
    return shvl.get(item, options.filterKey) === options.filterValue
  }
}

function getChildren(obj, options = {}) {
  options = {
    ...defaultOptions,
    ...options
  }
  const children = []
  children.push(...obj[options.childrenKey].filter(item => filterFn(item, options)))
  for (let i = 0, length = obj[options.childrenKey].length; i < length; i++) {
    if (obj[options.childrenKey][i][options.childrenKey].length) {
      children.push(...getChildren(obj[options.childrenKey][i], options))
    }
  }
  return children
}

export function getComponentById(context, selector) {
  return getChildren(context, { filterValue: selector })
}

export function getComponentByOptionsName(context, selector) {
  return getChildren(context, { filterKey: '$options.name', filterValue: selector })
}
