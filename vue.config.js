module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV !== 'development') {
      config.optimization.minimizer('terser').tap(args => {
        const compress = args[0].terserOptions.compress
        // 非 App 平台移除 console 代码(包含所有 console 方法，如 log,debug,info...)
        compress.drop_console = true
        compress.pure_funcs = [
          '__f__' // App 平台 vue 移除日志代码
          // 'console.debug' // 可移除指定的 console 方法
        ]
        return args
      })
    }
  }
}
