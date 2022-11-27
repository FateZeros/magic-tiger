/**
 * 默认参数
 */
const defaultSetting: Record<string, string> = {
    /* 系统标题 */
    APP_TITLE: '智慧虎',

    /* 系统副标题 */
    APP_SUB_TITLE: 'Smart Tiger',
};

/**
 * 异步获取系统配置项
 * @returns
 */
export function initSetting(setting = defaultSetting): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(window.commonSetting);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}
