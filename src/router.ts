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

    ]
})

export default router