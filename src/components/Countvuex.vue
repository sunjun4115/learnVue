<template>
  <div>
      <h3>计算的和为 {{csum}}</h3>
      <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>&nbsp;
      <button @click="increment">+</button>&nbsp;
      <button>-</button>&nbsp;
      <button>奇数加</button>&nbsp;
      <button>异步加</button>&nbsp;
  </div>
</template>

<script>
    export default {
        name:"Countvuex",
        data(){
            console.log("this.$store.state.sum",this.$store.state.sum);
            return{
                n:1
            }
        },
        methods:{
            increment(){
                this.$store.dispatch("jia",this.n);
                this.$store.commit('add');
                console.log(this.$store.state.sum)
            }
        },
        computed:{
            csum(){
                return this.$store.state.sum
            }
        }
    }
</script>
<style scoped>
    select{
        width: 80px;
        height: 25px;
    }
</style>