import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
    /**
     * vue.runtime.common.js和vue.js的区别
     * vue.runtime.common.js(项目中用的多)：
     * 1.不包含模板解析器，打包体积小
     * 2.配置项中不能写template，要用 render:h=>(App)代替
     * vue.js
     * 1.包含模板解析器，打包体积大
     * 2.配置项可以写template
     */

new Vue({
    render: h => h(App),
    // components:{
    //     App
    // },
    // template:`
    //     <App />
    // `
}).$mount('#app')