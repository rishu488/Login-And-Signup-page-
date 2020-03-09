<template>
    <div>
        <button  @click="goToLogin()"> Return To Login  </button>
    </div>    
</template>
<script>
export default {
    methods:{
        goToLogin(){
            this.$router.push({
                name:"login"
            });
            
        }
    }
};
</script>
<style scoped>

</style>