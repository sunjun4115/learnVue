import Vue from 'vue'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router/index'

Vue.use(ElementUI);

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
    beforeCreate() {
        Vue.prototype.$bus = this; //安装事件总线
    },
    router,
    render: h => h(App),
    // components:{
    //     App
    // },
    // template:`
    //     <App />
    // `
}).$mount('#app')