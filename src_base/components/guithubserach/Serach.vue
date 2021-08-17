<template>
  <div>
       <section class="jumbotron">
       <h3 class="jumbotron-heading">Search Github Users</h3>
       <div>
        <input type="text" v-model="keyword" placeholder="enter the name you search"/>&nbsp;
        <button @click="Search">Search</button>
    </div>
    </section>
  </div>
</template>

<script>
    import PubSub from 'pubsub-js'
    import axios from 'axios';

    export default {
        name:"Serach",
        data(){
            return{
                keyword:""
            }
        },
        methods:{
            
           async Search(){
                //请求之前通知List组件更新它的data
                //this.$bus.$emit('get-list-data',{isFirst:false,isLoading:true,isError:'',users:[]})

                //事件订阅方式
                PubSub.publish('get-list-data', {isFirst:false,isLoading:true,isError:'',users:[]});
               try {
                    console.log(this.keyword);
                    //发送请求
                    const response = await axios.get("https://api.github.com/search/users",{params:{q:this.keyword}});
                    const {items} = response.data;
                    console.log(items);
                    //请求成功通知List组件更新它的data
                    // this.$bus.$emit('get-list-data',{isFirst:false,isLoading:false,isError:'',users:items})

                    //事件订阅方式
                    PubSub.publish('get-list-data', {isFirst:false,isLoading:false,isError:'',users:items});
                } catch (error) {
                    console.log(error.message);
                    //请求失败通知List组件更新它的data
                    //this.$bus.$emit('get-list-data',{isFirst:false,isLoading:false,isError:error.message,users:[]})

                    //事件订阅方式
                    PubSub.publish('get-list-data', {isFirst:false,isLoading:false,isError:error.message,users:[]});
                }
            }
        }
    }
</script>

<style>

</style>