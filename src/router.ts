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
            path: "/setup-2fa", name: 'setup-2fa', component:()=>import('./pages/setup_2fa.vue')
        },
        {
            path: "/verify-2fa", name: 'verify-2fa', component:()=>import('./pages/verify_2fa.vue')
        },
        {
            path: "/dashboard", name: 'dashboard', component:()=>import('./pages/dashboard.vue')
        },

    ]
})

export default router