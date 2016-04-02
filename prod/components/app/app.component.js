System.register(['angular2/core', 'angular2/router', '../landing/landing.component', '../home/home.component', '../authentication/auth.service', '../../utility/modal/modal.component'], function(exports_1, context_1) {
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
    var core_1, router_1, landing_component_1, home_component_1, auth_service_1, modal_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (landing_component_1_1) {
                landing_component_1 = landing_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (modal_component_1_1) {
                modal_component_1 = modal_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router, _authService) {
                    var _this = this;
                    this._router = _router;
                    this._authService = _authService;
                    this._router.subscribe(function (path) {
                        if (!_this._authService.isAuthorised()) {
                            _this._router.navigate(['/Landing']);
                        }
                    });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: '../prod/components/app/app.html',
                        styleUrls: ['../prod/components/app/app.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [modal_component_1.ModalComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Landing', component: landing_component_1.LandingComponent, useAsDefault: true },
                        { path: '/home/...', name: 'Home', component: home_component_1.HomeComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBRUMsc0JBQW9CLE9BQWUsRUFBVSxZQUF5QjtvQkFGdkUsaUJBVUM7b0JBUm9CLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3JFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTt3QkFDMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDdkMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUNyQyxDQUFDO29CQUNDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBbkJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFdBQVcsRUFBRSxpQ0FBaUM7d0JBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO3dCQUM3QyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztxQkFDOUIsQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNaLEVBQUUsSUFBSSxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO3dCQUM5RSxFQUFFLElBQUksRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtxQkFDNUQsQ0FBQzs7Z0NBQUE7Z0JBV0YsbUJBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELHVDQVVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsUm91dGVDb25maWcsUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtMYW5kaW5nQ29tcG9uZW50fSBmcm9tICcuLi9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtNb2RhbENvbXBvbmVudH0gZnJvbSAnLi4vLi4vdXRpbGl0eS9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuLi9wcm9kL2NvbXBvbmVudHMvYXBwL2FwcC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi4vcHJvZC9jb21wb25lbnRzL2FwcC9hcHAuY3NzJ10sIFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbTW9kYWxDb21wb25lbnRdXG59KVxuQFJvdXRlQ29uZmlnKFtcblx0eyBwYXRoOicvJyAsbmFtZTogJ0xhbmRpbmcnICxjb21wb25lbnQ6IExhbmRpbmdDb21wb25lbnQgLHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxuXHR7IHBhdGg6Jy9ob21lLy4uLicgLG5hbWU6ICdIb21lJyAsY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH1cbl0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XG5cdFx0dGhpcy5fcm91dGVyLnN1YnNjcmliZShwYXRoID0+IHtcblx0XHRcdGlmICghdGhpcy5fYXV0aFNlcnZpY2UuaXNBdXRob3Jpc2VkKCkpIHtcblx0XHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL0xhbmRpbmcnXSk7XG5cdFx0XHR9XG5cdCAgICB9KTtcblx0fVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
