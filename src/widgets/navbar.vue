<template>
    <ul class=".nav-tabs ">
  <li class="nav-item mb-0">
    <router-link to="/home" class="nav-link active" href="#">Home</router-link>
  </li>
  <li class="nav-item">
    <a @click="goToAboutUs" class="nav-link" href="#">About Us</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact Us</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">address</a>
  </li>
</ul>
</template>


<script>
export default {
    methods : {
        goToAboutUs() {
            this.$router.push('/');
            this.$emit('data','1254')        }
    }
}
</script>

<style scoped>
ul li{
    display: inline;
    margin: 40px;
    text-align: center;
    
    
}
a{
text-decoration: none;
color: red;
}
</style>