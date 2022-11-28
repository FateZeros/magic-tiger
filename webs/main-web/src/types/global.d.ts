import type { ShallowReactive } from 'vue';
import type { CommonSetting } from '@/common/types';

declare global {
    interface Window {
        commonSetting: ShallowReactive<CommonSetting>;
    }
}
