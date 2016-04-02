import {Injectable} from 'angular2/core';

@Injectable()
export class AuthHelper {

	public findUser(resData,userObject) {
      let flag = false;
      for(let i = 0 ; i < resData.length ; i++) {
      	if ( resData[i].email === userObject.email && resData[i].password === userObject.password ) {
      		flag = true;
      		userObject.id = resData[i].id;
          userObject.first_name = resData[i].first_name;
          userObject.last_name = resData[i].last_name;
      	}
        if(flag)
          break;
      }
      return flag;
    }


}
