import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const server = {
    host: '0.0.0.0',
    port: 7200,
    open: true,
    proxy: {},
};

// https://vitejs.dev/config/
export default defineConfig({
    server,
    plugins: [vue({ reactivityTransform: true })],
});
