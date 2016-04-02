System.register(['angular2/core', '../profile/profile.service', '../../utility/modal/modal.component', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, profile_service_1, modal_component_1, common_1;
    var ProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            },
            function (modal_component_1_1) {
                modal_component_1 = modal_component_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent(_profileService, _formBuilder, _modalComponent) {
                    this._profileService = _profileService;
                    this._formBuilder = _formBuilder;
                    this._modalComponent = _modalComponent;
                }
                ProfileComponent.prototype.ngOnInit = function () {
                    this.profileForm = this._formBuilder.group({
                        'first_name': ['', common_1.Validators.required],
                        'last_name': ['', common_1.Validators.required],
                        'email': ['', common_1.Validators.required],
                        'password': ['', common_1.Validators.required],
                        'location': ['', common_1.Validators.required],
                        'img_url': ['']
                    });
                    this.userObject = JSON.parse(localStorage.getItem("userObject"));
                    this.userObject.img_url = '../assets/img/profile.jpg';
                    this.getProfile();
                };
                ProfileComponent.prototype.getProfile = function () {
                    var _this = this;
                    this._profileService.getProfile(this.userObject.id).
                        subscribe(function (data) {
                        _this.userObject.img_url = (data.img_url === '' || data.img_url === null ? '../assets/img/profile.jpg' : data.img_url);
                        _this.profileForm = _this._formBuilder.group({
                            'first_name': [data.first_name, common_1.Validators.required],
                            'last_name': [data.last_name, common_1.Validators.required],
                            'email': [data.email, common_1.Validators.required],
                            'password': [data.password, common_1.Validators.required],
                            'location': [data.location, common_1.Validators.required],
                            'img_url': [data.img_url]
                        });
                    }, function (error) { return console.log(error); }, function () { return console.log("get call finished in get call"); });
                };
                ProfileComponent.prototype.updateProfile = function (profileObject) {
                    var _this = this;
                    this.modalHeader = "Profile say :- ";
                    this.modalBody = "Successfully Updated !";
                    this._profileService.updateProfile(this.userObject.id, JSON.stringify(profileObject)).
                        subscribe(function (data) {
                        _this.userObject.img_url = (data.img_url === '' || data.img_url === null ? '../assets/img/profile.jpg' : data.img_url);
                        _this._modalComponent.alert();
                    }, function (error) { return console.log(error); }, function () { return console.log("get call finished in get call"); });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ProfileComponent.prototype, "modalHeader", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ProfileComponent.prototype, "modalBody", void 0);
                ProfileComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../prod/components/profile/profile.html',
                        styleUrls: ['../prod/components/profile/profile.css'],
                        directives: [modal_component_1.ModalComponent],
                        providers: [profile_service_1.ProfileService]
                    }), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService, common_1.FormBuilder, modal_component_1.ModalComponent])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQVFDLDBCQUFvQixlQUFnQyxFQUFVLFlBQXlCLEVBQVUsZUFBK0I7b0JBQTVHLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7Z0JBQ2hJLENBQUM7Z0JBRUQsbUNBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO3dCQUNuQyxZQUFZLEVBQUcsQ0FBQyxFQUFFLEVBQUMsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3ZDLFdBQVcsRUFBRyxDQUFDLEVBQUUsRUFBQyxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDdEMsT0FBTyxFQUFHLENBQUMsRUFBRSxFQUFDLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNsQyxVQUFVLEVBQUcsQ0FBQyxFQUFFLEVBQUMsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3JDLFVBQVUsRUFBRyxDQUFDLEVBQUUsRUFBQyxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDckMsU0FBUyxFQUFHLENBQUMsRUFBRSxDQUFDO3FCQUNuQixDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFDakUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsMkJBQTJCLENBQUM7b0JBQ3RELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQztnQkFFRCxxQ0FBVSxHQUFWO29CQUFBLGlCQWlCQztvQkFoQkUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7d0JBQ2xELFNBQVMsQ0FDUCxVQUFBLElBQUk7d0JBQ0QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFHLEVBQUUsSUFBRSxJQUFJLENBQUMsT0FBTyxLQUFHLElBQUksR0FBQywyQkFBMkIsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQzVHLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7NEJBQzNDLFlBQVksRUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsbUJBQVUsQ0FBQyxRQUFRLENBQUM7NEJBQ3BELFdBQVcsRUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsbUJBQVUsQ0FBQyxRQUFRLENBQUM7NEJBQ2xELE9BQU8sRUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsbUJBQVUsQ0FBQyxRQUFRLENBQUM7NEJBQzFDLFVBQVUsRUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsbUJBQVUsQ0FBQyxRQUFRLENBQUM7NEJBQ2hELFVBQVUsRUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsbUJBQVUsQ0FBQyxRQUFRLENBQUM7NEJBQ2hELFNBQVMsRUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7eUJBQzdCLENBQUMsQ0FBQztvQkFDRSxDQUFDLEVBQ0wsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixFQUMzQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxFQUE1QyxDQUE0QyxDQUNuRCxDQUFDO2dCQUNOLENBQUM7Z0JBRU0sd0NBQWEsR0FBcEIsVUFBcUIsYUFBYTtvQkFBbEMsaUJBWUM7b0JBWEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQztvQkFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyx3QkFBd0IsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQzt3QkFDbEYsU0FBUyxDQUNQLFVBQUEsSUFBSTt3QkFDRCxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUcsRUFBRSxJQUFFLElBQUksQ0FBQyxPQUFPLEtBQUcsSUFBSSxHQUFDLDJCQUEyQixHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDNUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtvQkFDM0IsQ0FBQyxFQUNMLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsRUFDM0IsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsRUFBNUMsQ0FBNEMsQ0FDbkQsQ0FBQztnQkFDTixDQUFDO2dCQXRESjtvQkFBQyxZQUFLLEVBQUU7O3FFQUFBO2dCQUNMO29CQUFDLFlBQUssRUFBRTs7bUVBQUE7Z0JBVFo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxXQUFXLEVBQUUseUNBQXlDO3dCQUN0RCxTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQzt3QkFDckQsVUFBVSxFQUFFLENBQUMsZ0NBQWMsQ0FBQzt3QkFDNUIsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztxQkFDOUIsQ0FBQzs7b0NBQUE7Z0JBMkRGLHVCQUFDO1lBQUQsQ0ExREEsQUEwREMsSUFBQTtZQTFERCwrQ0EwREMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkluaXQsSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQcm9maWxlU2VydmljZX0gZnJvbSAnLi4vcHJvZmlsZS9wcm9maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHtNb2RhbENvbXBvbmVudH0gZnJvbSAnLi4vLi4vdXRpbGl0eS9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb250cm9sR3JvdXAsRm9ybUJ1aWxkZXIsVmFsaWRhdG9yc30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6ICcuLi9wcm9kL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuLi9wcm9kL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNzcyddLFxuICAgIGRpcmVjdGl2ZXM6IFtNb2RhbENvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbUHJvZmlsZVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpIG1vZGFsSGVhZGVyOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbW9kYWxCb2R5OiBzdHJpbmc7XG5cblx0cHVibGljIHByb2ZpbGVGb3JtOiBDb250cm9sR3JvdXA7XG5cdHB1YmxpYyB1c2VyT2JqZWN0OiBhbnk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcHJvZmlsZVNlcnZpY2UgOiBQcm9maWxlU2VydmljZSwgcHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIF9tb2RhbENvbXBvbmVudDogTW9kYWxDb21wb25lbnQpIHtcblx0fVxuXG5cdG5nT25Jbml0KCk6IGFueSB7XG5cdFx0dGhpcy5wcm9maWxlRm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAnZmlyc3RfbmFtZScgOiBbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgJ2xhc3RfbmFtZScgOiBbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgJ2VtYWlsJyA6IFsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAncGFzc3dvcmQnIDogWycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICdsb2NhdGlvbicgOiBbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgJ2ltZ191cmwnIDogWycnXVxuICAgICBcdH0pO1xuICAgICBcdHRoaXMudXNlck9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyT2JqZWN0XCIpKTtcbiAgICAgXHR0aGlzLnVzZXJPYmplY3QuaW1nX3VybCA9ICcuLi9hc3NldHMvaW1nL3Byb2ZpbGUuanBnJztcbiAgICAgXHR0aGlzLmdldFByb2ZpbGUoKTtcbiAgICB9XG5cbiAgICBnZXRQcm9maWxlKCkge1xuICAgICAgXHR0aGlzLl9wcm9maWxlU2VydmljZS5nZXRQcm9maWxlKHRoaXMudXNlck9iamVjdC5pZCkuXG4gICAgICAgIHN1YnNjcmliZShcbiAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICBcdFx0XHR0aGlzLnVzZXJPYmplY3QuaW1nX3VybCA9IChkYXRhLmltZ191cmw9PT0nJ3x8ZGF0YS5pbWdfdXJsPT09bnVsbD8nLi4vYXNzZXRzL2ltZy9wcm9maWxlLmpwZyc6ZGF0YS5pbWdfdXJsKTtcbiAgICAgICAgICBcdFx0XHR0aGlzLnByb2ZpbGVGb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuXHRcdFx0ICAgICAgICAgICdmaXJzdF9uYW1lJyA6IFtkYXRhLmZpcnN0X25hbWUsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG5cdFx0XHQgICAgICAgICAgJ2xhc3RfbmFtZScgOiBbZGF0YS5sYXN0X25hbWUsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG5cdFx0XHQgICAgICAgICAgJ2VtYWlsJyA6IFtkYXRhLmVtYWlsLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuXHRcdFx0ICAgICAgICAgICdwYXNzd29yZCcgOiBbZGF0YS5wYXNzd29yZCxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcblx0XHRcdCAgICAgICAgICAnbG9jYXRpb24nIDogW2RhdGEubG9jYXRpb24sVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG5cdFx0XHQgICAgICAgICAgJ2ltZ191cmwnIDogW2RhdGEuaW1nX3VybF1cblx0XHRcdCAgICAgXHR9KTtcbiAgICAgICAgICBcdFx0ICB9LFxuICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcbiAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImdldCBjYWxsIGZpbmlzaGVkIGluIGdldCBjYWxsXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVByb2ZpbGUocHJvZmlsZU9iamVjdCkge1xuICAgICAgdGhpcy5tb2RhbEhlYWRlciA9IFwiUHJvZmlsZSBzYXkgOi0gXCI7XG4gICAgICB0aGlzLm1vZGFsQm9keSA9IFwiU3VjY2Vzc2Z1bGx5IFVwZGF0ZWQgIVwiO1xuICAgICAgdGhpcy5fcHJvZmlsZVNlcnZpY2UudXBkYXRlUHJvZmlsZSh0aGlzLnVzZXJPYmplY3QuaWQsSlNPTi5zdHJpbmdpZnkocHJvZmlsZU9iamVjdCkpLlxuICAgICAgICBzdWJzY3JpYmUoXG4gICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgXHRcdFx0dGhpcy51c2VyT2JqZWN0LmltZ191cmwgPSAoZGF0YS5pbWdfdXJsPT09Jyd8fGRhdGEuaW1nX3VybD09PW51bGw/Jy4uL2Fzc2V0cy9pbWcvcHJvZmlsZS5qcGcnOmRhdGEuaW1nX3VybCk7XG4gICAgICAgICAgXHRcdFx0dGhpcy5fbW9kYWxDb21wb25lbnQuYWxlcnQoKVxuICAgICAgICAgIFx0XHQgIH0sXG4gICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxuICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiZ2V0IGNhbGwgZmluaXNoZWQgaW4gZ2V0IGNhbGxcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
