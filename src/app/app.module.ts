
import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, } from '@angular/common';
import { ChartModule  } from 'angular2-chartjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule,  } from '@angular/router';
import { ComponentsModule } from './Layouts/components.module'

import { HttpClientModule } from '@angular/common/http';

import { AuthTemplateModule } from './Template/auth-template/auth-template.module';

import { SearchComponent } from './Pages/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleComponent } from './example/example.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { ExampleModule } from './example/example.module';







@NgModule({
  declarations: [
    ExampleComponent,
    AppComponent,
    SearchComponent,
    ExampleComponent,
    LoginComponent,
    
  ],
  imports: [ 
    AppRoutingModule,
   
    //SearchModule,
    AuthTemplateModule,

    CommonModule,
    RouterModule,
    BrowserModule,
    
    ExampleModule,

    NgbModule,
    FormsModule,
    ChartModule,   
    ComponentsModule,    
    HttpClientModule, BrowserAnimationsModule,
    NgxChartsModule,
    
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    MatNativeDateModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
