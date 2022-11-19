import { createApp } from 'vue';
import App from '@/views/app/index.vue';

const app = createApp(App);

export const setupApp = () => {
    app.mount('#app');
};
