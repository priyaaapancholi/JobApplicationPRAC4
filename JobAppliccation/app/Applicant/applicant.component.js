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
var applicationuser_1 = require('./../Applicant/applicationuser');
var apply_1 = require('./../Apply/apply');
var ApplicantComponent = (function () {
    function ApplicantComponent(jobappService) {
        this.jobappService = jobappService;
        this.japply = false;
        this.jobs = new Array();
        this.job = new job_1.Job();
        this.applicants = new Array();
        this.applicant = new applicationuser_1.ApplicationUser();
        this.applies = new Array();
        this.apply = new apply_1.Apply();
    }
    ApplicantComponent.prototype.ngOnInit = function () {
        this.viewJobs();
    };
    ApplicantComponent.prototype.viewJobs = function () {
        var _this = this;
        var displayJob = this.jobappService.getJobDetail()
            .subscribe(function (jobs) {
            _this.jobs = jobs;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    ApplicantComponent.prototype.onApply = function (jobId) {
        this.jId = jobId;
        this.japply = true;
    };
    ApplicantComponent = __decorate([
        core_1.Component({
            selector: 'applicant',
            templateUrl: 'app/Applicant/applicant.component.html',
            providers: [jobapp_service_1.JobAppService]
        }), 
        __metadata('design:paramtypes', [jobapp_service_1.JobAppService])
    ], ApplicantComponent);
    return ApplicantComponent;
}());
exports.ApplicantComponent = ApplicantComponent;
//# sourceMappingURL=applicant.component.js.map