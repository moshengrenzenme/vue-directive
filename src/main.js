import Vue from 'vue'
import App from './App.vue'
import router from './router'
import dashboard from "./directive/dashboard";

Vue.directive(dashboard.name, dashboard.directive);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
