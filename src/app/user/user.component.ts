import { Component, Output, EventEmitter, Input, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-user',
    template: `<p>cipchk</p>`
})
export class UserComponent implements OnDestroy {

    private _user_id: number = 0;

    /**
     * 用户编号 
     */
    @Input() 
    set user_id(id: number) {
        this._user_id = id;
    }
    get user_id(): number {
        return this._user_id;
    }
    
    /** 登出时触发 */
    @Output() logout = new EventEmitter();

    constructor() {}
    
    ngOnInit() {}
    
    ngOnDestroy(): void {
    }
}
