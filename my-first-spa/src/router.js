import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutUsPage from "./pages/AboutUsPage.vue";
import CartPage from "./pages/CartPage.vue";
import ProfilePage from "./pages/ProfilePage.vue";

const routes = [

    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/sobreNos',
        name: 'AboutUsPage',
        component: AboutUsPage
    },
    {
        path: '/carrinho',
        name: 'CartPage',
        component: CartPage
    },
    {
        path: '/perfil',
        name: 'ProfilePage',
        component: ProfilePage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;