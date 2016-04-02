import {Component,OnInit,Input} from 'angular2/core';
import {Router} from 'angular2/router';
import {ModalComponent} from '../../utility/modal/modal.component';
import {AuthService} from '../authentication/auth.service';
import {AuthHelper} from '../authentication/auth.helper';
import {ControlGroup,FormBuilder,Validators} from 'angular2/common';

@Component({
    templateUrl: '../prod/components/landing/landing.html',
    styleUrls: ['../prod/components/landing/landing.css'],
    directives: [ModalComponent],
    providers: [AuthHelper]
})
export class LandingComponent implements OnInit {

    @Input() modalHeader: string;
    @Input() modalBody: string;

    public loginForm : ControlGroup;
    public signupForm : ControlGroup;
    public subscribeForm : ControlGroup;

	  constructor(private _router : Router, private _authService : AuthService, private _formBuilder: FormBuilder, private _authHelper: AuthHelper, private _modalComponent: ModalComponent) {}

    ngOnInit(): any {
      this.loginForm = this._formBuilder.group({
          'email' : ['',Validators.required],
          'password' : ['',Validators.required]
      });
      this.signupForm = this._formBuilder.group({
          'first_name' : ['',Validators.required],
          'last_name' : ['',Validators.required],
          'email' : ['',Validators.required],
          'password' : ['',Validators.required],
          'location' : ['',Validators.required]
      });
      this.subscribeForm = this._formBuilder.group({
          'email' : ['',Validators.required]
      });
    }

    public userSignup(userObject) {
      this.modalHeader = "Signup say :- ";
      this.modalBody = "Successfully Registered !";
      this._authService.userSignup(JSON.stringify(userObject)).
        subscribe(
          data => this._modalComponent.alert(),
          error => console.log(error),
          () => console.log("get call finished in get call")
        );
    }

    public userLogin(userObject) {
      this._authService.userLogin(userObject).
        subscribe(
          data => this.redirectToHome(data,userObject),
          error => console.log(error),
          () => console.log("get call finished in get call")
        );
    }

    public redirectToHome(resData,userObject) {
      this.modalHeader = "Login say :- ";
      this.modalBody = "User or Password is invalid !!!! ";
      if(this._authHelper.findUser(resData,userObject)) {
        console.log("This is the user object --> " + JSON.stringify(resData));
        localStorage.setItem("userObject", JSON.stringify(userObject));
        this._router.navigate(['Home/Dashboard']);
      }else {
        this._modalComponent.alert();
      }
    }

    public userSubscribe(subscribeObject) {
      this.modalHeader = "Subscribe say :- ";
      this.modalBody = "Successfully Subscribed !";
      this._authService.userSubscribe(JSON.stringify(subscribeObject)).
        subscribe(
          data => this._modalComponent.alert(),
          error => console.log(error),
          () => console.log("get call finished in get call")
        );
    }

}
