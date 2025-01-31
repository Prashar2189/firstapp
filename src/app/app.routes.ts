import { Routes } from '@angular/router';
import { AboutdataComponent } from './about/aboutdata/aboutdata.component';
import { ServicedataComponent } from './about/servicedata/servicedata.component';
import { TechnodataComponent } from './about/technodata/technodata/technodata.component';
import { HiredataComponent } from './about/hiredata/hiredata/hiredata.component';
import { CareerdataComponent } from './about/careerdata/careerdata/careerdata.component';
import { ContactdataComponent } from './about/contactdata/contactdata/contactdata.component';

export const routes: Routes = [
{
    path:"about-page",
    component: AboutdataComponent
},
 {
    path:"service-page",
    component: ServicedataComponent
 },

 {
    path:"techno-page",
    component: TechnodataComponent
 },

 {
    path:"hire-page",
    component: HiredataComponent
 },

 {
    path:"career-page",
    component: CareerdataComponent
 },
 
 {
    path:"contact-data",
    component: ContactdataComponent
 }
 

];
