System.register(['angular2/core', 'angular2/router', '../../utility/modal/modal.component', '../authentication/auth.service', '../authentication/auth.helper', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, router_1, modal_component_1, auth_service_1, auth_helper_1, common_1;
    var LandingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (modal_component_1_1) {
                modal_component_1 = modal_component_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (auth_helper_1_1) {
                auth_helper_1 = auth_helper_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            LandingComponent = (function () {
                function LandingComponent(_router, _authService, _formBuilder, _authHelper, _modalComponent) {
                    this._router = _router;
                    this._authService = _authService;
                    this._formBuilder = _formBuilder;
                    this._authHelper = _authHelper;
                    this._modalComponent = _modalComponent;
                }
                LandingComponent.prototype.ngOnInit = function () {
                    this.loginForm = this._formBuilder.group({
                        'email': ['', common_1.Validators.required],
                        'password': ['', common_1.Validators.required]
                    });
                    this.signupForm = this._formBuilder.group({
                        'first_name': ['', common_1.Validators.required],
                        'last_name': ['', common_1.Validators.required],
                        'email': ['', common_1.Validators.required],
                        'password': ['', common_1.Validators.required],
                        'location': ['', common_1.Validators.required]
                    });
                    this.subscribeForm = this._formBuilder.group({
                        'email': ['', common_1.Validators.required]
                    });
                };
                LandingComponent.prototype.userSignup = function (userObject) {
                    var _this = this;
                    this.modalHeader = "Signup say :- ";
                    this.modalBody = "Successfully Registered !";
                    this._authService.userSignup(JSON.stringify(userObject)).
                        subscribe(function (data) { return _this._modalComponent.alert(); }, function (error) { return console.log(error); }, function () { return console.log("get call finished in get call"); });
                };
                LandingComponent.prototype.userLogin = function (userObject) {
                    var _this = this;
                    this._authService.userLogin(userObject).
                        subscribe(function (data) { return _this.redirectToHome(data, userObject); }, function (error) { return console.log(error); }, function () { return console.log("get call finished in get call"); });
                };
                LandingComponent.prototype.redirectToHome = function (resData, userObject) {
                    this.modalHeader = "Login say :- ";
                    this.modalBody = "User or Password is invalid !!!! ";
                    if (this._authHelper.findUser(resData, userObject)) {
                        console.log("This is the user object --> " + JSON.stringify(resData));
                        localStorage.setItem("userObject", JSON.stringify(userObject));
                        this._router.navigate(['Home/Dashboard']);
                    }
                    else {
                        this._modalComponent.alert();
                    }
                };
                LandingComponent.prototype.userSubscribe = function (subscribeObject) {
                    var _this = this;
                    this.modalHeader = "Subscribe say :- ";
                    this.modalBody = "Successfully Subscribed !";
                    this._authService.userSubscribe(JSON.stringify(subscribeObject)).
                        subscribe(function (data) { return _this._modalComponent.alert(); }, function (error) { return console.log(error); }, function () { return console.log("get call finished in get call"); });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], LandingComponent.prototype, "modalHeader", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], LandingComponent.prototype, "modalBody", void 0);
                LandingComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../prod/components/landing/landing.html',
                        styleUrls: ['../prod/components/landing/landing.css'],
                        directives: [modal_component_1.ModalComponent],
                        providers: [auth_helper_1.AuthHelper]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, common_1.FormBuilder, auth_helper_1.AuthHelper, modal_component_1.ModalComponent])
                ], LandingComponent);
                return LandingComponent;
            }());
            exports_1("LandingComponent", LandingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQVNHLDBCQUFvQixPQUFnQixFQUFVLFlBQTBCLEVBQVUsWUFBeUIsRUFBVSxXQUF1QixFQUFVLGVBQStCO29CQUFqSyxZQUFPLEdBQVAsT0FBTyxDQUFTO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO29CQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtnQkFBRyxDQUFDO2dCQUV4TCxtQ0FBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7d0JBQ3JDLE9BQU8sRUFBRyxDQUFDLEVBQUUsRUFBQyxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDbEMsVUFBVSxFQUFHLENBQUMsRUFBRSxFQUFDLG1CQUFVLENBQUMsUUFBUSxDQUFDO3FCQUN4QyxDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzt3QkFDdEMsWUFBWSxFQUFHLENBQUMsRUFBRSxFQUFDLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUN2QyxXQUFXLEVBQUcsQ0FBQyxFQUFFLEVBQUMsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3RDLE9BQU8sRUFBRyxDQUFDLEVBQUUsRUFBQyxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDbEMsVUFBVSxFQUFHLENBQUMsRUFBRSxFQUFDLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNyQyxVQUFVLEVBQUcsQ0FBQyxFQUFFLEVBQUMsbUJBQVUsQ0FBQyxRQUFRLENBQUM7cUJBQ3hDLENBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMsYUFBYSxHQUFH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QW5FRDtvQkFBQyxZQUFLLEVBQUU7O3FFQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7bUVBQUE7Z0JBVFo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxXQUFXLEVBQUUseUNBQXlDO3dCQUN0RCxTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQzt3QkFDckQsVUFBVSxFQUFFLENBQUMsZ0NBQWMsQ0FBQzt3QkFDNUIsU0FBUyxFQUFFLENBQUMsd0JBQVUsQ0FBQztxQkFDMUIsQ0FBQzs7b0NBQUE7Z0JBd0VGLHVCQUFDO1lBQUQsQ0F2RUEsQUF1RUMsSUFBQTtZQXZFRCwrQ0F1RUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkluaXQsSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge01vZGFsQ29tcG9uZW50fSBmcm9tICcuLi8uLi91dGlsaXR5L21vZGFsL21vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoSGVscGVyfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoLmhlbHBlcic7XG5pbXBvcnQge0NvbnRyb2xHcm91cCxGb3JtQnVpbGRlcixWYWxpZGF0b3JzfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogJy4uL3Byb2QvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4uL3Byb2QvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW01vZGFsQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtBdXRoSGVscGVyXVxufSlcbmV4cG9ydCBjbGFzcyBMYW5kaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIG1vZGFsSGVhZGVyOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbW9kYWxCb2R5OiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgbG9naW5Gb3JtIDogQ29udHJvbEdyb3VwO1xuICAgIHB1YmxpYyBzaWdudXBGb3JtIDogQ29udHJvbEdyb3VwO1xuICAgIHB1YmxpYyBzdWJzY3JpYmVGb3JtIDogQ29udHJvbEdyb3VwO1xuXG5cdCAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyIDogUm91dGVyLCBwcml2YXRlIF9hdXRoU2VydmljZSA6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgX2F1dGhIZWxwZXI6IEF1dGhIZWxwZXIsIHByaXZhdGUgX21vZGFsQ29tcG9uZW50OiBNb2RhbENvbXBvbmVudCkge31cblxuICAgIG5nT25Jbml0KCk6IGFueSB7XG4gICAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAnZW1haWwnIDogWycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICdwYXNzd29yZCcgOiBbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5zaWdudXBGb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICdmaXJzdF9uYW1lJyA6IFsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAnbGFzdF9uYW1lJyA6IFsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAnZW1haWwnIDogWycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICdwYXNzd29yZCcgOiBbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgJ2xvY2F0aW9uJyA6IFsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgfSk7XG4gICAgICB0aGlzLnN1YnNjcmliZUZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgJ2VtYWlsJyA6IFsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVzZXJTaWdudXAodXNlck9iamVjdCkge1xuICAgICAgdGhpcy5tb2RhbEhlYWRlciA9IFwiU2lnbnVwIHNheSA6LSBcIjtcbiAgICAgIHRoaXMubW9kYWxCb2R5ID0gXCJTdWNjZXNzZnVsbHkgUmVnaXN0ZXJlZCAhXCI7XG4gICAgICB0aGlzLl9hdXRoU2VydmljZS51c2VyU2lnbnVwKEpTT04uc3RyaW5naWZ5KHVzZXJPYmplY3QpKS5cbiAgICAgICAgc3Vic2NyaWJlKFxuICAgICAgICAgIGRhdGEgPT4gdGhpcy5fbW9kYWxDb21wb25lbnQuYWxlcnQoKSxcbiAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXG4gICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJnZXQgY2FsbCBmaW5pc2hlZCBpbiBnZXQgY2FsbFwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyB1c2VyTG9naW4odXNlck9iamVjdCkge1xuICAgICAgdGhpcy5fYXV0aFNlcnZpY2UudXNlckxvZ2luKHVzZXJPYmplY3QpLlxuICAgICAgICBzdWJzY3JpYmUoXG4gICAgICAgICAgZGF0YSA9PiB0aGlzLnJlZGlyZWN0VG9Ib21lKGRhdGEsdXNlck9iamVjdCksXG4gICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxuICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiZ2V0IGNhbGwgZmluaXNoZWQgaW4gZ2V0IGNhbGxcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVkaXJlY3RUb0hvbWUocmVzRGF0YSx1c2VyT2JqZWN0KSB7XG4gICAgICB0aGlzLm1vZGFsSGVhZGVyID0gXCJMb2dpbiBzYXkgOi0gXCI7XG4gICAgICB0aGlzLm1vZGFsQm9keSA9IFwiVXNlciBvciBQYXNzd29yZCBpcyBpbnZhbGlkICEhISEgXCI7XG4gICAgICBpZih0aGlzLl9hdXRoSGVscGVyLmZpbmRVc2VyKHJlc0RhdGEsdXNlck9iamVjdCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIHRoZSB1c2VyIG9iamVjdCAtLT4gXCIgKyBKU09OLnN0cmluZ2lmeShyZXNEYXRhKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlck9iamVjdFwiLCBKU09OLnN0cmluZ2lmeSh1c2VyT2JqZWN0KSk7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0hvbWUvRGFzaGJvYXJkJ10pO1xuICAgICAgfWVsc2Uge1xuICAgICAgICB0aGlzLl9tb2RhbENvbXBvbmVudC5hbGVydCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1c2VyU3Vic2NyaWJlKHN1YnNjcmliZU9iamVjdCkge1xuICAgICAgdGhpcy5tb2RhbEhlYWRlciA9IFwiU3Vic2NyaWJlIHNheSA6LSBcIjtcbiAgICAgIHRoaXMubW9kYWxCb2R5ID0gXCJTdWNjZXNzZnVsbHkgU3Vic2NyaWJlZCAhXCI7XG4gICAgICB0aGlzLl9hdXRoU2VydmljZS51c2VyU3Vic2NyaWJlKEpTT04uc3RyaW5naWZ5KHN1YnNjcmliZU9iamVjdCkpLlxuICAgICAgICBzdWJzY3JpYmUoXG4gICAgICAgICAgZGF0YSA9PiB0aGlzLl9tb2RhbENvbXBvbmVudC5hbGVydCgpLFxuICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcbiAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImdldCBjYWxsIGZpbmlzaGVkIGluIGdldCBjYWxsXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
