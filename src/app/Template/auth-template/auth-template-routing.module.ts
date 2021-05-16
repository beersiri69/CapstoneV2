import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../Pages/home/home.component';
import { GeneralJournalComponent } from '../../Pages/Finance/general-journal/general-journal.component';
import { MnDashboardComponent } from '../../Pages/mn-dashboard/mn-dashboard.component';
import { OpDashboardComponent } from '../../Pages/op-dashboard/op-dashboard.component';
import { SearchComponent } from '../../Pages/search/search.component';
import { StaffComponent } from 'src/app/Pages/search/staff/staff.component';
import { CustomerComponent } from 'src/app/Pages/search/customer/customer.component';
import { AuthTemplateComponent } from './auth-template.component';

const Authroute: Routes = [
  // { path:'',                component: HomeComponent},
  // { path:'home',                 component: HomeComponent,
  // //   children: 
  // //   [ { path:'generaljournal',  component: GeneralJournalComponent},
  // //     { path:'managerdashboard',     component: MnDashboardComponent},
  // //     { path:'operatordashboard',     component: OpDashboardComponent},
  // // ]
  // }
  // {
  //   path:'search' ,component: SearchComponent,
  //   children:[
  //   {path: 'staff' , component: StaffComponent},
  //   {path: 'customer' , component: CustomerComponent},  
  //   ] 
  // },,
  {
    path: '',
    component: AuthTemplateComponent,
    children: 
    [ 
      { path:'home',           component: HomeComponent},
      { path:'generaljournal',  component: GeneralJournalComponent},
      { path:'managerdashboard',     component: MnDashboardComponent},
      { path:'operatordashboard',     component: OpDashboardComponent},
      {
        path:'search' ,component: SearchComponent,
        children:[
          {path: 'staff' , component: StaffComponent},
          {path: 'customer' , component: CustomerComponent},  
        ] 
      },
      
    ]
  },
 
   
 ];

@NgModule({
  imports: [RouterModule.forChild(Authroute)],
  exports: [RouterModule]
})
export class AuthTemplateRoutingModule { }
