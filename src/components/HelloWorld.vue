<template>
  <div class="title">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
 data() {
   return {
     name:"qualvision"
   }
 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  background-color: aqua;
}
</style>
