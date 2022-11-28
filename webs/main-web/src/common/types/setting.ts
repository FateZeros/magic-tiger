/**
 * 开发环境系统配置
 */
export interface DevCommonSetting {
    /**
     * 后端服务地址，支持绝对和相对路径
     */
    serverUrl: string;
    /**
     * 前端资源地址
     */
    assetUrl: string;
}

/**
 * 系统配置
 */
export interface CommonSetting extends DevCommonSetting {
    /**
     * 系统主标题
     */
    APP_TITLE?: string;
    /**
     * 系统副标题
     */
    APP_SUB_TITLE?: string;
    /**
     * 系统 Token 认证类型
     */
    APP_TOKEN_CAS_TYPE?: string;
}
