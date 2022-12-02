import { commonRoutes } from '@/router/routes';
import type { RouteRecordRaw } from 'vue-router';

export const appRoutes: RouteRecordRaw[] = [];

export const rootRoutes: RouteRecordRaw[] = [
    ...commonRoutes,
    {
        name: 'root',
        path: '/',
        component: () => import('@/components/layout/index.vue'),
        children: appRoutes,
    },
];
