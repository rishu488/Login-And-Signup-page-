
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./components/Login.vue";
import dashboard from "./components/dashboard.vue";
import password from "./components/password.vue";
import verification from "./components/verification.vue";
import passmsg from "./components/passmsg.vue";
import newpass from "./components/newpass.vue";
Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes: [
        {
            path:"/",
                name: "login",
                component: Login
        },{
            path:"/home",
            name:"home",
            component:dashboard
        },{
        path:"/forgot",
        name:"pass",
        component:password
         },{
        path:"/verify",
        name:"verify",
        component:verification
        },{
            path:"/passmsg",
        name:"passmsg",
        component:passmsg
        },{
            path:"/newpass",
        name:"newpass",
        component:newpass
        }
    ]
})