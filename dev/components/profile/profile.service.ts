import {Injectable} from 'angular2/core';
import {CONSTANT} from '../../utility/constant';
import {Http} from 'angular2/http';
import {Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
	
	constructor(private _http : Http) {}

	getHeader() {
	    var headers = new Headers();
	    headers.append("Content-Type","application/json");
	    return headers;
	}

	getProfile(user_id: string) {
		return this._http.get(CONSTANT.BASE_URL+'users/'+user_id,{headers: this.getHeader()}).map(res=>res.json());
	}

	updateProfile(user_id: string, profileObject: any) {
		return this._http.put(CONSTANT.BASE_URL+'users/'+user_id,profileObject,{headers: this.getHeader()}).map(res=>res.json());
	}

}