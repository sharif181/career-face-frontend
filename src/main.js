import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import main from './assets/css/main.css'

Vue.config.productionTip = false


// initialize services
import ApiService from './services/api.service.js'
import * as JwtService from "./services/jwt.service.js";

window.ApiService = ApiService


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        if (!JwtService.getToken()) {
            next({
                name: 'login',
                params: {nextUrl: to.fullPath}
            })
        } else {
            ApiService.get('account/profile/').then(response => {
                store.commit("auth/GETUSER", response.data);
                next()
            }).catch(error => {
                JwtService.destroyToken();
                next({name: 'login'})
            })
            // next();
        }
    }

    if (to.name === 'login') {
        if (JwtService.getToken()) {
            next({name: 'adminDashboard'});
        }
    }
    next();
    Vue.nextTick(() => {
        document.title = `${to.meta.title}`
    })
});

ApiService.init();

//sweetalert2
import Swal from 'sweetalert2'

window.Swal = require('sweetalert2');
//Toast
window.Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
