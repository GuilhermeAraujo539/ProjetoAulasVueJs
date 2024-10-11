import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./pages/LoginPage.vue";
import AboutUs from "./pages/AboutUs.vue";

const routes = [

    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/aboutUS',
        name: 'AbouUS',
        component: AboutUs
    },



];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;