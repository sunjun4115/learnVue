<template>
  <div>
      <h3>slot</h3>
      <slot name="header"> defaule header</slot>
      <slot></slot>
      <slot name="footer"> default footer</slot>
  </div>
</template>

<script>
    export default {
        name:"Testslot"
    }
</script>

<style>

</style>