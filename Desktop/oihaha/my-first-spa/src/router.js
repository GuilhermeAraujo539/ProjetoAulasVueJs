import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import LoopComponent from "./components/LoopComponent.vue";
import NavPage from "./components/NavPage.vue";
import ObjectComponent from "./components/ObjectComponent.vue";
import ContentPage from "./components/ContentPage.vue";
import FooterPage from "./components/FooterPage.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HelloWorld
    },
    {
        path: '/Loop',
        name: 'Loop',
        component: LoopComponent
    },
    {
        path: '/Content',
        name: 'Content',
        component: ContentPage
    },
    {
        path: '/Footer',
        name: 'footer',
        component: FooterPage
    },
    {
        path: '/Nav',
        name: 'Nav',
        component: NavPage
    },
    {
        path: '/Object',
        name: 'Object',
        component: ObjectComponent
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;