
import { ComponentsModule } from './../../Layouts/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthTemplateRoutingModule } from './auth-template-routing.module';
import { AuthTemplateComponent } from '../auth-template/auth-template.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SearchModule } from 'src/app/Pages/search/search.module';
import { FinanceModule } from 'src/app/Pages/Finance/finance.module';
import { HomeComponent } from 'src/app/Pages/home/home.component';
import { ChartsModule } from 'ng2-charts';
import { GaugeChartModule } from 'angular-gauge-chart';
import { OpDashboardComponent } from 'src/app/Pages/op-dashboard/op-dashboard.component';
import { MnDashboardModule } from 'src/app/Pages/mn-dashboard/mn-dashboard.module';
import { MnDashboardComponent } from 'src/app/Pages/mn-dashboard/mn-dashboard.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthTemplateComponent,
    // FooterComponent,
    // NavbarComponent,
    // SidebarComponent
    //GeneralJournalComponent,
    HomeComponent,
    //import component to this module below

    MnDashboardComponent,
    OpDashboardComponent
    
  ],
  imports: [   
    
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,  

    // AuthTemplateModule call this modeul below
    ChartsModule,
    NgxChartsModule,
    FormsModule,
    FinanceModule,
    SearchModule,
    AuthTemplateRoutingModule,    
    ComponentsModule,
    GaugeChartModule,
    MnDashboardModule
  ],
  exports:[
    AuthTemplateComponent
  ]
})
  //this module name AuthTemplateModule
export class AuthTemplateModule { }
