import { defineComponent } from 'vue';
import { useConfigProvider } from '@magic/hooks';

export default defineComponent({
    name: 'VApp',
    setup() {
        const { form } = useConfigProvider();
        console.log(form, 1111);

        return {
            form,
        };
    },
});
