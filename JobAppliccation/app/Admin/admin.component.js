"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var job_1 = require('./../Job/job');
var jobapp_service_1 = require('./../jobapp.service');
var AdminComponent /*implements OnInit*/ = (function () {
    function AdminComponent /*implements OnInit*/(jobappService) {
        this.jobappService = jobappService;
        //ngOnInit() {
        //}
        this.jobForm = false;
        this.jobs = new Array();
        this.job = new job_1.Job();
    }
    AdminComponent /*implements OnInit*/.prototype.addJob = function () {
        this.jobForm = !this.jobForm;
    };
    AdminComponent /*implements OnInit*/.prototype.onAdd = function (job) {
        var _this = this;
        var postJob = this.jobappService.postJob(job)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () { _this.jobForm = false; });
    };
    AdminComponent /*implements OnInit*/ = __decorate([
        core_1.Component({
            selector: 'admin',
            templateUrl: 'app/Admin/admin.component.html',
            providers: [jobapp_service_1.JobAppService]
        }), 
        __metadata('design:paramtypes', [jobapp_service_1.JobAppService])
    ], AdminComponent /*implements OnInit*/);
    return AdminComponent /*implements OnInit*/;
}());
exports.AdminComponent /*implements OnInit*/ = AdminComponent /*implements OnInit*/;
//# sourceMappingURL=admin.component.js.map