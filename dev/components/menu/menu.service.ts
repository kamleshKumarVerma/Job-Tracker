import {Injectable} from 'angular2/core';

@Injectable()
export class MenuService {

	public menus: Array<any> = [{
        label: 'Dashboard',
        id: 'dashboard',
        href: ['Home/Dashboard'],
        icon: 'fa fa-home fa-2x',
        active: true
    },
    {
        label: 'Profile',
        id: 'profile',
        href: ['Home/Profile'],
        icon: 'fa fa-laptop fa-2x',
        active: false
    },
    {
        label: 'Favorite',
        id: 'favorite',
        href: ['Home/Profile'],
        icon: 'fa fa-map-marker fa-2x',
        active: false
    }];

	getMenus() {
		return this.menus;
	}

	setActive(menuId: string) {
        for (let menu of this.menus) {
            menu.active = menu.id === menuId;
        }
    }

}