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
@NgModule({
  declarations: [
    AuthTemplateComponent,
    // FooterComponent,
    // NavbarComponent,
    // SidebarComponent
    GeneralJournalComponent,
  ],
  imports: [   
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,   
    SearchModule,
    AuthTemplateRoutingModule,  
   
    
    
    ComponentsModule,
    
  ],
  exports:[
    AuthTemplateComponent
  ]
})
export class AuthTemplateModule { }
