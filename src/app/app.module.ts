
import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< Updated upstream
import { CommonModule, } from '@angular/common';
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
import { ChartModule  } from 'angular2-chartjs';
=======
import { CommonModule, } from '@angular/common';

>>>>>>> Stashed changes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule,  } from '@angular/router';
import { ComponentsModule } from './Layouts/components.module'

import {  HttpClientModule } from '@angular/common/http';

import { AuthTemplateModule } from './Template/auth-template/auth-template.module';
import { SearchModule } from './Pages/search/search.module';
import { SearchComponent } from './Pages/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
const appRoutes:Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full' },
  {path:"Home", component:HomeComponent},
  {path:"OperatorDashboard", component:OpDashboardComponent},
  {path:"ManagerDashboard", component:MnDashboardComponent},
  {path:"Search", component:SearchComponent},
  {path:"GeneralJournal", component:GeneralJournalComponent},
]
=======
import { ChartsModule } from 'ng2-charts';

>>>>>>> Stashed changes
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    SearchComponent,    
  ],
  imports: [ 
=======
<<<<<<< Updated upstream
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    OpDashboardComponent,
    MnDashboardComponent,
    SearchComponent,
    GeneralJournalComponent,

  ],
  imports: [
=======
    SearchComponent,    
  ],
  imports: [ 
    AppRoutingModule,
   
    
    //This module call by app module
    AuthTemplateModule,
    ChartsModule,
    CommonModule,
    RouterModule,
>>>>>>> Stashed changes
    BrowserModule,
>>>>>>> Stashed changes
    AppRoutingModule,
   
    //SearchModule,
    AuthTemplateModule,

    CommonModule,
    RouterModule,
    BrowserModule,
  
    NgbModule,
<<<<<<< Updated upstream
    ChartModule,   
=======
<<<<<<< Updated upstream
    ChartModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
=======

>>>>>>> Stashed changes
    ComponentsModule,    
    HttpClientModule, BrowserAnimationsModule,
    
   
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
