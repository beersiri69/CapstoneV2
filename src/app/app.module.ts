
import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, } from '@angular/common';
import { ChartModule  } from 'angular2-chartjs';
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

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
    
  ],
  imports: [ 
    AppRoutingModule,
   
    //SearchModule,
    AuthTemplateModule,

    CommonModule,
    RouterModule,
    BrowserModule,
  
    NgbModule,
    ChartModule,   
    ComponentsModule,    
    HttpClientModule, BrowserAnimationsModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
