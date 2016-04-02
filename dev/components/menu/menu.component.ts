import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {MenuService} from '../menu/menu.service';
import {AuthService} from '../authentication/auth.service';

@Component({
    selector: 'home-menu',
    styleUrls: ['../prod/components/menu/menu.css'],
    templateUrl: '../prod/components/menu/menu.html',
    directives : [ROUTER_DIRECTIVES],
    providers: [MenuService]
})
export class MenuComponent implements OnInit{
	public menus: Array<any>;
	constructor(private _menuService : MenuService, private _authService: AuthService) {}

	ngOnInit(): any {
		this.menus = this._menuService.getMenus();
    }

    setActive(menuId: string) {
    	this._menuService.setActive(menuId);
    }

    userLogout() {
        this._authService.userLogout();
    }

}
