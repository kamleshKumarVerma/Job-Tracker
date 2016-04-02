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
    var ModalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ModalComponent = (function () {
                function ModalComponent() {
                }
                ModalComponent.prototype.alert = function () {
                    jQuery('#myAlertModal').modal('toggle');
                };
                ModalComponent = __decorate([
                    core_1.Component({
                        selector: "my-modal",
                        styleUrls: ['../prod/utility/modal/modal.css'],
                        templateUrl: '../prod/utility/modal/modal.html',
                        inputs: ['modalHeader', 'modalBody']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ModalComponent);
                return ModalComponent;
            }());
            exports_1("ModalComponent", ModalComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdHkvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBQUE7Z0JBU0EsQ0FBQztnQkFKQyw4QkFBSyxHQUFMO29CQUNJLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBYkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7d0JBQzlDLFdBQVcsRUFBRSxrQ0FBa0M7d0JBQy9DLE1BQU0sRUFBRSxDQUFDLGFBQWEsRUFBQyxXQUFXLENBQUM7cUJBQ3RDLENBQUM7O2tDQUFBO2dCQVVGLHFCQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCwyQ0FTQyxDQUFBIiwiZmlsZSI6InV0aWxpdHkvbW9kYWwvbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LW1vZGFsXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4uL3Byb2QvdXRpbGl0eS9tb2RhbC9tb2RhbC5jc3MnXSxcbiAgICB0ZW1wbGF0ZVVybDogJy4uL3Byb2QvdXRpbGl0eS9tb2RhbC9tb2RhbC5odG1sJyxcbiAgICBpbnB1dHM6IFsnbW9kYWxIZWFkZXInLCdtb2RhbEJvZHknXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCB7XG4gIFxuICBwdWJsaWMgbW9kYWxIZWFkZXI6IHN0cmluZztcbiAgcHVibGljIG1vZGFsQm9keTogc3RyaW5nO1xuXG4gIGFsZXJ0KCkge1xuICAgICAgalF1ZXJ5KCcjbXlBbGVydE1vZGFsJykubW9kYWwoJ3RvZ2dsZScpO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
