<template>
  <div class="todo-header">
        <input 
        v-model="name" 
        @keyup.enter="add" 
        type="text" 
        placeholder="请输入你的任务名称，按回车键确认"
        />
  </div>
</template>

<script>
export default {
    name:"Header",
    // props:['addTodo'],
    data(){
        console.log("Header",this);
        return{
            name:""
        }
    },
    methods:{
        add(){
            console.log(this.name);
            if(!this.name.trim()){
                alert('不能为空');
                return
            }
            //根据用户的输入添加一个对象
            const todoObj = {id:Date.now(),name:this.name,done:false};
            console.log(todoObj);
            // //通知App添加一个todo
            // this.addTodo(todoObj);

             //使用自定义事件通知App添加一个todo
            this.$emit("add-todo",todoObj);
            this.name="";
        },
        
    }
}
</script>

<style scoped>
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>