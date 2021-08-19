<template>
  <div>
      <h3>我是Person组件</h3>
      <h3>求和为：{{sum}}</h3>
  </div>
</template>

<script>
export default {
    name:"Person",
    computed:{
        sum(){
            return this.$store.state.sum
        }
    }
}
</script>

<style>

</style>