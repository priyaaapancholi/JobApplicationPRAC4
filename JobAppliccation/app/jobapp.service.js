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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var JobAppService = (function () {
    //private productUrl = 'api/Products';
    //private followUrl = 'api/Follows';
    //private owner1Url = 'api/Owners1';
    function JobAppService(http) {
        this.http = http;
        this.jobUrl = 'api/Jobs';
    }
    JobAppService.prototype.postJob = function (job) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.jobUrl, JSON.stringify(job), { headers: headers });
    };
    JobAppService.prototype.getJobDetail = function () {
        return this.http.get(this.jobUrl).map(function (response) { return response.json(); });
    };
    JobAppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], JobAppService);
    return JobAppService;
}());
exports.JobAppService = JobAppService;
//# sourceMappingURL=jobapp.service.js.map