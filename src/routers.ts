import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'
import Links from './views/Links.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'Home',
        component: Home,
    }, {
        path: '/links',
        name: 'Links',
        component: Links,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;