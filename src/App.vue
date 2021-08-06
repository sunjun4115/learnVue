<template>
  <div id="app">
     <div class="todo-container">
        <div class="todo-wrap">
          <Header :addTodo = "addTodo"/>
          <List :nameItems="nameItems" :updateTodo= 'updateTodo' :deleteTodo="deleteTodo"/>
          <Footer
           :nameItems="nameItems"
           :updateChecked="updateChecked"
           :clearDone="clearDone"
           />
        </div>
     </div>
  </div>
</template>

<script>
/* eslint-disable*/
import Header from './components/Header.vue';
import List from './components/List.vue';
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  data() {
    console.log("APP",this);
    return {
      nameItems:[
                {id:"001",name:"smokes",done:false},
                {id:"002",name:"drink",done:true},
                {id:"003",name:"coding",done:false},
                {id:"004",name:"perm",done:true}
              ]
    }
  },
  components: {
    Header,
    List,
    Footer
  },
  methods:{
    //添加一个todo
    addTodo(todoObj){
      this.nameItems.unshift(todoObj);
    },
    //1. 使用id去更新
    // updateTodo(id,done){
    //   this.nameItems = this.nameItems.map((val)=>{
    //     if(val.id === id){
    //       return {...val,done}
    //     }else{
    //       return val
    //     }
    //   })
    // }

    //使用index去更新
    updateTodo(index,done){
      this.nameItems[index].done = done
    },
    //用index去删除
    deleteTodo(index){
      this.nameItems.splice(index,1);
    },
    //全选 or 全不选
    updateChecked(isCheck){
      this.nameItems = this.nameItems.map((val)=>{return {...val,done:isCheck}})
    },
    //清除已完成
    clearDone(){
      // for(let i=this.nameItems.length-1; i>=0; i--){
      //   if(this.nameItems[i].done===true){
      //     this.nameItems.splice(i,1);
      //   }
      // }
      this.nameItems = this.nameItems.filter((val)=>{
        return val.done === false
      })
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
