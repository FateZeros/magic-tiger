import { defineConfig, type Alias, type PluginOption, type UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import compression from 'vite-plugin-compression';
import zip from 'vite-plugin-zip-pack';

// 打包产物目录
const outDir = 'main-web';

const server = {
    host: '0.0.0.0',
    port: 7200,
    open: true,
    proxy: {
        '/api': {
            target: 'http://localhost:8002',
            changeOrigin: true,
            rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
    },
};

const plugins: PluginOption[] = [vue({ reactivityTransform: true })];

// https://vitejs.dev/config/
export default defineConfig(({ mode }): UserConfig => {
    const alias: Alias[] = [
        {
            find: '@',
            replacement: path.resolve(__dirname, './src'),
        },
    ];

    if (mode === 'production') {
        // 压缩
        plugins.push(
            compression({
                threshold: 1024,
                algorithm: 'gzip',
                ext: '.gz',
                filter: /.*\/assets\/.*/,
            }),
        );

        // zip
        plugins.push(
            zip({
                inDir: `dist/${outDir}`,
                outDir: 'dist',
                outFileName: `${outDir}.zip`,
            }),
        );
    }

    return {
        root: 'src/',
        base: './',
        publicDir: path.resolve(__dirname, './public'),
        server,
        plugins,
        resolve: {
            alias,
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import './src/assets/styles/common/mixin.scss';`,
                },
            },
        },
        build: {
            emptyOutDir: true,
            minify: 'terser',
            outDir: path.resolve(__dirname, `./dist/${outDir}`),
            rollupOptions: {
                input: {
                    index: path.resolve(__dirname, './src/index.html'),
                },
            },
        },
    };
});
