import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteConfig} from 'angular2/router';
import {MenuComponent} from '../menu/menu.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ProfileComponent} from '../profile/profile.component';
import {AuthService} from '../authentication/auth.service';

@Component({
    templateUrl: '../prod/components/home/home.html',
    styleUrls: ['../prod/components/home/home.css'],
    directives: [ROUTER_DIRECTIVES,MenuComponent]
})
@RouteConfig([
	{ path:'/dashboard' ,name: 'Dashboard' ,component: DashboardComponent ,useAsDefault: true },
	{ path:'/profile' ,name: 'Profile' ,component: ProfileComponent }
])
export class HomeComponent {

	constructor(private _authService : AuthService) {}
	
}
