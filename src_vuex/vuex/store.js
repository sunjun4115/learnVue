//引入vue
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'

//应用插件
Vue.use(Vuex)

//初始化状态 要写成一个对象 包含n组 key-value，因为该state要管理n多个组件的状态
const state = {
    sum: 0,
    name: "james"
}

//创建一个action值为对象 包含n多个相应组件'动作'的函数   context是mini版的$store 我们用context.commit()去通知mutations加工状态
const actions = {
    jia(context, value) {
        // console.log(context, value);
        context.commit("ADD", value);
    },
    jian(context, value) {
        context.commit("JIAN", value);
    },
    jiaodd(context, value) {
        if (context.state.sum % 2) {
            context.commit("JIAODD", value);
        }
    },
    addasync(context, value) {
        setTimeout(() => {
            context.commit('JIAASYNC', value);
        }, 500)

    },
    mapDecrement(context, value) {
        console.log('sss', context, value);
        context.commit("JIAN", value);
    }
}

//创建一个mutations值为对象 包含n多个真正用于加工状态的函数
const mutations = {
    ADD(state, val) {
        console.log('ssssss', state, val)
        state.sum += val
    },
    JIAN(state, val) {
        state.sum -= val
    },
    JIAODD(state, val) {
        state.sum += val
    },
    JIAASYNC(state, val) {
        state.sum += val
    }
}

//加工器 getters中配置的是state中的数据经过加工后的值 ----类似于vue中的computed  Getter 接受 state 作为其第一个参数
const getters = {
    bigSum(state) {
        return state.sum * 100
    }
}

//创建store 用于管理 State对象 Action对象 Mutation对象
const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters
});

export default store