import { RouterModule } from '@angular/router';
import { ComponentsModule } from './../../Layouts/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthTemplateRoutingModule } from './auth-template-routing.module';
import { AuthTemplateComponent } from '../auth-template/auth-template.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GeneralJournalComponent } from '../../Pages/Finance/general-journal/general-journal.component';
import { SearchModule } from 'src/app/Pages/search/search.module';
import { FinanceModule } from 'src/app/Pages/Finance/finance.module';
import { HomeComponent } from 'src/app/Pages/home/home.component';
import { ChartsModule } from 'ng2-charts';
import { OpDashboardComponent } from 'src/app/Pages/op-dashboard/op-dashboard.component';

@NgModule({
  declarations: [
    AuthTemplateComponent,
    // FooterComponent,
    // NavbarComponent,
    // SidebarComponent
    //GeneralJournalComponent,
    HomeComponent,
    //import component to this module below


    OpDashboardComponent
    
  ],
  imports: [   
    
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,  

    // AuthTemplateModule call this modeul below
    ChartsModule,
    FinanceModule,
    SearchModule,
    AuthTemplateRoutingModule,  
    
    
    ComponentsModule,
    
  ],
  exports:[
    AuthTemplateComponent
  ]
})
  //this module name AuthTemplateModule
export class AuthTemplateModule { }
