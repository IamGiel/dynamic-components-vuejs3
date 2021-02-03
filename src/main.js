import Vue from 'vue'
import App from './App.vue'


// Vue.mount('#dynamic-component-demo')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
