import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteConfig,Router} from 'angular2/router';
import {LandingComponent} from '../landing/landing.component';
import {HomeComponent} from '../home/home.component';
import {AuthService} from '../authentication/auth.service';
import {ModalComponent} from '../../utility/modal/modal.component';

@Component({
    selector: 'my-app',
    templateUrl: '../prod/components/app/app.html',
    styleUrls: ['../prod/components/app/app.css'], 
    directives: [ROUTER_DIRECTIVES],
    providers: [ModalComponent]
})
@RouteConfig([
	{ path:'/' ,name: 'Landing' ,component: LandingComponent ,useAsDefault: true },
	{ path:'/home/...' ,name: 'Home' ,component: HomeComponent }
])
export class AppComponent {

	constructor(private _router: Router, private _authService: AuthService) {
		this._router.subscribe(path => {
			if (!this._authService.isAuthorised()) {
				this._router.navigate(['/Landing']);
			}
	    });
	}

}
