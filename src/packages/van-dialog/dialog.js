let queue = []

function getContext() {
  const pages = getCurrentPages()
  return pages[pages.length - 1]
}

function mapKeys(source, target, map) {
  Object.keys(map).forEach((key) => {
    if (source[key]) {
      target[map[key]] = source[key]
    } else {
      target[map[key]] = null
    }
  })
}

const Dialog = options => {
  options = {
    ...Dialog.currentOptions,
    ...options
  }

  const _options = {}

  mapKeys(options, _options, {
    show: 'optionsShow',
    title: 'optionsTitle',
    width: 'optionsWidth',
    theme: 'optionsTheme',
    message: 'optionsMessage',
    zIndex: 'optionsZIndex',
    overlay: 'optionsOverlay',
    selector: 'selector',
    className: 'optionsClassName',
    asyncClose: 'optionsAsyncClose',
    transition: 'optionsTransition',
    customStyle: 'optionsCustomStyle',
    messageAlign: 'optionsMessageAlign',
    overlayStyle: 'optionsOverlayStyle',
    confirmButtonText: 'optionsConfirmButtonText',
    cancelButtonText: 'optionsCancelButtonText',
    showConfirmButton: 'optionsShowConfirmButton',
    showCancelButton: 'optionsShowCancelButton',
    closeOnClickOverlay: 'optionsCloseOnClickOverlay',
    confirmButtonOpenType: 'optionsConfirmButtonOpenType'
  })

  return new Promise((resolve, reject) => {
    const context = options.context || getContext()
    let dialog
    // #ifdef H5
    dialog = context.$refs[options.selector]
    // #endif
    // #ifndef H5
    dialog = context.$vm.$refs[options.selector]
    // #endif

    delete options.context
    delete options.selector

    if (dialog) {
      dialog.onCancelReject = reject
      dialog.onConfirmResolve = resolve
      Object.keys(_options).map(key => {
        dialog[key] = _options[key]
      })
      dialog.optionsShow = true
      queue.push(dialog)
    } else {
      console.warn(
        '未找到 van-dialog 节点，请确认 selector 及 context 是否正确'
      )
    }
  })
}

Dialog.defaultOptions = {
  show: false,
  title: '',
  width: null,
  theme: 'default',
  message: '',
  zIndex: 100,
  overlay: true,
  selector: 'van-dialog',
  className: '',
  asyncClose: false,
  transition: 'scale',
  customStyle: '',
  messageAlign: '',
  overlayStyle: '',
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  confirmButtonOpenType: ''
}

Dialog.alert = Dialog

Dialog.confirm = options =>
  Dialog({
    showCancelButton: true,
    ...options
  })

Dialog.close = () => {
  queue.forEach(dialog => {
    dialog.close()
  })
  queue = []
}

Dialog.stopLoading = () => {
  queue.forEach(dialog => {
    dialog.stopLoading()
  })
}

Dialog.setDefaultOptions = options => {
  Object.assign(Dialog.currentOptions, options)
}

Dialog.resetDefaultOptions = () => {
  Dialog.currentOptions = { ...Dialog.defaultOptions }
}

Dialog.resetDefaultOptions()

export default Dialog
