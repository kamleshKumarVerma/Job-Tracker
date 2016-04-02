System.register(['angular2/core', '../dashboard/dashboard.service', 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, dashboard_service_1, common_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dashboard_service_1_1) {
                dashboard_service_1 = dashboard_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_dashboardService, _formBuilder) {
                    this._dashboardService = _dashboardService;
                    this._formBuilder = _formBuilder;
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    this.jobNewsForm = this._formBuilder.group({
                        'news': ['', common_1.Validators.required]
                    });
                    this.getJobNews();
                    this.userObject = JSON.parse(localStorage.getItem("userObject"));
                };
                DashboardComponent.prototype.postJobNews = function (jobNewsObject) {
                    var _this = this;
                    jobNewsObject.user = this.userObject.id;
                    jobNewsObject.user_name = this.userObject.first_name + " " + this.userObject.last_name;
                    jobNewsObject.date = new Date();
                    this._dashboardService.postJobNews(JSON.stringify(jobNewsObject)).
                        subscribe(function (data) {
                        _this.jobNews.unshift(data);
                        _this.jobNewsForm = _this._formBuilder.group({
                            'news': ['', common_1.Validators.required]
                        });
                    }, function (error) { return console.log(error); }, function () { return console.log("get call finished in get call"); });
                };
                DashboardComponent.prototype.getJobNews = function () {
                    var _this = this;
                    this._dashboardService.getJobNews().
                        subscribe(function (data) { return _this.jobNews = data.reverse(); }, function (error) { return console.log(error); }, function () { return console.log("get call finished in get call"); });
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../prod/components/dashboard/dashboard.html',
                        styleUrls: ['../prod/components/dashboard/dashboard.css'],
                        providers: [dashboard_service_1.DashboardService]
                    }), 
                    __metadata('design:paramtypes', [dashboard_service_1.DashboardService, common_1.FormBuilder])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFNQyw0QkFBb0IsaUJBQW9DLEVBQVUsWUFBeUI7b0JBQXZFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQzNGLENBQUM7Z0JBRUQscUNBQVEsR0FBUjtvQkFDSyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO3dCQUN2QyxNQUFNLEVBQUcsQ0FBQyxFQUFFLEVBQUMsbUJBQVUsQ0FBQyxRQUFRLENBQUM7cUJBQ3BDLENBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ25FLENBQUM7Z0JBRUQsd0NBQVcsR0FBWCxVQUFZLGFBQWE7b0JBQXpCLGlCQWVDO29CQWRFLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7b0JBQ3hDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO29CQUN2RixhQUFhLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQzt3QkFDaEUsU0FBUyxDQUNQLFVBQUEsSUFBSTt3QkFDRCxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDM0IsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzs0QkFDM0MsTUFBTSxFQUFHLENBQUMsRUFBRSxFQUFDLG1CQUFVLENBQUMsUUFBUSxDQUFDO3lCQUNwQyxDQUFDLENBQUM7b0JBQ0UsQ0FBQyxFQUNMLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsRUFDM0IsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsRUFBNUMsQ0FBNEMsQ0FDbkQsQ0FBQztnQkFDTixDQUFDO2dCQUVELHVDQUFVLEdBQVY7b0JBQUEsaUJBT0M7b0JBTkUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRTt3QkFDbEMsU0FBUyxDQUNQLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQTdCLENBQTZCLEVBQ3JDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsRUFDM0IsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsRUFBNUMsQ0FBNEMsQ0FDbkQsQ0FBQztnQkFDTixDQUFDO2dCQTlDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFdBQVcsRUFBRSw2Q0FBNkM7d0JBQzFELFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxDQUFDO3dCQUN6RCxTQUFTLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztxQkFDaEMsQ0FBQzs7c0NBQUE7Z0JBNENGLHlCQUFDO1lBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtZQTNDRCxtREEyQ0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsT25Jbml0LElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7RGFzaGJvYXJkU2VydmljZX0gZnJvbSAnLi4vZGFzaGJvYXJkL2Rhc2hib2FyZC5zZXJ2aWNlJztcbmltcG9ydCB7Q29udHJvbEdyb3VwLEZvcm1CdWlsZGVyLFZhbGlkYXRvcnN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi4vcHJvZC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4uL3Byb2QvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNzcyddLFxuICAgIHByb3ZpZGVyczogW0Rhc2hib2FyZFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgam9iTmV3c0Zvcm06IENvbnRyb2xHcm91cDtcbiAgICBwdWJsaWMgam9iTmV3czogQXJyYXk8YW55PjtcbiAgICBwdWJsaWMgdXNlck9iamVjdDogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2Rhc2hib2FyZFNlcnZpY2UgOiBEYXNoYm9hcmRTZXJ2aWNlLCBwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcblx0fVxuXG5cdG5nT25Jbml0KCk6IGFueSB7XG4gICAgIFx0dGhpcy5qb2JOZXdzRm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAnbmV3cycgOiBbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgXHR9KTtcbiAgICAgXHR0aGlzLmdldEpvYk5ld3MoKTtcbiAgICAgXHR0aGlzLnVzZXJPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlck9iamVjdFwiKSk7XG4gICAgfVxuXG4gICAgcG9zdEpvYk5ld3Moam9iTmV3c09iamVjdCkge1xuICAgICAgXHRqb2JOZXdzT2JqZWN0LnVzZXIgPSB0aGlzLnVzZXJPYmplY3QuaWQ7XG4gICAgICBcdGpvYk5ld3NPYmplY3QudXNlcl9uYW1lID0gdGhpcy51c2VyT2JqZWN0LmZpcnN0X25hbWUgKyBcIiBcIiArIHRoaXMudXNlck9iamVjdC5sYXN0X25hbWU7XG4gICAgICBcdGpvYk5ld3NPYmplY3QuZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBcdHRoaXMuX2Rhc2hib2FyZFNlcnZpY2UucG9zdEpvYk5ld3MoSlNPTi5zdHJpbmdpZnkoam9iTmV3c09iamVjdCkpLlxuICAgICAgICBzdWJzY3JpYmUoXG4gICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgXHRcdFx0dGhpcy5qb2JOZXdzLnVuc2hpZnQoZGF0YSk7XG4gICAgICAgICAgXHRcdFx0dGhpcy5qb2JOZXdzRm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcblx0XHRcdCAgICAgICAgICAnbmV3cycgOiBbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF1cblx0XHRcdCAgICAgXHR9KTtcbiAgICAgICAgICBcdFx0ICB9LFxuICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcbiAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImdldCBjYWxsIGZpbmlzaGVkIGluIGdldCBjYWxsXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0Sm9iTmV3cygpIHtcbiAgICAgIFx0dGhpcy5fZGFzaGJvYXJkU2VydmljZS5nZXRKb2JOZXdzKCkuXG4gICAgICAgIHN1YnNjcmliZShcbiAgICAgICAgICBkYXRhID0+IHRoaXMuam9iTmV3cyA9IGRhdGEucmV2ZXJzZSgpLFxuICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcbiAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImdldCBjYWxsIGZpbmlzaGVkIGluIGdldCBjYWxsXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
