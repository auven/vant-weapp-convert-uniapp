import { isObj, requestAnimationFrame } from '../common/utils'

const nextTick = () => new Promise(resolve => setTimeout(resolve, 1000 / 30))

export const transition = function(showDefaultValue) {
  return {
    props: {
      customStyle: String,
      show: {
        type: Boolean,
        default: showDefaultValue
      },
      duration: {
        type: [String, Number, Object],
        default: 300
      },
      name: {
        type: String,
        default: 'fade'
      },
      enterClass: String,
      enterActiveClass: String,
      enterToClass: String,
      leaveActiveClass: String,
      leaveClass: String,
      leaveToClass: String
    },

    data() {
      return {
        type: '',
        inited: false,
        display: false,
        classes: '',
        currentName: ''
      }
    },

    watch: {
      show(value, old) {
        this.observeShow(value, old)
      },
      duration() {
        // this.observeDuration(value, old)
      }
    },

    methods: {
      observeShow(value, old) {
        if (value === old) {
          return
        }
        value ? this.enter() : this.leave()
      },

      getClassNames(name) {
        return ({
          enter: `van-${name}-enter van-${name}-enter-active ${this.enterClass} ${this.enterActiveClass}`,
          'enter-to': `van-${name}-enter-to van-${name}-enter-active ${this.enterToClass} ${this.enterActiveClass}`,
          leave: `van-${name}-leave van-${name}-leave-active ${this.leaveClass} ${this.leaveActiveClass}`,
          'leave-to': `van-${name}-leave-to van-${name}-leave-active ${this.leaveToClass} ${this.leaveActiveClass}`
        })
      },

      enter() {
        const { duration, name, currentName } = this
        const classNames = this.getClassNames(currentName || name)
        const currentDuration = isObj(duration) ? duration.enter : duration

        this.status = 'enter'
        this.$emit('before-enter')

        // #ifdef MP-WEIXIN
        requestAnimationFrame(() => {
          this.checkStatus('enter')
          this.$emit('enter')

          this.inited = true
          this.display = true
          this.classes = classNames.enter
          this.currentDuration = currentDuration

          requestAnimationFrame(() => {
            this.checkStatus('enter')
            this.transitionEnded = false

            this.classes = classNames['enter-to']
          })
        })
        // #endif

        // #ifndef MP-WEIXIN
        Promise.resolve()
          .then(nextTick)
          .then(() => {
            this.checkStatus('enter')
            this.$emit('enter')

            this.inited = true
            this.display = true
            this.classes = classNames.enter
            this.currentDuration = currentDuration
          })
          .then(nextTick)
          .then(() => {
            this.checkStatus('enter')
            this.transitionEnded = false

            this.classes = classNames['enter-to']
          })
          .catch(() => {})
        // #endif
      },

      leave() {
        if (!this.display) {
          return
        }

        const { duration, name, currentName } = this
        const classNames = this.getClassNames(currentName || name)
        const currentDuration = isObj(duration) ? duration.leave : duration

        this.status = 'leave'
        this.$emit('before-leave')

        // #ifdef MP-WEIXIN
        requestAnimationFrame(() => {
          this.checkStatus('leave')
          this.$emit('leave')

          this.classes = classNames.leave
          this.currentDuration = currentDuration

          requestAnimationFrame(() => {
            this.checkStatus('leave')
            this.transitionEnded = false
            setTimeout(() => this.onTransitionEnd(), currentDuration)

            this.classes = classNames['leave-to']
          })
        })
        // #endif

        // #ifndef MP-WEIXIN
        Promise.resolve()
          .then(nextTick)
          .then(() => {
            this.checkStatus('leave')
            this.$emit('leave')

            this.classes = classNames.leave
            this.currentDuration = currentDuration
          })
          .then(nextTick)
          .then(() => {
            this.checkStatus('leave')
            this.transitionEnded = false
            setTimeout(() => this.onTransitionEnd(), currentDuration)

            this.classes = classNames['leave-to']
          })
          .catch(() => {})
        // #endif
      },

      checkStatus(status) {
        if (status !== this.status) {
          throw new Error(`incongruent status: ${status}`)
        }
      },

      onTransitionEnd() {
        if (this.transitionEnded) {
          return
        }

        this.transitionEnded = true
        this.$emit(`after-${this.status}`)

        const { show, display } = this
        if (!show && display) {
          this.display = false
        }
      }
    }
  }
}
