import Vue from 'vue';
import Router from 'vue-router';
import routerConfig from './routerConfig';
import Login from './pages/Login/Login';
import Register from "./pages/Register/Register";
import UserDetail from "./pages/UserDetail/UserDetail"
import Home from "./pages/Home/home"

const routerMap = [];

const recursiveRouterConfig = (config = []) => {
    config.forEach((item) => {
        const route = {
            path: item.path,
            component: item.layout,
            children: [
                {
                    path: '',
                    component: item.component,
                },
            ],
        };

        if (Array.isArray(item.children)) {
            recursiveRouterConfig(item.children);
        }
        routerMap.push(route);
    });
    routerMap.push(
        { path: '/login', component: Login},
        { path: '/register', component: Register},
        { path: '/user/detail', component: UserDetail},
        { path: '/home', component: Home},
    );
    return routerMap;
};

const routes = recursiveRouterConfig(routerConfig);

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.path === '/login' || to.path === '/register') return next();
    const tokenStr = window.localStorage.getItem('token');
    console.log(tokenStr);
    if (!tokenStr) return next('/login');
    next();
});

export default router;


