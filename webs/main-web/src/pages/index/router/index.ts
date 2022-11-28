import { createRouter, createWebHashHistory, type Router } from 'vue-router';
import { rootRoutes, appRoutes } from './routes';

const router: Router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: rootRoutes,
});

export { rootRoutes, appRoutes, router };
