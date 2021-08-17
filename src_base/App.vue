<template>
  <div id="app">
     <div class="todo-container">
        <div class="todo-wrap">
          <!-- <Header :addTodo = "addTodo"/> -->
          <!-- 使用自定义事件实现 -->
          <Header @add-todo="addTodo"/>
          <List :nameItems="nameItems" :updateTodo= 'updateTodo' :deleteTodo="deleteTodo"/>
          <Footer
           :nameItems="nameItems"
           :updateChecked="updateChecked"
           :clearDone="clearDone"
           />
        </div>
     </div>
     <hr>
     <div>
       <Demo1/>
       <Demo2/>
     </div>
     <hr>
     <Testslot>
       <template slot="header">
        <div>我是app传过来的header</div>
        <div>我是app传过来的header</div>
        <div>我是app传过来的header</div>
       </template>
       <h1>wo shi app gei zi zu jian de html jie gou</h1>
     </Testslot>
     <hr>
     <div class="appCate">
        <Category title="games">
           <template slot="youxi">
             <div>
                <ul>
                  <li v-for="(ca,index) in categorys" :key="ca.id" :index = index>
                      {{ca.name}} ------ {{ca.price}}
                  </li>
                </ul>
             </div>
           </template>
        </Category>
        <Category title="food" >
          <template slot="meishi">
            <div>
              <img :src="src" alt="" />
            </div>
          </template>
            
        </Category>
        <Category title="video" >
          <template slot="movie">
            <div>
              <video controls :src="videoUrl"></video>
            </div>
          </template>
            
        </Category>

     </div>
     
     <hr/><br/>
     <div>
        <el-tree :data="dataTree" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
     </div>

     <hr/><br/><hr/><br/>
     <h2>github serach</h2>

     <div>
        <div class="container">
          <Serach/>
          <Gitlist/>
        </div>
     </div>
      

  </div>
</template>

<script>
/* eslint-disable*/
import Header from './components/Header.vue';
import List from './components/List.vue';
import Footer from './components/Footer.vue';
import Demo1 from './components/Demo1.vue';
import Demo2 from './components/Demo2.vue';
import Testslot from './components/Testslot.vue';
import Category from './components/Category.vue';
import Serach from './components/guithubserach/Serach.vue';
import Gitlist from './components/guithubserach/List.vue'

export default {
  name: 'App',
  data() {
    console.log("APP",this);
    let fTodos;
    
    try{
      let getTodos = localStorage.getItem("todos") || [];
      fTodos = JSON.parse(getTodos);
    }catch(err){
      alert('本地存储有误，已清除');
      localStorage.removeItem("todos");
      fTodos = []
    }
    return {
      nameItems:fTodos,
      categorys:[
        {id:"001",name:"cs",price:'100'},
        {id:"002",name:"lol",price:'200'},
        {id:"003",name:"jdqs",price:'300'}
      ],
      src:"https://s3.ax1x.com/2021/01/16/srJ1q0.jpg",
      videoUrl:'https://v-cdn.zjol.com.cn/276984.mp4',
      dataTree: [{
          label: '一级 1',
          id:"Troot",
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
    }
  },
  components: {
    Header,
    List,
    Footer,
    Demo1,
    Demo2,
    Testslot,
    Category,
    Serach,
    Gitlist
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
    },
     handleNodeClick(data) {
        console.log(data);
      }
  },
  watch:{
    nameItems:{
      deep:true, //开启深度检测，vue默认不开起，解决当done属性发生变化时，localStorage中存储的done不改变
      handler(value){
        localStorage.setItem("todos",JSON.stringify(value));
      }
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
.appCate{
  display: flex;
  justify-items: center;
  justify-content: space-around;
}
image ,video{
  width: 100%;
}

/* github serach */
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>
