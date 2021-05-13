import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule  } from 'angular2-chartjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './Layouts/components.module'
import { AuthTemplateComponent } from './Template/auth-template/auth-template.component';
import { CommonModule, } from '@angular/common';
import {HomeComponent} from './Pages/home/home.component'
import {OpDashboardComponent} from './Pages/op-dashboard/op-dashboard.component'
import {MnDashboardComponent} from './Pages/mn-dashboard/mn-dashboard.component'
import {SearchComponent} from './Pages/search/search.component'
import {GeneralJournalComponent} from './Pages/Finance/general-journal/general-journal.component'


@NgModule({
  declarations: [
    AppComponent,
    AuthTemplateComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ChartModule,   
    ComponentsModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
