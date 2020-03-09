+<template>
  <article>
    <!-- <Dashboard/> -->
    <!-- <n-navbar @data="data($event)"/> -->
    <div class="container" style="margin:0 auto" :class="{'sign-up-active' : signUp}">
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-left">
            <h2>Welcome Back!</h2>
            <p>Please login with your personal info</p>
            <button class="invert" id="signIn" @click="signUp = !signUp">LogIn</button>
          </div>
          <div class="overlay-right">
            <h3>Hello</h3>
            <p>Please signUp</p>
            <button class="invert" id="signUp" @click="signUp = !signUp">SignUp</button>
          </div>
        </div>
      </div>
      <ValidationObserver v-slot="{invalid}">
        <form class="sign-up" action="#">
          <h2>Create login</h2>
          <div>Use your email for registration</div>
          <validation-provider name="Name" rules="required">
            <div slot-scope="{ errors }">
              <input placeholder="Name" v-model="cust.name" type="text" />
              <span style="color:red;font-size:small;">{{ errors[0] }}</span>
            </div>
          </validation-provider>
          <validation-provider name="Email" rules="required">
            <div slot-scope="{ errors }">
              <input type="email" placeholder="Email" v-model="cust.email" />
              <span style="color:red;font-size:small">{{ errors[0] }}</span>
            </div>
          </validation-provider>
          <validation-provider name="Password" rules="required">
            <div slot-scope="{ errors }">
              <input type="password" placeholder="Password" v-model="cust.password" />
              <span style="color:red;font-size:small">{{ errors[0] }}</span>
            </div>
          </validation-provider>
          <button :disabled="invalid" @click="goToHome()">Sign Up</button>
        </form>
      </ValidationObserver>
      <ValidationObserver v-slot="{ invalid }">
        <form class="sign-in" action="#">
          <h3>Sign In</h3>
          <div>Use your account</div>
          <validation-provider name="Email" rules="required">
            <div slot-scope="{ errors }">
              <input type="email" placeholder="Email" v-model="user.email" />
              <span style="color:red;font-size:small">{{ errors[0] }}</span>
            </div>
          </validation-provider>
          <validation-provider name="Password" rules="required">
            <div slot-scope="{ errors }">
              <input type="password" placeholder="Password" v-model="user.password" />
              <span style="color:red;font-size:small">{{ errors[0] }}</span>
            </div>
          </validation-provider>
          <a class="forget-password-label" href="/forgot">Forgot your password?</a>
          <button :disabled="invalid" @click="goToDashboard()">Sign In</button>
        </form>
      </ValidationObserver>
    </div>
  </article>
</template>

<script>
// import Dashboard from './dashboard';
// import navbar from '../widgets/navbar';
export default {
  components: {
    // "n-navbar":navbar
  },
  data: () => {
    return {
      signUp: false,
      user: {
        email: "",
        password: ""
      },
      cust: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  computed: {
    validateForm() {
      return this.user.email != "" && this.user.password != "";
    }
  },
  comp: {
    validateForm() {
      return (
        this.cust.name != "" &&
        this.cust.email != "" &&
        this.cust.password != ""
      );
    }
  },
  methods: {

      
    
    goToDashboard() {
      if(this.user.email=="rishabh@gmail.com"){
      this.$router.push({
        name: "home"
      });
    }else{
      alert("invalid email");
    }
    },
    goToHome(){
      if(this.cust.email=="rishabh@gmail.com"){
      this.$router.push({
        name: "home"
      });
    }else{
      alert("invalid email");
    }
    },
    goToPassword(){
      console.log('888')
      this.$router.push({
        name: "pass"
      });
    }
    
    
    

    
   
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 768px;
  height: 480px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #efefef, #ccc);

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    z-index: 100;
  }

  .overlay {
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    // animation-name: example;
    // animation-duration: 5s;
    background: linear-gradient(to bottom right, rgb(197, 122, 23), #dabc3b);
    color: rgb(243, 217, 217);
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
  }
  

  @mixin overlays($property) {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 70px 40px;
    width: calc(50% - 80px);
    height: calc(100% - 140px);
    text-align: center;
    transform: translateX($property);
    transition: transform 0.5s ease-in-out;
  }

  .overlay-left {
    @include overlays(-20%);
  }

  .overlay-right {
    @include overlays(0);
    right: 0;
  }
}

h2,h3 {
  margin: 0;
  color:green;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
}

p {
  margin: 20px 0 30px;
  font-size: 22px;
  font-family: Arial, Helvetica, sans-serif;

}

a {
  color: #222;
  text-decoration: none;
  margin: 15px 0;
  font-size: .9rem;
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
  transition: transform 0.1s ease-in;

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
  }
}

button.invert {
  background-color: transparent;
  border-color: #fff;
}

form {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 90px 60px;
  width: calc(50% - 120px);
  height: calc(100% - 180px);
  text-align: center;
  background: linear-gradient(to bottom, #efefef, #ccc);
  transition: all 0.5s ease-in-out;

  div {
    font-size: 14px;
  }

  .forget-password-label:hover {
    text-decoration: underline #c7c1c1;
    color: red;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 8px 15px;
    margin: 6px 0;
    width: calc(100% - 30px);
    border-radius: 15px;
    border-bottom: 1px solid #ddd;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff,
      0 1px 0 #fff;
    overflow: hidden;

    &:focus {
      outline: none;
      background-color: #fff;
    }
  }
}

.sign-in {
  left: 0;
  z-index: 2;
}

.sign-up {
  left: 0;
  z-index: 1;
  opacity: 0;
}

.sign-up-active {
  .sign-in {
    transform: translateX(100%);
  }

  .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.5s;
  }

  .overlay-container {
    transform: translateX(-100%);
  }

  .overlay {
    transform: translateX(50%);
  }

  .overlay-left {
    transform: translateX(0);
  }

  .overlay-right {
    transform: translateX(20%);
  }
}

@keyframes show {
  0% {
    opacity: 0;
    z-index: 1;
  }
  49% {
    opacity: 0;
    z-index: 1;
  }
  50% {
    opacity: 1;
    z-index: 10;
  }
}
button:disabled {
  color: #33d67f;
}
</style>
