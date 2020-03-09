<template>
  <ValidationObserver v-slot="{ invalid }">
    <div class="input-div">
      <h4>verification code will be sended on your mail</h4>
      <h4>Enter Your Email</h4>
      <validation-provider name="Email" rules="required">
        <div slot-scope="{ errors }">
          <input type="email" placeholder="enter your email" v-model="user.email" />
          <span style="color:red;font-size:small">{{ errors[0] }}</span>
        </div>
      </validation-provider>
      <button :disabled="invalid" @click="goToVerification()">Send Verification code</button>
    </div>
  </ValidationObserver>
</template>

<script>
export default {
  data: ()=>{
    return{
    user: {
        email: ""
    }
    }
  },
  computed: {
    validateForm() {
      return this.user.email !="";
    
  }
  },
   methods:{
     goToVerification(){
        if(this.user.email=="rishabh.srivastava@diatoz.com"){
      this.$router.push({
        name: "verify"
      });
    }else{
      alert("invalid email");
    }
    
     }
   }
}
</script>

<style scoped>
.input-div {
  width: 25%;
  margin: 0 auto;
}
input {
  background-color: rgb(221, 212, 212);
  border: none;
  padding: 8px 15px;
  margin: 6px 0;
  width: calc(100% - 30px);
  border-radius: 15px;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff, 0 1px 0 #fff;
  overflow: hidden;
  color: #cc3c3c;
}

button {
  border-radius: 20px;
  border: 1px solid #009345;
  background-color: #009345;
  color: #fff;
  font-size: 0.6rem;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  /* width:20%; */
}
</style>