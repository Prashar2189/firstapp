import { Routes } from '@angular/router';
import { HomedataComponent } from './about/homedata/homedata/homedata.component';
import { AboutdataComponent } from './about/aboutdata/aboutdata.component';
import { ServicedataComponent } from './about/servicedata/servicedata.component';
import { TechnodataComponent } from './about/technodata/technodata/technodata.component';
import { HiredataComponent } from './about/hiredata/hiredata/hiredata.component';
import { CareerdataComponent } from './about/careerdata/careerdata/careerdata.component';
import { ContactdataComponent } from './about/contactdata/contactdata/contactdata.component';



export const routes: Routes = [
   {
      path:"",
      component: HomedataComponent,
      pathMatch: 'full',
      data: { title: 'Home | Appsimity Solutions' }
   },



{
    path:"about-page",
    component: AboutdataComponent,
    data: { title: 'About | Appsimity Solutions' }
},
 {
    path:"service-page",
    component: ServicedataComponent,
    data: { title: 'Services | Appsimity Solutions' }
 },

 {
    path:"techno-page",
    component: TechnodataComponent,
    data: { title: 'Technologies | Appsimity Solutions' }
 },

 {
    path:"hire-page",
    component: HiredataComponent,
    data: { title: 'Hire Team | Appsimity Solutions' }
 },

 {
    path:"career-page",
    component: CareerdataComponent
 },
 
 {
    path:"contact-data",
    component: ContactdataComponent
 },

 { path: '**', redirectTo: '' }
 

];
