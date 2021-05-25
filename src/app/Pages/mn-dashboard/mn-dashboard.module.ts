import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyComponent } from './daily/daily.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { ChartsModule } from 'ng2-charts';
import { GaugeChartModule } from 'angular-gauge-chart';
import { RouterModule, Routes } from '@angular/router';
import { MnRoutingModule } from './mn-dashboard-routing.module';
import { MonthlyComponent } from './monthly/monthly.component';
import { NgxChartsModule} from '@swimlane/ngx-charts'
import { FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { Week01Component } from './weekly/week01/week01.component';
import { Week02Component } from './weekly/week02/week02.component';
import { Week03Component } from './weekly/week03/week03.component';
import { Week04Component } from './weekly/week04/week04.component';


@NgModule({
  declarations: [
    DailyComponent,
    WeeklyComponent,
    MonthlyComponent,
    WeeklyComponent,
    Week01Component,
    Week02Component,
    Week03Component,
    Week04Component
  ],
  imports: [
    CommonModule,
    ChartsModule,
    GaugeChartModule,
    RouterModule,
    MnRoutingModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})

export class MnDashboardModule { }
