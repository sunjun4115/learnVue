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
            saveUsers(dataObj){
                console.log('list 收到了',dataObj);
                this.listData = {...this.listData,...dataObj}
            }
        },
        mounted(){
            this.$bus.$on("get-list-data",this.saveUsers)
        },
        beforeDestroy(){
            this.$bus.$off("get-list-data")
        }
    }
</script>

<style>

</style>