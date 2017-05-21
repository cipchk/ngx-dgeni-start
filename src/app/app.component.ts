import { Component } from '@angular/core';

/**
 * 根组件
 * # 如何使用呢？
 * + 首先
 * + 其次
 *      + 子其次1
 *      + 子其次2
 * ```html
 *  <app-root><app-root>
 * ```
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    /**
     * 标题
     * 
     * @type {string}
     */
    title = 'app works!';
}
