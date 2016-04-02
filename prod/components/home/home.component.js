System.register(['angular2/core', 'angular2/router', '../menu/menu.component', '../dashboard/dashboard.component', '../profile/profile.component', '../authentication/auth.service'], function(exports_1, context_1) {
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
    var core_1, router_1, menu_component_1, dashboard_component_1, profile_component_1, auth_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_authService) {
                    this._authService = _authService;
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../prod/components/home/home.html',
                        styleUrls: ['../prod/components/home/home.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, menu_component_1.MenuComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/dashboard', name: 'Dashboard', component: dashboard_component_1.DashboardComponent, useAsDefault: true },
                        { path: '/profile', name: 'Profile', component: profile_component_1.ProfileComponent }
                    ]), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdCQTtnQkFFQyx1QkFBb0IsWUFBMEI7b0JBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO2dCQUFHLENBQUM7Z0JBWG5EO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFFLG1DQUFtQzt3QkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7d0JBQy9DLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFDLDhCQUFhLENBQUM7cUJBQ2hELENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDWixFQUFFLElBQUksRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRTt3QkFDM0YsRUFBRSxJQUFJLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO3FCQUNqRSxDQUFDOztpQ0FBQTtnQkFLRixvQkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQseUNBSUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLFJvdXRlQ29uZmlnfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtNZW51Q29tcG9uZW50fSBmcm9tICcuLi9tZW51L21lbnUuY29tcG9uZW50JztcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tICcuLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQge1Byb2ZpbGVDb21wb25lbnR9IGZyb20gJy4uL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24vYXV0aC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6ICcuLi9wcm9kL2NvbXBvbmVudHMvaG9tZS9ob21lLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuLi9wcm9kL2NvbXBvbmVudHMvaG9tZS9ob21lLmNzcyddLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUyxNZW51Q29tcG9uZW50XVxufSlcbkBSb3V0ZUNvbmZpZyhbXG5cdHsgcGF0aDonL2Rhc2hib2FyZCcgLG5hbWU6ICdEYXNoYm9hcmQnICxjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCAsdXNlQXNEZWZhdWx0OiB0cnVlIH0sXG5cdHsgcGF0aDonL3Byb2ZpbGUnICxuYW1lOiAnUHJvZmlsZScgLGNvbXBvbmVudDogUHJvZmlsZUNvbXBvbmVudCB9XG5dKVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhTZXJ2aWNlIDogQXV0aFNlcnZpY2UpIHt9XG5cdFxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
