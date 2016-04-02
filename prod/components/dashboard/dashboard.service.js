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
    var DashboardService;
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
            DashboardService = (function () {
                function DashboardService(_http) {
                    this._http = _http;
                }
                DashboardService.prototype.getHeader = function () {
                    var headers = new http_2.Headers();
                    headers.append("Content-Type", "application/json");
                    return headers;
                };
                DashboardService.prototype.postJobNews = function (jobNewsObject) {
                    return this._http.post(constant_1.CONSTANT.BASE_URL + 'job_newses', jobNewsObject, { headers: this.getHeader() }).map(function (res) { return res.json(); });
                };
                DashboardService.prototype.getJobNews = function () {
                    return this._http.get(constant_1.CONSTANT.BASE_URL + 'job_newses', { headers: this.getHeader() }).map(function (res) { return res.json(); });
                };
                DashboardService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DashboardService);
                return DashboardService;
            }());
            exports_1("DashboardService", DashboardService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFFQywwQkFBb0IsS0FBWTtvQkFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO2dCQUFHLENBQUM7Z0JBRXBDLG9DQUFTLEdBQVQ7b0JBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFDbEQsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDbkIsQ0FBQztnQkFFRCxzQ0FBVyxHQUFYLFVBQVksYUFBa0I7b0JBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBUSxDQUFDLFFBQVEsR0FBQyxZQUFZLEVBQUMsYUFBYSxFQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFFLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUN2SCxDQUFDO2dCQUVELHFDQUFVLEdBQVY7b0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1CQUFRLENBQUMsUUFBUSxHQUFDLFlBQVksRUFBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBRSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDeEcsQ0FBQztnQkFqQkY7b0JBQUMsaUJBQVUsRUFBRTs7b0NBQUE7Z0JBbUJiLHVCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCwrQ0FrQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NPTlNUQU5UfSBmcm9tICcuLi8uLi91dGlsaXR5L2NvbnN0YW50JztcbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0hlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkU2VydmljZSB7XG5cdFxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwIDogSHR0cCkge31cblxuXHRnZXRIZWFkZXIoKSB7XG5cdCAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdCAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLFwiYXBwbGljYXRpb24vanNvblwiKTtcblx0ICAgIHJldHVybiBoZWFkZXJzO1xuXHR9XG5cblx0cG9zdEpvYk5ld3Moam9iTmV3c09iamVjdDogYW55KSB7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAucG9zdChDT05TVEFOVC5CQVNFX1VSTCsnam9iX25ld3Nlcycsam9iTmV3c09iamVjdCx7aGVhZGVyczogdGhpcy5nZXRIZWFkZXIoKX0pLm1hcChyZXM9PnJlcy5qc29uKCkpO1xuXHR9XG5cblx0Z2V0Sm9iTmV3cygpIHtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQoQ09OU1RBTlQuQkFTRV9VUkwrJ2pvYl9uZXdzZXMnLHtoZWFkZXJzOiB0aGlzLmdldEhlYWRlcigpfSkubWFwKHJlcz0+cmVzLmpzb24oKSk7XG5cdH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
