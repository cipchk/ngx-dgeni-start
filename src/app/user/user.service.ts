import { Injectable } from "@angular/core";

/**
 * 用户登录信息
 */
@Injectable()
export class UserService {
    /**
     * 名称
     * 
     * @type {string}
     */
    name?: string;

    private authList: number[] = [];

    /**
     * 检查是否有权限
     * 
     * @param {number} no 权限代码
     * @returns {boolean}
     */
    isAuth(no: number): boolean {
        return this.authList.includes(no);
    }
}
