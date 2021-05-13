import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthTemplateRoutingModule } from './auth-template-routing.module';
import { AuthTemplateComponent } from '../auth-template/auth-template.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AuthTemplateComponent,
  
  ],
  imports: [   
    CommonModule,
    AuthTemplateRoutingModule,
    HttpClientModule
  ]
})
export class AuthTemplateModule { }
