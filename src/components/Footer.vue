<template>
   <div class="todo-footer">
        <label>
            <!-- 用事件写全选or全不选 -->
          <!-- <input type="checkbox" :checked="isAll" @click="isCheck($event)"/> -->
          <!-- 用计算属性的set方法 -->
          <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
          <span>已完成{{doneCount}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clear">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name:"Footer",
    props:["nameItems","updateChecked","clearDone"],
    data() {
        console.log('aaa',this.nameItems.length);
        return {
            
        }
    },
    computed:{
        doneCount(){
            return this.nameItems.reduce((pre,current)=>pre += current.done ? 1 : 0,0)
        },
        total(){
            return this.nameItems.length
        },
        // isAll(){
        //     return this.doneCount === this.total && this.total > 0
        // }
        isAll:{
            set(tager){
                this.updateChecked(tager)
            },
            get(){
                return this.doneCount === this.total && this.total > 0
            }
        }
    },
    methods:{
        //函数形式
        // isCheck(event){
        //     this.updateChecked(event.target.checked)
        // }
        clear(){
            if(confirm("is clear?")){
                this.clearDone();
            }
        }
    }
}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>