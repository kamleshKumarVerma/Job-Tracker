System.register(['angular2/core', '../../utility/constant', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, constant_1, http_1;
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (constant_1_1) {
                constant_1 = constant_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            AuthService = (function () {
                function AuthService(_http) {
                    this._http = _http;
                }
                AuthService.prototype.getHeader = function () {
                    var headers = new http_1.Headers();
                    headers.append("Content-Type", "application/json");
                    return headers;
                };
                AuthService.prototype.isAuthorised = function () {
                    var myStoredUser = localStorage.getItem("userObject");
                    return ((myStoredUser === null) ? false : true);
                };
                AuthService.prototype.userSignup = function (userObject) {
                    return this._http.post(constant_1.CONSTANT.BASE_URL + 'users', userObject, { headers: this.getHeader() }).map(function (res) { return res.json(); });
                };
                AuthService.prototype.userLogin = function (userObject) {
                    return this._http.get(constant_1.CONSTANT.BASE_URL + 'users', { headers: this.getHeader() }).map(function (res) { return res.json(); });
                };
                AuthService.prototype.userSubscribe = function (subscribeObject) {
                    return this._http.post(constant_1.CONSTANT.BASE_URL + 'subscribes', subscribeObject, { headers: this.getHeader() }).map(function (res) { return res.json(); });
                };
                AuthService.prototype.userLogout = function () {
                    localStorage.removeItem("userObject");
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXV0aGVudGljYXRpb24vYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUVDLHFCQUFvQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07Z0JBRS9CLENBQUM7Z0JBRUQsK0JBQVMsR0FBVDtvQkFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBQyxrQkFBa0IsQ0FBQyxDQUFDO29CQUNsRCxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNuQixDQUFDO2dCQUVELGtDQUFZLEdBQVo7b0JBQ0MsSUFBSSxZQUFZLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDdEQsTUFBTSxDQUFDLENBQUUsQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFFLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUNuRCxDQUFDO2dCQUVELGdDQUFVLEdBQVYsVUFBVyxVQUFlO29CQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQVEsQ0FBQyxRQUFRLEdBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBRSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDL0csQ0FBQztnQkFFRCwrQkFBUyxHQUFULFVBQVUsVUFBVTtvQkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1CQUFRLENBQUMsUUFBUSxHQUFDLE9BQU8sRUFBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxVQUFBLEdBQUcsSUFBRyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUUsQ0FBQztnQkFDdEcsQ0FBQztnQkFFRCxtQ0FBYSxHQUFiLFVBQWMsZUFBZTtvQkFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFRLENBQUMsUUFBUSxHQUFDLFlBQVksRUFBQyxlQUFlLEVBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ3pILENBQUM7Z0JBRUQsZ0NBQVUsR0FBVjtvQkFDQyxZQUFZLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQWhDRjtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkFrQ2Isa0JBQUM7WUFBRCxDQWpDQSxBQWlDQyxJQUFBO1lBakNELHFDQWlDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYXV0aGVudGljYXRpb24vYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q09OU1RBTlR9IGZyb20gJy4uLy4uL3V0aWxpdHkvY29uc3RhbnQnO1xuaW1wb3J0IHtIdHRwLEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcblx0IFxuXHR9XG5cblx0Z2V0SGVhZGVyKCkge1xuXHQgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHQgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIixcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cdCAgICByZXR1cm4gaGVhZGVycztcblx0fVxuXG5cdGlzQXV0aG9yaXNlZCgpIHtcblx0XHRsZXQgbXlTdG9yZWRVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyT2JqZWN0XCIpO1xuXHRcdHJldHVybiAoIChteVN0b3JlZFVzZXIgPT09IG51bGwgKSA/IGZhbHNlIDogdHJ1ZSk7XG5cdH1cblxuXHR1c2VyU2lnbnVwKHVzZXJPYmplY3Q6IGFueSkge1xuXHRcdHJldHVybiB0aGlzLl9odHRwLnBvc3QoQ09OU1RBTlQuQkFTRV9VUkwrJ3VzZXJzJyx1c2VyT2JqZWN0LHtoZWFkZXJzOiB0aGlzLmdldEhlYWRlcigpfSkubWFwKHJlcz0+cmVzLmpzb24oKSk7XG5cdH1cblxuXHR1c2VyTG9naW4odXNlck9iamVjdCkge1xuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldChDT05TVEFOVC5CQVNFX1VSTCsndXNlcnMnLHtoZWFkZXJzOiB0aGlzLmdldEhlYWRlcigpfSkubWFwKCByZXM9PiByZXMuanNvbigpICk7XG5cdH1cblxuXHR1c2VyU3Vic2NyaWJlKHN1YnNjcmliZU9iamVjdCkge1xuXHRcdHJldHVybiB0aGlzLl9odHRwLnBvc3QoQ09OU1RBTlQuQkFTRV9VUkwrJ3N1YnNjcmliZXMnLHN1YnNjcmliZU9iamVjdCx7aGVhZGVyczogdGhpcy5nZXRIZWFkZXIoKX0pLm1hcChyZXM9PnJlcy5qc29uKCkpO1xuXHR9XG5cblx0dXNlckxvZ291dCgpIHtcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJPYmplY3RcIik7XG5cdH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
