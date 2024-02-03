import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/", name: 'root', redirect: "/login"
        },
        {
            path: "/login", name: 'login', component:()=>import('./pages/login.vue')
        },
        {
            path: "/register", name: 'register', component:()=>import('./pages/register.vue')
        },
        {
            path: "/set-2fa", name: 'set-2fa', component:()=>import('./pages/set_2fa.vue')
        },
        {
            path: "/verify-2fa", name: 'verify-2fa', component:()=>import('./pages/verify_2fa.vue')
        },

    ]
})

export default router