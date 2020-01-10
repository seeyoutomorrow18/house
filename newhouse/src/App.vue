<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from './page/Navigation'
/* import HelloWorld from './components/HelloWorld.vue' */

export default {
  name: 'app',
  components: {
    /* HelloWorld */
    Navigation
  }
}
</script>

<style>
html,body{
  height: 100% ;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
}
</style>
