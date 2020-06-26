import { isObj } from '../common/utils'

function mapKeys(source, target, map) {
  Object.keys(map).forEach((key) => {
    if (source[key]) {
      target[map[key]] = source[key]
    } else {
      target[map[key]] = null
    }
  })
}

const defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  show: true,
  zIndex: 1000,
  duration: 2000,
  position: 'middle',
  forbidClick: false,
  loadingType: 'circular',
  selector: 'van-toast'
}

let queue = []
let currentOptions = { ...defaultOptions }

function parseOptions(message) {
  return isObj(message) ? message : { message }
}

function getContext() {
  const pages = getCurrentPages()
  return pages[pages.length - 1]
}

function Toast(toastOptions) {
  const options = {
    ...currentOptions,
    ...parseOptions(toastOptions)
  }

  const _options = {}

  mapKeys(options, _options, {
    type: 'optionsType',
    mask: 'optionsMask',
    message: 'optionsMessage',
    show: 'optionsShow',
    zIndex: 'optionsZIndex',
    duration: 'optionsDuration',
    position: 'optionsPosition',
    forbidClick: 'optionsForbidClick',
    loadingType: 'optionsLoadingType',
    selector: 'selector'
  })

  const context = options.context || getContext()
  let toast
  // #ifdef H5
  toast = context.$refs[options.selector]
  // #endif
  // #ifndef H5
  toast = context.$vm.$refs[options.selector]
  // #endif

  if (!toast) {
    console.warn('未找到 van-toast 节点，请确认 selector 及 context 是否正确')
    return
  }

  delete options.context
  delete options.selector

  toast.clear = () => {
    toast.optionsShow = false

    if (options.onClose) {
      options.onClose()
    }
  }

  Object.keys(_options).map(key => {
    toast[key] = _options[key]
  })
  queue.push(toast)
  clearTimeout(toast.timer)

  if (_options.optionsDuration > 0) {
    toast.timer = setTimeout(() => {
      toast.clear()
      queue = queue.filter(item => item !== toast)
    }, _options.optionsDuration)
  }

  return toast
}

const createMethod = type => options =>
  Toast({
    type,
    ...parseOptions(options)
  })

Toast.loading = createMethod('loading')
Toast.success = createMethod('success')
Toast.fail = createMethod('fail')

Toast.clear = () => {
  queue.forEach(toast => {
    toast.clear()
  })
  queue = []
}

Toast.setDefaultOptions = options => {
  Object.assign(currentOptions, options)
}

Toast.resetDefaultOptions = () => {
  currentOptions = { ...defaultOptions }
}

export default Toast
