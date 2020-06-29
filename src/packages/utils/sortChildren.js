export default function sortChildren(children) {
  // #ifdef MP-ALIPAY
  // 支付宝是倒序的
  children.sort((a, b) => b._uid - a._uid)
  // #endif
  // #ifndef MP-ALIPAY
  // 其他的是正序的
  children.sort((a, b) => a._uid - b._uid)
  // #endif
}
