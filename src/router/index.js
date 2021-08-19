// 该文件是vue中路由器文件 路由器管理着所有路由 
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'

Vue.use(VueRouter);

//创建一个路由器 管理所有路由
const router = new VueRouter({
    routes: [
        { path: '/about', component: About },
        { path: '/home', component: Home },
    ]
})

//暴露路由器
export default router