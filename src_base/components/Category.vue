<template>
  <div class="cate">
      <h2>{{title}}</h2>
      <!-- 默认 -->
      <!-- <slot></slot> -->
      <!-- 具名插槽 -->
      <slot name="youxi"></slot>
      <slot name="meishi"></slot>
      <slot name="movie"></slot>
  </div>
</template>

<script>
    export default {
        name:"Category",
        props:["category","title"]
    }

</script>

<style>
    .cate{
        width: 200px;
        height: 300px;
        background-color: aqua;
    }
</style>