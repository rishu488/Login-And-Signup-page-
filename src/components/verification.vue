<template>
   <ValidationObserver v-slot="{ invalid }">
    <div class="input-div">
      <h2>Enter verification code</h2>
      <validation-provider name="Number" rules="required">
        <div slot-scope="{ errors }">
          <input type="number" placeholder="enter verification code" v-model="pass.number" />
          <span style="color:red;font-size:small">{{ errors[0] }}</span>
        </div>
      </validation-provider>
      <button :disabled="invalid" @click="goToPassmsg()">Submit</button>
    </div>
  </ValidationObserver>
</template>
<script>
export default {
    data: ()=>{
    return{
    pass: {
        number: ""
    }
    }
  },
  computed: {
    validateForm() {
      return this.pass.number!="";
    
  }
  },
   methods:{
     goToPassmsg(){
        if(this.pass.number=="123456"){
      this.$router.push({
        name: "passmsg"
      });
    }else{
      alert("invalid code");
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