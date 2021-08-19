<template>
  <div id="app">
    <h1>Vue Vuex</h1>
    <Countvuex/>
    <Person/>
  </div>
</template>

<script>
/* eslint-disable*/
import Countvuex from './components/Countvuex'
import Person from './components/Person'

export default {
  name: 'App',
  data() {
    return{

    }
  },
  mounted(){
        console.log("vc",this);
    },
  components: {
   Countvuex,
   Person
  },
  methods:{
  },
  watch:{
   
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


</style>
