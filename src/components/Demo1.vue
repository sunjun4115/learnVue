<template>
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
}
    
}
</script>

<style>
   .demo1{
        background-color: rgb(255, 0, 221);
        padding: 10px;
    }
</style>