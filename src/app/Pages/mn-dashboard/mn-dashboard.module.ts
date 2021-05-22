import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyComponent } from './daily/daily.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { ChartsModule } from 'ng2-charts';
import { GaugeChartModule } from 'angular-gauge-chart';
import { RouterModule, Routes } from '@angular/router';
import { MnRoutingModule } from './mn-dashboard-routing.module';


@NgModule({
  declarations: [
    DailyComponent,
    WeeklyComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    GaugeChartModule,
    RouterModule,
    MnRoutingModule
  ],
  exports: [RouterModule]
})

export class MnDashboardModule { }
