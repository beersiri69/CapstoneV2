import { ComponentsModule } from './Layouts/components.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthTemplateComponent } from './Template/auth-template/auth-template.component'
import { HomeComponent } from './Pages/home/home.component';
import { GeneralJournalComponent } from './Pages/Finance/general-journal/general-journal.component';
import { MnDashboardComponent } from './Pages/mn-dashboard/mn-dashboard.component';
import { OpDashboardComponent } from './Pages/op-dashboard/op-dashboard.component';
import { SearchComponent } from './Pages/search/search.component';
const routes: Routes =[
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  } 
  ,{
    path: '',
    component: AuthTemplateComponent,
    children: 
    [ 
      { path:'home',           component: HomeComponent},
      { path:'generaljournal',  component: GeneralJournalComponent},
      { path:'managerdashboard',     component: MnDashboardComponent},
      { path:'operatordashboard',     component: OpDashboardComponent},
      { path:'search',          component: SearchComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
