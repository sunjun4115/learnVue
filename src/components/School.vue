><template>
    <div>
        <h2 class="title">school is {{school}}</h2>
        <h3>{{description}}</h3>
    </div>
</template>
<script>
export default {
    name:"School",  //专门用于指定组件名称,如果指定，这vue结构中会以这个名称显示，如果没有指定，则以在App.vue中注册时的名称显示
    //配置数据
    data(){
        console.log('School',this);
        return{
            school:"zhengzhou university"
        }
    },
    //声明接受props------最完整的写法，限制了类型 控制必要性 制定了默认值
    props:{
        description:{
            type:String,  //类型
            require:true,  //必要性
            default:"this is why we play"  //默认值
        }
    },
    // //声明接受props------次完整的写法，限制了类型
    // props:{
    //     description:{
    //         type:String  //类型
    //     }
    // },

    //  //声明接受props------精简的写法，啥也不限制
    // props:["description"]
}
</script>
<style scoped>
.title{
    background-color: blueviolet;
}
</style>
