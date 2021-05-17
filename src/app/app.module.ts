
import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, } from '@angular/common';

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

import { ChartsModule } from 'ng2-charts';


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
    BrowserModule,
    AppRoutingModule,
   
    
    //This module call by app module
    AuthTemplateModule,
    ChartsModule,
    CommonModule,
    RouterModule,
    BrowserModule,
  
    NgbModule,

    ComponentsModule,    
    HttpClientModule, BrowserAnimationsModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
