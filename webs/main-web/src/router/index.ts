import type { App } from 'vue';
import type { Router } from 'vue-router';

export const setupRouter = async (app: App, router: Router) => {
    app.use(router);

    router.beforeEach(async (to, from, next) => {
        const appTitle = window.commonSetting?.APP_TITLE || '';
        const title = to.meta.title;
        window.document.title = `${title} - ${appTitle}`;

        next();
    });

    await router.isReady();
};
