export default function useConfigProvider() {
    /**
     * 表单配置
     */
    const form = {
        labelAlign: 'left',
        validateMessages: {
            required: 'label不能为空',
        },
    };

    return {
        form,
    };
}
