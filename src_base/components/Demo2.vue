<template>
  <div class="demo2">
      <p>我是Demo2</p>
      <p>Demo1 给我传来的数据:<strong>{{strs}}</strong></p>
      <button @click="bbb">click me 给Demo1传递数据</button>
      <button @click="ccc">click me 在Demo1上打印</button>
  </div>
</template>

<script>
export default {
    name:"Demo2",
    data(){
        return{
            strs:""
        }
    },
    methods:{
        bbb(){
            //触发全局的nice事件
            this.$bus.$emit("nice","老刘");
        },
        ccc(){
            this.$bus.$emit("well","老孙");
        },
        haha(val){
            this.strs = val;
        }
    },
    mounted(){
        this.$bus.$on("haha",this.haha)
    }
}
</script>

<style>
    .demo2{
        background-color: aqua;
        padding: 10px;
    }
</style>