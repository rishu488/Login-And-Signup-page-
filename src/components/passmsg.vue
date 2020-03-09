<template>
  <ValidationObserver v-slot="{ invalid }">
    <div class="input-div">
      <h2>Enter new Password</h2>
      <validation-provider name="Password" rules="required">
        <div slot-scope="{ errors }">
          <input type="password" placeholder="enter new password" v-model="chan.password" />
          <span style="color:red;font-size:small">{{ errors[0] }}</span>
        </div>
      </validation-provider>
    </div>

    <div class="input-div2">
      <h2>confirm new Password</h2>
      <validation-provider name="Password" rules="required">
        <div slot-scope="{ errors }">
          <input type="password" placeholder="confirm new password" v-model="chan.Cpassword" />
          <span style="color:red;font-size:small">{{ errors[0] }}</span>
        </div>
      </validation-provider>
      <button :disabled="invalid" @click="goToNewpass()">Submit</button>
    </div>
  </ValidationObserver>
</template>

<script>
export default {
    data: ()=>{
    return{
    chan: {
        password: "",
        Cpassword:""
    }
    }
  },
  computed: {
    validateForm() {
      return this.chan.password !="" && this.chan.Cpassword !="";

    
  }
  },
   methods:{
     goToNewpass(){
        if(this.chan.password==this.chan.Cpassword){
      this.$router.push({
        name: "newpass"
      });
    }else{
      alert("both passwords are not same");
    }
    
     }
   }
}
</script>


<style scoped>
.input-div {
  width: 25%;
  margin:0 auto;
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
}

.input-div2 {
  width: 25%;
  margin : 0 auto;
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
}
</style>