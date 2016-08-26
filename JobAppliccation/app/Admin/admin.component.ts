import { Component/*, OnInit*/ } from '@angular/core';
import { Job }          from './../Job/job';
import { JobAppService }from './../jobapp.service';



@Component({
    selector: 'admin',
    templateUrl: 'app/Admin/admin.component.html',
    providers: [JobAppService]
    
})





export class AdminComponent /*implements OnInit*/ {

    jobs: Array<Job>;
    job: Job;


    errorMessage: string;
    constructor(private jobappService: JobAppService) {
        this.jobs = new Array<Job>();
        this.job = new Job();
    }

    //ngOnInit() {
        

    //}

    jobForm: boolean = false;
    addJob(): void {
        this.jobForm = !this.jobForm;
    }



    onAdd(job:Job) {
        var postJob= this.jobappService.postJob(job)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => { this.jobForm = false; }

            );   

    }

   
}