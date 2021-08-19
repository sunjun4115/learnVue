<template>
  <div>
      <h3>计算的和为 {{sum}}</h3>
      <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>&nbsp;
      <button @click="increment">+</button>&nbsp;
      <button @click="decrement">-</button>&nbsp;
      <button @click="incrementOdd">奇数加</button>&nbsp;
      <button @click="incrementAsync">异步加</button>&nbsp;
  </div>
</template>

<script>
    export default {
        name:"Count",
        data(){
            return{
                sum:0,
                n:1
            }
        },
        methods:{
            increment(){
                this.sum +=this.n
            },
            decrement(){
                this.sum -=this.n
            },
            incrementOdd(){
                if(this.sum%2){
                    this.sum +=this.n
                }
            },
            incrementAsync(){
                setTimeout(()=>{
                    this.sum +=this.n
                },500)
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