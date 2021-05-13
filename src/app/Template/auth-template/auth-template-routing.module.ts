import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../Pages/home/home.component';
import { GeneralJournalComponent } from '../../Pages/Finance/general-journal/general-journal.component';
import { MnDashboardComponent } from '../../Pages/mn-dashboard/mn-dashboard.component';
import { OpDashboardComponent } from '../../Pages/op-dashboard/op-dashboard.component';
import { SearchComponent } from '../../Pages/search/search.component';

const Authroute: Routes = [
  { path:'',                component: HomeComponent},
  { path:'home',                 component: HomeComponent,
    children: 
    [ { path:'generaljournal',  component: GeneralJournalComponent},
      { path:'managerdashboard',     component: MnDashboardComponent},
      { path:'operatordashboard',     component: OpDashboardComponent},
      { path:'search',          component: SearchComponent},
    ]}
   
 ];

@NgModule({
  imports: [RouterModule.forChild(Authroute)],
  exports: [RouterModule]
})
export class AuthTemplateRoutingModule { }
