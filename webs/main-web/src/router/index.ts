import type { App } from 'vue';
import type { Router } from 'vue-router';

export const setupRouter = async (app: App, router: Router) => {
    app.use(router);

    router.beforeEach(async (to, from, next) => {
        next();
    });

    await router.isReady();
};
