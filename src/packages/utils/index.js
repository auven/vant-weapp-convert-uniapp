// 驼峰转短横线
// 来自：https://blog.csdn.net/Ttian6/article/details/100986106
export function getKebabCase(str) {
  return str.replace(/[A-Z]/g, function(item) {
    return '-' + item.toLowerCase()
  })
}

// 短横线转驼峰
// 来自：https://blog.csdn.net/Ttian6/article/details/100986106
export function getCamelCase(str) {
  return str.replace(/-([a-z])/g, function(keb, item) {
    return item.toUpperCase()
  })
}

export function sortChildren(children) {
  children.sort((a, b) => a._uid - b._uid)
}
