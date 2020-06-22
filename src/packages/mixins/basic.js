// eslint-disable-next-line no-undef
export const basic = {
  props: {
    customClass: String,
    customStyle: String
  },
  methods: {
    getRect(selector, all) {
      return new Promise(resolve => {
        let selectorQuery
        // #ifndef MP-ALIPAY
        selectorQuery = uni.createSelectorQuery().in(this)
        // #endif
        // #ifdef MP-ALIPAY
        selectorQuery = uni.createSelectorQuery()
        // #endif
        selectorQuery[all ? 'selectAll' : 'select'](selector)
        .boundingClientRect(rect => {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect)
          }
          if (!all && rect) {
            resolve(rect)
          }
        })
        .exec()
      })
    }
  }
}
