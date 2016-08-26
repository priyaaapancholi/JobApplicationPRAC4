"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var applicant_component_1 = require('./Applicant/applicant.component');
var admin_component_1 = require('./Admin/admin.component');
//import { appRouterProviders } from './route';
var http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(applicant_component_1.ApplicantComponent, [http_1.HTTP_PROVIDERS]);
platform_browser_dynamic_1.bootstrap(admin_component_1.AdminComponent, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map