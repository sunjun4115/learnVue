<template>
    <li   :class="{ba:isEnter}" @mouseenter="isEnter=true" @mouseleave="isEnter=false">
        <label>
        <!-- 使用v-model绑定 -->
        <!-- <input type="checkbox" v-model="checked" @click="update(todo.id)" /> -->

        <!-- 直接传入$event事件参数 1.使用id更新-->
        <!-- <input type="checkbox" :checked="todo.done" @click="update(todo.id,$event)" /> -->
        <!-- 直接传入$event事件参数 2.使用index更新-->
        <input type="checkbox" :checked="todo.done" @click="update(index,$event)" />
        <span>{{todo.name}}</span>
        </label>
        <button 
        class="btn btn-danger" 
        :style="{display:isEnter ? 'block' : 'none'}"
        @click="delTodo(index)"
        >删除</button>
    </li>
</template>

<script>
export default {
    name:"Item",
    props:["todo","updateTodo","index","deleteTodo"],
    data(){
        return{
            isEnter:false,
            checked:this.todo.done
        }
    },
    methods:{
        //  update(id){
        //     console.log(id,!this.checked);  // 取反的原因：vue事件优先机制 先执行事件 再去改this.checked的值 所以在事件中拿到this.checked的时候值还没有更改
        // },

        //传入$event事件参数 1.使用id更新
        // update(id,event){
        //     console.log("event",event);
        //     console.log(id,event.target.checked);
           
        //     // this.updateTodo(id,event.target.checked);  //使用id更新
        // },

        //传入$event事件参数 2.使用index更新
        update(index,event){
            console.log("event",event);
            const {checked} = event.target;
            this.updateTodo(index,checked);  //使用index更新
        },
        delTodo(index){
            if(confirm("is del?")){
                this.deleteTodo(index);
            }
        }
    }
}
</script>

<style>
    .ba{
        background-color: #ddd;
    }
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }
</style>