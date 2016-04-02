import {Injectable} from 'angular2/core';
import {CONSTANT} from '../../utility/constant';
import {Http,Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

	constructor(private _http: Http) {
	 
	}

	getHeader() {
	    var headers = new Headers();
	    headers.append("Content-Type","application/json");
	    return headers;
	}

	isAuthorised() {
		let myStoredUser = localStorage.getItem("userObject");
		return ( (myStoredUser === null ) ? false : true);
	}

	userSignup(userObject: any) {
		return this._http.post(CONSTANT.BASE_URL+'users',userObject,{headers: this.getHeader()}).map(res=>res.json());
	}

	userLogin(userObject) {
		return this._http.get(CONSTANT.BASE_URL+'users',{headers: this.getHeader()}).map( res=> res.json() );
	}

	userSubscribe(subscribeObject) {
		return this._http.post(CONSTANT.BASE_URL+'subscribes',subscribeObject,{headers: this.getHeader()}).map(res=>res.json());
	}

	userLogout() {
		localStorage.removeItem("userObject");
	}

}