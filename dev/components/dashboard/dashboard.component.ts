import {Component,OnInit,Input} from 'angular2/core';
import {DashboardService} from '../dashboard/dashboard.service';
import {ControlGroup,FormBuilder,Validators} from 'angular2/common';

@Component({
    templateUrl: '../prod/components/dashboard/dashboard.html',
    styleUrls: ['../prod/components/dashboard/dashboard.css'],
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit {

    public jobNewsForm: ControlGroup;
    public jobNews: Array<any>;
    public userObject: any;

	constructor(private _dashboardService : DashboardService, private _formBuilder: FormBuilder) {
	}

	ngOnInit(): any {
     	this.jobNewsForm = this._formBuilder.group({
          'news' : ['',Validators.required]
     	});
     	this.getJobNews();
     	this.userObject = JSON.parse(localStorage.getItem("userObject"));
    }

    postJobNews(jobNewsObject) {
      	jobNewsObject.user = this.userObject.id;
      	jobNewsObject.user_name = this.userObject.first_name + " " + this.userObject.last_name;
      	jobNewsObject.date = new Date();
      	this._dashboardService.postJobNews(JSON.stringify(jobNewsObject)).
        subscribe(
          data => {
          			this.jobNews.unshift(data);
          			this.jobNewsForm = this._formBuilder.group({
			          'news' : ['',Validators.required]
			     	});
          		  },
          error => console.log(error),
          () => console.log("get call finished in get call")
        );
    }

    getJobNews() {
      	this._dashboardService.getJobNews().
        subscribe(
          data => this.jobNews = data.reverse(),
          error => console.log(error),
          () => console.log("get call finished in get call")
        );
    }

}
