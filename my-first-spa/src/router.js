import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./pages/LoginPage.vue";

const routes = [

    {
        path: '/',
        name: 'HomePage',
        component: LoginPage
    },

    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;