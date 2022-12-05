import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

const srcPath = path.resolve(__dirname, './src');
const distPath = path.resolve(__dirname, './dist');
const typesPath = path.resolve(distPath, './types');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        dts({
            outputDir: typesPath,
            compilerOptions: {
                baseUrl: srcPath,
                declaration: true,
                emitDeclarationOnly: true,
                noImplicitAny: true,
            },
            exclude: ['src/types', 'types/**/*.d.ts'],
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: '@magic/hooks',
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'vue',
                },
            },
        },
    },
});
