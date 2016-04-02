System.register(['angular2/platform/browser', "./components/app/app.component", "angular2/router", "angular2/http", './components/authentication/auth.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, router_1, http_1, auth_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, auth_service_1.AuthService]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BLG1CQUFTLENBQUMsNEJBQVksRUFBRSxDQUFDLHlCQUFnQixFQUFFLHFCQUFjLEVBQUUsMEJBQVcsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge1JPVVRFUl9QUk9WSURFUlN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuL2NvbXBvbmVudHMvYXV0aGVudGljYXRpb24vYXV0aC5zZXJ2aWNlJztcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1JPVVRFUl9QUk9WSURFUlMsIEhUVFBfUFJPVklERVJTLCBBdXRoU2VydmljZV0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
