<template>
    <ul class="todo-main">
    <Item  
    v-for="(p ,index) in nameItems" 
    :index="index" 
    :key="p.id" 
    :todo='p' 
    :updateTodo="updateTodo"
    :deleteTodo="deleteTodo"
    />
    </ul>
</template>

<script>
import Item  from './Item.vue'
export default {
    name:"List",
    props:["nameItems","updateTodo","deleteTodo"],
    data(){
        return{
           
        }
    },
    components:{
        Item
    }
}
</script>

<style>
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>