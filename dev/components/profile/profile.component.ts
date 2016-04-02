import {Component,OnInit,Input} from 'angular2/core';
import {ProfileService} from '../profile/profile.service';
import {ModalComponent} from '../../utility/modal/modal.component';
import {ControlGroup,FormBuilder,Validators} from 'angular2/common';

@Component({
    templateUrl: '../prod/components/profile/profile.html',
    styleUrls: ['../prod/components/profile/profile.css'],
    directives: [ModalComponent],
    providers: [ProfileService]
})
export class ProfileComponent implements OnInit {

	@Input() modalHeader: string;
    @Input() modalBody: string;

	public profileForm: ControlGroup;
	public userObject: any;

	constructor(private _profileService : ProfileService, private _formBuilder: FormBuilder, private _modalComponent: ModalComponent) {
	}

	ngOnInit(): any {
		this.profileForm = this._formBuilder.group({
          'first_name' : ['',Validators.required],
          'last_name' : ['',Validators.required],
          'email' : ['',Validators.required],
          'password' : ['',Validators.required],
          'location' : ['',Validators.required],
          'img_url' : ['']
     	});
     	this.userObject = JSON.parse(localStorage.getItem("userObject"));
     	this.userObject.img_url = '../assets/img/profile.jpg';
     	this.getProfile();
    }

    getProfile() {
      	this._profileService.getProfile(this.userObject.id).
        subscribe(
          data => {
          			this.userObject.img_url = (data.img_url===''||data.img_url===null?'../assets/img/profile.jpg':data.img_url);
          			this.profileForm = this._formBuilder.group({
			          'first_name' : [data.first_name,Validators.required],
			          'last_name' : [data.last_name,Validators.required],
			          'email' : [data.email,Validators.required],
			          'password' : [data.password,Validators.required],
			          'location' : [data.location,Validators.required],
			          'img_url' : [data.img_url]
			     	});
          		  },
          error => console.log(error),
          () => console.log("get call finished in get call")
        );
    }

    public updateProfile(profileObject) {
      this.modalHeader = "Profile say :- ";
      this.modalBody = "Successfully Updated !";
      this._profileService.updateProfile(this.userObject.id,JSON.stringify(profileObject)).
        subscribe(
          data => {
          			this.userObject.img_url = (data.img_url===''||data.img_url===null?'../assets/img/profile.jpg':data.img_url);
          			this._modalComponent.alert()
          		  },
          error => console.log(error),
          () => console.log("get call finished in get call")
        );
    }

}
