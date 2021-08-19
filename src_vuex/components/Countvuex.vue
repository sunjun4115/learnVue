<template>
  <div>
      <h3>计算的和为 {{sum}}</h3>
       <h3>计算的和为 {{name}}</h3>
      <h3>计算的和经过加工后的值 {{bigSum}}</h3>
      <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>&nbsp;
      <button @click="increment">+</button>&nbsp;
      <button @click="decrement">-</button>&nbsp;
      <button @click="incrementOdd">奇数加</button>&nbsp;
      <button @click="incrementAsync">异步加</button>&nbsp;
      <button @click="testmapActions">mapActions -</button>&nbsp;
      <button @click="testmapMutations(n)">mapMutations -</button>&nbsp;
  </div>
</template>

<script>
    import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
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
                // this.$store.commit('add');
                console.log(this.$store.state.sum);
                console.log("mapState",mapState({name}));
            },
            decrement(){
                this.$store.dispatch("jian",this.n);
                //this.$store.commit("JIAN",this.n)
            },
            incrementOdd(){
                this.$store.dispatch("jiaodd",this.n)
            },
            incrementAsync(){
                this.$store.dispatch('addasync',this.n);
            },
            ...mapActions(["mapDecrement"]),   //如果使用 mapActions 辅助函数，传参数时 需要在写一个点击方法 然后通过this.mapDecrement 调用...mapActions(["mapDecrement"])中的方法名
            testmapActions(){
                this.mapDecrement(this.n)
            },
            //使用mapMutations生成testmapMutations，和mutations中JIAN对话，完成减
            ...mapMutations({
                testmapMutations:"JIAN"
            })
           
        },
        computed:{

            // ...mapState({
            //    sum:"sum",  //sum控制的是模板中读取的属性  'sum'控制的是读取state中哪个属性
            // }),
            // ...mapGetters({
            //     bigSum:"bigSum"
            // })

            ...mapState(['sum','name']),
            ...mapGetters(["bigSum"])

            //计算属性写法
            // sum(){
            //     return this.$store.state.sum
            // },
            // bigSum(){
            //     return this.$store.getters.bigSum
            // }
        }
    }
</script>
<style scoped>
    select{
        width: 80px;
        height: 25px;
    }
</style>