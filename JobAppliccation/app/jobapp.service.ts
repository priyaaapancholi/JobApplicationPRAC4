import { Injectable }     from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Job }          from './Job/job';
import { ApplicationUser }     from './Applicant/applicationuser';
import { Apply }          from './Apply/apply';
import 'rxjs/add/operator/map';






@Injectable()
export class JobAppService {
    private jobUrl = 'api/Jobs';
    //private productUrl = 'api/Products';
    //private followUrl = 'api/Follows';
    //private owner1Url = 'api/Owners1';
    constructor(private http: Http) { }


    postJob(job: Job) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.jobUrl, JSON.stringify(job), { headers: headers })
           
    }


    getJobDetail() {

        return this.http.get(this.jobUrl).map(response => response.json());
    }



    //postJobData(applicantId: string) {

    //    let headers = new Headers({
    //        'Content-Type': 'application/json'
    //    });

    //    return this.http
    //        .post(this.jobUrl, JSON.stringify(job), { headers: headers })
    //}

}