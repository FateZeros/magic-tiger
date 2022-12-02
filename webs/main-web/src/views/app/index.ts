import { defineComponent } from 'vue';
import { useConfigProvider } from '@magic/hooks';

export default defineComponent({
    name: 'VApp',
    setup() {
        const { form } = useConfigProvider();

        return {
            form,
        };
    },
});
