import type { RouteRecordRaw } from 'vue-router';
import { appRoutes as indexAppRoutes } from '@/pages/index/router/routes';
// import { appRoutes as thirdAppRoutes } from '@/pages/third/router/routes';

const allPagesRoutes = new Map<string, RouteRecordRaw[]>();
allPagesRoutes.set('index', indexAppRoutes);
// allPagesRoutes.set('third', thirdAppRoutes);

export { allPagesRoutes };
