import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./pages/LoginPage.vue";
import AboutUs from "./pages/AboutUs.vue";
import HomePage from "./pages/HomePage.vue";
import ContactPage from "./pages/ContactPage.vue";

const routes = [

    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },

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
    {
        path: '/contact',
        name: 'ContactPage',
        component: ContactPage
    },



];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;