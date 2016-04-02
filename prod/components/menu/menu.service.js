System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var MenuService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MenuService = (function () {
                function MenuService() {
                    this.menus = [{
                            label: 'Dashboard',
                            id: 'dashboard',
                            href: ['Home/Dashboard'],
                            icon: 'fa fa-home fa-2x',
                            active: true
                        },
                        {
                            label: 'Profile',
                            id: 'profile',
                            href: ['Home/Profile'],
                            icon: 'fa fa-laptop fa-2x',
                            active: false
                        },
                        {
                            label: 'Favorite',
                            id: 'favorite',
                            href: ['Home/Profile'],
                            icon: 'fa fa-map-marker fa-2x',
                            active: false
                        }];
                }
                MenuService.prototype.getMenus = function () {
                    return this.menus;
                };
                MenuService.prototype.setActive = function (menuId) {
                    for (var _i = 0, _a = this.menus; _i < _a.length; _i++) {
                        var menu = _a[_i];
                        menu.active = menu.id === menuId;
                    }
                };
                MenuService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MenuService);
                return MenuService;
            }());
            exports_1("MenuService", MenuService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS9tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQTtvQkFFUSxVQUFLLEdBQWUsQ0FBQzs0QkFDckIsS0FBSyxFQUFFLFdBQVc7NEJBQ2xCLEVBQUUsRUFBRSxXQUFXOzRCQUNmLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDOzRCQUN4QixJQUFJLEVBQUUsa0JBQWtCOzRCQUN4QixNQUFNLEVBQUUsSUFBSTt5QkFDZjt3QkFDRDs0QkFDSSxLQUFLLEVBQUUsU0FBUzs0QkFDaEIsRUFBRSxFQUFFLFNBQVM7NEJBQ2IsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDOzRCQUN0QixJQUFJLEVBQUUsb0JBQW9COzRCQUMxQixNQUFNLEVBQUUsS0FBSzt5QkFDaEI7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFFLFVBQVU7NEJBQ2pCLEVBQUUsRUFBRSxVQUFVOzRCQUNkLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQzs0QkFDdEIsSUFBSSxFQUFFLHdCQUF3Qjs0QkFDOUIsTUFBTSxFQUFFLEtBQUs7eUJBQ2hCLENBQUMsQ0FBQztnQkFZUCxDQUFDO2dCQVZBLDhCQUFRLEdBQVI7b0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ25CLENBQUM7Z0JBRUQsK0JBQVMsR0FBVCxVQUFVLE1BQWM7b0JBQ2pCLEdBQUcsQ0FBQyxDQUFhLFVBQVUsRUFBVixLQUFBLElBQUksQ0FBQyxLQUFLLEVBQVYsY0FBVSxFQUFWLElBQVUsQ0FBQzt3QkFBdkIsSUFBSSxJQUFJLFNBQUE7d0JBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQztxQkFDcEM7Z0JBQ0wsQ0FBQztnQkFqQ0w7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBbUNiLGtCQUFDO1lBQUQsQ0FsQ0EsQUFrQ0MsSUFBQTtZQWxDRCxxQ0FrQ0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL21lbnUvbWVudS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lbnVTZXJ2aWNlIHtcblxuXHRwdWJsaWMgbWVudXM6IEFycmF5PGFueT4gPSBbe1xuICAgICAgICBsYWJlbDogJ0Rhc2hib2FyZCcsXG4gICAgICAgIGlkOiAnZGFzaGJvYXJkJyxcbiAgICAgICAgaHJlZjogWydIb21lL0Rhc2hib2FyZCddLFxuICAgICAgICBpY29uOiAnZmEgZmEtaG9tZSBmYS0yeCcsXG4gICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ1Byb2ZpbGUnLFxuICAgICAgICBpZDogJ3Byb2ZpbGUnLFxuICAgICAgICBocmVmOiBbJ0hvbWUvUHJvZmlsZSddLFxuICAgICAgICBpY29uOiAnZmEgZmEtbGFwdG9wIGZhLTJ4JyxcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0Zhdm9yaXRlJyxcbiAgICAgICAgaWQ6ICdmYXZvcml0ZScsXG4gICAgICAgIGhyZWY6IFsnSG9tZS9Qcm9maWxlJ10sXG4gICAgICAgIGljb246ICdmYSBmYS1tYXAtbWFya2VyIGZhLTJ4JyxcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgIH1dO1xuXG5cdGdldE1lbnVzKCkge1xuXHRcdHJldHVybiB0aGlzLm1lbnVzO1xuXHR9XG5cblx0c2V0QWN0aXZlKG1lbnVJZDogc3RyaW5nKSB7XG4gICAgICAgIGZvciAobGV0IG1lbnUgb2YgdGhpcy5tZW51cykge1xuICAgICAgICAgICAgbWVudS5hY3RpdmUgPSBtZW51LmlkID09PSBtZW51SWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
