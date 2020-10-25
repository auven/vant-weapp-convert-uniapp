import { sortChildren } from '../utils'

export function ChildrenMixin(parent, options = {}) {
  const indexKey = options.indexKey || 'index'

  return {
    inject: {
      [parent]: {
        default: null
      }
    },

    computed: {
      [indexKey]() {
        this.bindRelation()
        if (this[parent]) {
          const children = JSON.parse(this[parent].children)
          return children.map(item => item._uid).indexOf(this._uid)
        }

        return null
      },

      parentChildren() {
        if (!this[parent]) {
          return []
        }
        const children = JSON.parse(this[parent].children)
        return children
      }
    },

    created() {
      this.bindRelation()
    },

    beforeDestroy() {
      if (this[parent]) {
        let children = JSON.parse(this[parent].children)
        children = children.filter(
          item => item._uid !== this._uid
        )
        this[parent].children = JSON.stringify(children)
      }
    },

    methods: {
      bindRelation() {
        if (!this[parent]) {
          return
        }
        const _children = JSON.parse(this[parent].children)
        if (_children.map(item => item._uid).indexOf(this._uid) !== -1) {
          return
        }

        const children = [..._children, { ...this.$data, ...this.$props, _uid: this._uid }]

        sortChildren(children)

        this[parent].children = JSON.stringify(children)
      },
      _getIndex() {
        if (this[parent]) {
          const children = JSON.parse(this[parent].children)
          return children.map(item => item._uid).indexOf(this._uid)
        }

        return null
      },
      _getParentChildren() {
        if (!this[parent]) {
          return []
        }
        const children = JSON.parse(this[parent].children)
        return children
      }
    }
  }
}

export function ParentMixin(parent) {
  return {
    provide() {
      return {
        [parent]: this
      }
    },

    data() {
      return {
        children: '[]'
      }
    }
  }
}
