<template>
  <div>
      <div class="row">
            <h1 v-show="listData.isFirst">欢迎使用</h1>
            <h1 v-show="listData.isLoading">loading...</h1>
            <h1 v-show="listData.isError">{{listData.isError}}</h1>

            <div v-show="listData.users.length" class="card" v-for="userObj in listData.users" :key="userObj.login">
              <a :href="userObj.html_url">
                <img :src="userObj.avatar_url" style='width: 100px'/>
              </a>
              <p class="card-text">{{userObj.login}}</p>
            </div>
          </div>
  </div>
</template>

<script>
    import PubSub from 'pubsub-js'
    export default {
        name:"List",
        data(){
            return{
                listData:{
                    users:[],
                    isFirst:true,
                    isLoading:false,
                    isError:''
                }
            }
        },
        methods:{
            //事件总线方式
            // saveUsers(dataObj){
            //     console.log('list 收到了',dataObj);
            //     this.listData = {...this.listData,...dataObj}
            // }
            //事件订阅
            saveUsers(_,dataObj){
                console.log('list 收到了',dataObj);
                this.listData = {...this.listData,...dataObj}
            }
        },
        mounted(){
            //组件一挂载就绑定事件
            // this.$bus.$on("get-list-data",this.saveUsers);
            //组件一挂载就订阅事件
            this.token = PubSub.subscribe('get-list-data', this.saveUsers);
            console.log('token',this.token);
        },
        beforeDestroy(){
            //组件销毁前取消绑定事件
            // this.$bus.$off("get-list-data");
             //组件销毁前取消订阅
            PubSub.unsubscribe(this.token);
            /**
             * 
             * 
             */
        }
    }
</script>

<style>

</style>