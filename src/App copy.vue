<template>
<!-- 
  ref的使用：
  1.标签中直接写ref=xxx
  2.通过this.$refs.xxx获取
  3.备注
      a.若给html内置标签打ref，则获取到的是真实的dom元素
      b.若给组件元素打ref，则获取到的是组件实例对象
 -->
  <div id="app">
    <h1>{{address}}</h1>
    <button @click="showData">click show data</button>
    <!-- 给input标签打个ref，input标签是html内置标签，所以通过this.$refs.keyWord获取到的是真是dom标签 -->
    <input type="text" ref="keyWord">
    <!-- 给 HelloWorld打一个ref，HelloWorld是组件标签，所以通过this.$refs.helloWorld获取到的是真是组件实例（vc）-->
    <HelloWorld ref="helloWorld" />
    <School :description="miaoshu" />
    <School v-for="item in miaoshus" :key="item.id"  :description="item.title"/>
  </div>
</template>

<script>
/* eslint-disable*/
import HelloWorld from './components/HelloWorld.vue';
import School from './components/School.vue'
/* eslint-disable-next-line */
const a = 11;
export default {
  name: 'App',
  data() {
    console.log("APP",this);
    return {
      address:"shang hai jinyu rd. 251",
      keyWord:"",
      miaoshu:"",
      miaoshus:[
        {id:0,title:"henan"},
        {id:1,title:"xinyang"}
      ]
    }
  },
  components: {
    HelloWorld,
    School
  },
  methods:{
    showData(){
      console.log(this.$refs.keyWord.value);
      console.log("A",this.$refs.helloWorld);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
