//引入vue
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'

//应用插件
Vue.use(Vuex)

//初始化状态 要写成一个对象 包含n组 key-value，因为该state要管理n多个组件的状态
const state = {
    sum: 0
}

//创建一个action值为对象 包含n多个相应组件'动作'的函数
const actions = {
    jia(ministore, value) {
        console.log(ministore, value);
    }
}

//创建一个mutations值为对象 
const mutations = {
    add(state) {
        state.sum++
    }
}


//创建store 用于管理 State对象 Action对象 Mutation对象
const store = new Vuex.Store({
    state,
    actions,
    mutations
});

export default store