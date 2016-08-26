import { Component, OnInit } from '@angular/core';
import { Job }          from './../Job/job';
import { JobAppService }from './../jobapp.service';
import { ApplicationUser}          from './../Applicant/applicationuser';
import { Apply }          from './../Apply/apply';

@Component({
    selector: 'applicant',
    templateUrl: 'app/Applicant/applicant.component.html',
    providers: [JobAppService]
})



export class ApplicantComponent implements OnInit {

    jobs: Array<Job>;
    job: Job;

    applicants: Array<ApplicationUser>;
    applicant: ApplicationUser;

    applies: Array<Apply>;
    apply: Apply;

    errorMessage: string;
    jId: number;
    japply: boolean = false;

    constructor(private jobappService: JobAppService) {
        this.jobs = new Array<Job>();
        this.job = new Job();

        this.applicants = new Array<ApplicationUser>();
        this.applicant = new ApplicationUser();

        this.applies = new Array<Apply>();
        this.apply = new Apply();
    }

    ngOnInit() {

        this.viewJobs();
    }


    viewJobs() {

        var displayJob = this.jobappService.getJobDetail()
            .subscribe((jobs) => {
                this.jobs = jobs
               
            }, err => {
                this.errorMessage = err;
            });
    }


   
    onApply(jobId: number) {
        this.jId=jobId
        this.japply = true;

    }


    //applyForJob(applicantId: string) {
    //    this.apply.ApplyId = this.jId;
    //    var postJobData = this.jobappService.postJobData(applicantId)
    //        .subscribe(
    //        function (response) { console.log("Success Response" + response) },
    //        function (error) { console.log("Error happened" + error) },
    //        () => { this.japply = false; }

    //        );   
    //}

}