import Main from "./ex14comp/maincomp.js";
import Library from "./ex14comp/librarycomp.js";
import Weather from "./ex14comp/weathercomp.js";

const routes = [
    {path: "/", component: Main},
    {path: "/library", component: Library},
    {path: "/weather", component: Weather},
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
});

const app = Vue.createApp({});
app.use(router);
app.mount("#app");