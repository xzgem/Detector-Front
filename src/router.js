import Vue from 'vue';
import Router from 'vue-router';
import routerConfig from './routerConfig';
import Login from './pages/Login/Login'
import Register from "./pages/Register/Register";

/**
 * 将路由配置扁平化
 * @param {Array} config 路由配置
 * @return {Route}
 * @example
 * const routes = [
 *   {
 *     path: '/dashboard/analysis',
 *     component: HeaderAsideLayout,
 *     children: [
 *       {
 *         path: '',
 *         component: Dashboard,
 *       },
 *     ],
 *   },
 * ];
 */

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
        { path: '/register', component: Register}
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
    const tokenStr = window.sessionStorage.getItem('token');
    if (!tokenStr) return next('/login');
    next();
});

export default router;


