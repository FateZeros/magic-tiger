import { defineComponent, onMounted, ref } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { allPagesRoutes } from '@/pages/all-pages-routes';

export default defineComponent({
    name: 'CLayout',
    components: {},
    setup() {
        const routes = ref<RouteRecordRaw[]>([]);

        onMounted(() => {
            const res = window.location.pathname.match(/(\w*)\.html$/);
            const page = res?.[1] || 'index';
            console.log(page, 1111);
            routes.value = allPagesRoutes.get(page) || [];
        });

        return {};
    },
});
