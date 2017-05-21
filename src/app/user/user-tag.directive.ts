import { Directive, Output, EventEmitter, Input } from "@angular/core";

/**
 * 用户Tag标签
 * 使用方式：
 * ```
 *  <!-- 普通会员 -->
 *  <span [user-tag]="1"></span>
 * ```
 */
@Directive({
    selector: '[user-tag]'
})
export class UserTagDirective {
    /**
     * 用户等级
     * 
     * @type {number}
     */
    @Input('user-tag') level: number = 1;
}
