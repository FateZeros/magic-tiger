import { createApp } from 'vue';
import type { Router } from 'vue-router';
import App from '@/views/app/index.vue';

const app = createApp(App);

export const setupApp = async (router: Router, setting?: Record<string, string>) => {
    await initSetting(setting);

    // setupRouter 必须放在最后，因为路由守卫需要使用某些全局方法
    await setupRouter(app, router);

    app.mount('#app');
};
