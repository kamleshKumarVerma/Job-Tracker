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
    var AuthHelper;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AuthHelper = (function () {
                function AuthHelper() {
                }
                AuthHelper.prototype.findUser = function (resData, userObject) {
                    var flag = false;
                    for (var i = 0; i < resData.length; i++) {
                        if (resData[i].email === userObject.email && resData[i].password === userObject.password) {
                            flag = true;
                            userObject.id = resData[i].id;
                            userObject.first_name = resData[i].first_name;
                            userObject.last_name = resData[i].last_name;
                        }
                        if (flag)
                            break;
                    }
                    return flag;
                };
                AuthHelper = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AuthHelper);
                return AuthHelper;
            }());
            exports_1("AuthHelper", AuthHelper);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXV0aGVudGljYXRpb24vYXV0aC5oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQTtnQkFrQkEsQ0FBQztnQkFoQk8sNkJBQVEsR0FBZixVQUFnQixPQUFPLEVBQUMsVUFBVTtvQkFDN0IsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO29CQUNqQixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDMUMsRUFBRSxDQUFDLENBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxVQUFVLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDLFFBQVMsQ0FBQyxDQUFDLENBQUM7NEJBQzVGLElBQUksR0FBRyxJQUFJLENBQUM7NEJBQ1osVUFBVSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOzRCQUM1QixVQUFVLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7NEJBQzlDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQzt3QkFDL0MsQ0FBQzt3QkFDQSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUM7NEJBQ04sS0FBSyxDQUFDO29CQUNWLENBQUM7b0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDZCxDQUFDO2dCQWhCTDtvQkFBQyxpQkFBVSxFQUFFOzs4QkFBQTtnQkFtQmIsaUJBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELG1DQWtCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYXV0aGVudGljYXRpb24vYXV0aC5oZWxwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEhlbHBlciB7XG5cblx0cHVibGljIGZpbmRVc2VyKHJlc0RhdGEsdXNlck9iamVjdCkge1xuICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcbiAgICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgcmVzRGF0YS5sZW5ndGggOyBpKyspIHtcbiAgICAgIFx0aWYgKCByZXNEYXRhW2ldLmVtYWlsID09PSB1c2VyT2JqZWN0LmVtYWlsICYmIHJlc0RhdGFbaV0ucGFzc3dvcmQgPT09IHVzZXJPYmplY3QucGFzc3dvcmQgKSB7XG4gICAgICBcdFx0ZmxhZyA9IHRydWU7XG4gICAgICBcdFx0dXNlck9iamVjdC5pZCA9IHJlc0RhdGFbaV0uaWQ7XG4gICAgICAgICAgdXNlck9iamVjdC5maXJzdF9uYW1lID0gcmVzRGF0YVtpXS5maXJzdF9uYW1lO1xuICAgICAgICAgIHVzZXJPYmplY3QubGFzdF9uYW1lID0gcmVzRGF0YVtpXS5sYXN0X25hbWU7XG4gICAgICBcdH1cbiAgICAgICAgaWYoZmxhZylcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJldHVybiBmbGFnO1xuICAgIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
