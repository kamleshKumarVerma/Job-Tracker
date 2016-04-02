import {Injectable} from 'angular2/core';
import {CONSTANT} from '../../utility/constant';
import {Http} from 'angular2/http';
import {Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {
	
	constructor(private _http : Http) {}

	getHeader() {
	    var headers = new Headers();
	    headers.append("Content-Type","application/json");
	    return headers;
	}

	postJobNews(jobNewsObject: any) {
		return this._http.post(CONSTANT.BASE_URL+'job_newses',jobNewsObject,{headers: this.getHeader()}).map(res=>res.json());
	}

	getJobNews() {
		return this._http.get(CONSTANT.BASE_URL+'job_newses',{headers: this.getHeader()}).map(res=>res.json());
	}

}