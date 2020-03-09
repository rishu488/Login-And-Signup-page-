<template>
 <!-- <n-navbar/> -->
  <div id="app">
   
    <div style="width:100vw;padding-top:30px">
     <!-- <n-navbar/>   -->
    </div>
    <br>
    <router-view style="margin:0 auto"></router-view>
  </div>
</template>

<script>
// import SignIn from './components/Login.vue'
// import navbar from '../widgets/navbar';
// import navbar from '../src/widgets/navbar';

export default {
  

  name: 'app',
  // components: {
  //   "n-navbar":navbar
  // }
}
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: Tahoma;
    font-size: 1.6rem;
    color: rgb(199, 193, 193);
    background-color: #092525;
    height: 100vh;
    // display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
