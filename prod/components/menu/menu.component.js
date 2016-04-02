System.register(['angular2/core', 'angular2/router', '../menu/menu.service', '../authentication/auth.service'], function(exports_1, context_1) {
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
    var core_1, router_1, menu_service_1, auth_service_1;
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            MenuComponent = (function () {
                function MenuComponent(_menuService, _authService) {
                    this._menuService = _menuService;
                    this._authService = _authService;
                }
                MenuComponent.prototype.ngOnInit = function () {
                    this.menus = this._menuService.getMenus();
                };
                MenuComponent.prototype.setActive = function (menuId) {
                    this._menuService.setActive(menuId);
                };
                MenuComponent.prototype.userLogout = function () {
                    this._authService.userLogout();
                };
                MenuComponent = __decorate([
                    core_1.Component({
                        selector: 'home-menu',
                        styleUrls: ['../prod/components/menu/menu.css'],
                        templateUrl: '../prod/components/menu/menu.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [menu_service_1.MenuService]
                    }), 
                    __metadata('design:paramtypes', [menu_service_1.MenuService, auth_service_1.AuthService])
                ], MenuComponent);
                return MenuComponent;
            }());
            exports_1("MenuComponent", MenuComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUVDLHVCQUFvQixZQUEwQixFQUFVLFlBQXlCO29CQUE3RCxpQkFBWSxHQUFaLFlBQVksQ0FBYztvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRyxDQUFDO2dCQUVyRixnQ0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDeEMsQ0FBQztnQkFFRCxpQ0FBUyxHQUFULFVBQVUsTUFBYztvQkFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBRUQsa0NBQVUsR0FBVjtvQkFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNuQyxDQUFDO2dCQXJCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzt3QkFDL0MsV0FBVyxFQUFFLG1DQUFtQzt3QkFDaEQsVUFBVSxFQUFHLENBQUMsMEJBQWlCLENBQUM7d0JBQ2hDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7cUJBQzNCLENBQUM7O2lDQUFBO2dCQWlCRixvQkFBQztZQUFELENBaEJBLEFBZ0JDLElBQUE7WUFoQkQseUNBZ0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge01lbnVTZXJ2aWNlfSBmcm9tICcuLi9tZW51L21lbnUuc2VydmljZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvbWUtbWVudScsXG4gICAgc3R5bGVVcmxzOiBbJy4uL3Byb2QvY29tcG9uZW50cy9tZW51L21lbnUuY3NzJ10sXG4gICAgdGVtcGxhdGVVcmw6ICcuLi9wcm9kL2NvbXBvbmVudHMvbWVudS9tZW51Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXMgOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHByb3ZpZGVyczogW01lbnVTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRwdWJsaWMgbWVudXM6IEFycmF5PGFueT47XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX21lbnVTZXJ2aWNlIDogTWVudVNlcnZpY2UsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge31cblxuXHRuZ09uSW5pdCgpOiBhbnkge1xuXHRcdHRoaXMubWVudXMgPSB0aGlzLl9tZW51U2VydmljZS5nZXRNZW51cygpO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZShtZW51SWQ6IHN0cmluZykge1xuICAgIFx0dGhpcy5fbWVudVNlcnZpY2Uuc2V0QWN0aXZlKG1lbnVJZCk7XG4gICAgfVxuXG4gICAgdXNlckxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2UudXNlckxvZ291dCgpO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
