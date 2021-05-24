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


@NgModule({
  declarations: [
    DailyComponent,
    WeeklyComponent,
    MonthlyComponent,
  ],
  imports: [
    CommonModule,
    ChartsModule,
    GaugeChartModule,
    RouterModule,
    MnRoutingModule,
    FormsModule,
    NgxChartsModule
  ],
  exports: [RouterModule]
})

export class MnDashboardModule { }
