<template>
<!-- 
    全局事件总线($bus),组件间的一种通讯方式，适用于任意组件之间的通信
    1.安装全局事件总线，在main.js中配置
    new Vue({
        beforeCreate() {
            Vue.prototype.$bus = this; //安装事件总线
        },
        render: h => h(App),
        }).$mount('#app')
    
    2.需要接受数据的组建中给$bus绑定自定义事件
     mounted(){
        //给$bus绑定一个xxxx事件
        this.$bus.$on("xxxx",this.yyyy);
     }
    3.要提供数据的组件触发事件
    this.$bus.$emit("xxxx",data)
    备注：
        谁接数据，谁就$on("xxxx-xxxx",this.yyyy)
        谁传数据，谁就$emit("xxxx-xxxx",数据(obj))
        上方的数据可以传递多个例如：$emit("xxxx-xxxx",数据1,数据2,数据2 ...),但如果有多个时 我们包装成对象传递

 -->
  <div class="demo1">
      <p>我是Demo1</p>
      <p>收到Demo2传过来的数据:<strong>{{name}}</strong></p>
      <button @click="aaa">点我给Demo2传递数据</button>
  </div>
</template>

<script>
export default {
    name:"Demo1",
    data(){
        return{
            name:""
        }
    },
    mounted(){
        //给$bus绑定一个nice事件
        this.$bus.$on("nice",this.nice);
        this.$bus.$on('well',this.well);
    },
    methods:{
        nice(val){
            console.log('.....',val);
            this.name = val
        },
        well(val){
            console.log('well',val);
        },
        aaa(){
            this.$bus.$emit('haha','我是给Demo2传过来的数据')
        }
    },
    beforeDestroy(){
        //组件销毁前 关闭事件总线
        this.$bus.$off('nice');
        this.$bus.$off('well');
    }
    
}
</script>

<style>
   .demo1{
        background-color: rgb(255, 0, 221);
        padding: 10px;
    }
</style>