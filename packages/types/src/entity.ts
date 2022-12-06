/**
 * 通用实体
 * @public
 */
export interface Entity {
    uid: string;
    id: number;
    name: string;
    createTime: string;
    deleteTime: string;
    updateTime: string;
    displayOrder?: number;
    validFlag?: number;
}
