import Vue from 'vue'
import App from './App'
import style from './mixins/style'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.mixin(style)

const app = new Vue({
  ...App
})
app.$mount()
