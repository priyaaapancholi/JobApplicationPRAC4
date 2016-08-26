import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ApplicantComponent } from './Applicant/applicant.component';
import { AdminComponent } from './Admin/admin.component';

//import { appRouterProviders } from './route';
import { HTTP_PROVIDERS } from '@angular/http';
bootstrap(ApplicantComponent, [HTTP_PROVIDERS]);
bootstrap(AdminComponent, [HTTP_PROVIDERS]);
