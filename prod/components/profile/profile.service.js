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
    var core_1, constant_1, http_1, http_2;
    var ProfileService;
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
                http_2 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            ProfileService = (function () {
                function ProfileService(_http) {
                    this._http = _http;
                }
                ProfileService.prototype.getHeader = function () {
                    var headers = new http_2.Headers();
                    headers.append("Content-Type", "application/json");
                    return headers;
                };
                ProfileService.prototype.getProfile = function (user_id) {
                    return this._http.get(constant_1.CONSTANT.BASE_URL + 'users/' + user_id, { headers: this.getHeader() }).map(function (res) { return res.json(); });
                };
                ProfileService.prototype.updateProfile = function (user_id, profileObject) {
                    return this._http.put(constant_1.CONSTANT.BASE_URL + 'users/' + user_id, profileObject, { headers: this.getHeader() }).map(function (res) { return res.json(); });
                };
                ProfileService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProfileService);
                return ProfileService;
            }());
            exports_1("ProfileService", ProfileService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUVDLHdCQUFvQixLQUFZO29CQUFaLFVBQUssR0FBTCxLQUFLLENBQU87Z0JBQUcsQ0FBQztnQkFFcEMsa0NBQVMsR0FBVDtvQkFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBQyxrQkFBa0IsQ0FBQyxDQUFDO29CQUNsRCxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNuQixDQUFDO2dCQUVELG1DQUFVLEdBQVYsVUFBVyxPQUFlO29CQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsbUJBQVEsQ0FBQyxRQUFRLEdBQUMsUUFBUSxHQUFDLE9BQU8sRUFBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBRSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDNUcsQ0FBQztnQkFFRCxzQ0FBYSxHQUFiLFVBQWMsT0FBZSxFQUFFLGFBQWtCO29CQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsbUJBQVEsQ0FBQyxRQUFRLEdBQUMsUUFBUSxHQUFDLE9BQU8sRUFBQyxhQUFhLEVBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzFILENBQUM7Z0JBakJGO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQW1CYixxQkFBQztZQUFELENBbEJBLEFBa0JDLElBQUE7WUFsQkQsMkNBa0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NPTlNUQU5UfSBmcm9tICcuLi8uLi91dGlsaXR5L2NvbnN0YW50JztcbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0hlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNlcnZpY2Uge1xuXHRcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cCA6IEh0dHApIHt9XG5cblx0Z2V0SGVhZGVyKCkge1xuXHQgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHQgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIixcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cdCAgICByZXR1cm4gaGVhZGVycztcblx0fVxuXG5cdGdldFByb2ZpbGUodXNlcl9pZDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZ2V0KENPTlNUQU5ULkJBU0VfVVJMKyd1c2Vycy8nK3VzZXJfaWQse2hlYWRlcnM6IHRoaXMuZ2V0SGVhZGVyKCl9KS5tYXAocmVzPT5yZXMuanNvbigpKTtcblx0fVxuXG5cdHVwZGF0ZVByb2ZpbGUodXNlcl9pZDogc3RyaW5nLCBwcm9maWxlT2JqZWN0OiBhbnkpIHtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5wdXQoQ09OU1RBTlQuQkFTRV9VUkwrJ3VzZXJzLycrdXNlcl9pZCxwcm9maWxlT2JqZWN0LHtoZWFkZXJzOiB0aGlzLmdldEhlYWRlcigpfSkubWFwKHJlcz0+cmVzLmpzb24oKSk7XG5cdH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
