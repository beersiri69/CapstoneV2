import { RouterModule, Routes, Router } from '@angular/router';
import { Component, OnInit, NgModule } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets, } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';

interface botton{
  Name: string;
  Route: string;
}

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.scss'],
  providers: [{
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  }, { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})

export class WeeklyComponent implements OnInit {

  ///////////////////////// BUTTON /////////////////////////

  Menu_Title:string[];
  Router_List:string[];
  public PropChange : any[];

  constructor(private router: Router) {
    this.Menu_Title=[
      "WEEK01",
      "WEEK02",
      "WEEK03",
      "WEEK04"
    ]
    this.Router_List=[
      "WEEK01",
      "WEEK02",
      "WEEK03",
      "WEEK04"
    ]
   }
  
//OLD one
  pages: botton[] = [
    {Name: 'WEEK01', Route: 'WEEK01'},
    {Name: 'WEEK02', Route: 'WEEK02'},
    {Name: 'WEEK03', Route: 'WEEK03'},
    {Name: 'WEEK04', Route: 'WEEK04'},
  ];

  ngOnInit(): void {
    this.PropChange = ["btn-menu","btn-menu","btn-menu","btn-menu"]
  }

  check(e){
    var target = e.target || e.srcElement || e.currentTarget
    var x = target.id
    for ( let i in this.PropChange){
      this.PropChange[i] = "btn-menu"
    }
    this.PropChange[x] = "btn-sel"
  }

  navigateTo(value){
    //console.log(value);
    this.router.navigate(['managerdashboard/',value]);
  
  }

  ///////////////////////// CARLENDAR /////////////////////////

  date = new FormControl(moment());

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }

  ///////////////////////// FIRST DONUT /////////////////////////

  public doughnutChartLabels: Label[] = ['SO station', 'IB station', 'DB station', 'GB station', 'OB station'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 700, 95]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColors: Color[] = [
    { backgroundColor: ["#f6af3a", "#ffcf83", "#ffe6c4", "#b99c7e", "#7f5c46"] }
  ];


  ///////////////////////// SECOND DONUT /////////////////////////

  public doughnutChartLabels2: Label[] = ['SO station', 'IB station', 'DB station', 'GB station', 'OB station'];
  public doughnutChartData2: MultiDataSet = [
    [450, 200, 100, 200, 750]
  ];
  public doughnutChartType2: ChartType = 'doughnut';

  public doughnutChartColors2: Color[] = [
    { backgroundColor: ["#f6af3a", "#ffcf83", "#ffe6c4", "#b99c7e", "#7f5c46"] }
  ];


  ///////////////////////// %OEE /////////////////////////

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['%A (AVAILABILITY)', '%P (PERFORMANCE)', '%Q (QUALITY)'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    {
      data: [33, 60, 26],
      label: 'DIESEL BAY 1',
    },
    {
      data: [12, 45, 30],
      label: 'DIESEL BAY 2'
    },
    {
      data: [45, 57, 60],
      label: 'GASOHOL95 BAY 1'
    },
    {
      data: [14, 32, 15],
      label: 'GASOHOL95 BAY 2'
    },
    {
      data: [60, 63, 25],
      label: 'GASOHOL95 BAY 3'
    },
    {
      data: [60, 63, 25],
      label: 'GASOHOL95 BAY 4'
    },
  ];

  public barChartColors: Color[] = [
    { backgroundColor: '#ffa410' },
    { backgroundColor: '#ffcf83' },
    { backgroundColor: '#ffe6c4' },
    { backgroundColor: '#b99c7e' },
    { backgroundColor: '#7f5c46' },
    { backgroundColor: '#c1d6e1' },
  ]



  ///////////////////////// SCHEDULE UTILIZATION /////////////////////////

  public barChartOptions2: ChartOptions = {
    responsive: true,
  };
  public barChartLabels2: Label[] = [];
  public barChartType2: ChartType = 'horizontalBar';
  public barChartLegend2 = true;

  public barChartData2: ChartDataSets[] = [
    {
      data: [33, 60, 26],
      label: 'SALE OFFICE',
    },
    {
      data: [12, 45, 30],
      label: 'INBOUND WEIGHTBRIDGE'
    },
    {
      data: [45, 57, 60],
      label: 'DIESEL BAY'
    },
    {
      data: [14, 32, 15],
      label: 'GASOHOL95 BAY'
    },
    {
      data: [60, 63, 25],
      label: 'OUTBOUND WEIGHTBRIDGE'
    },
  ];

  public barChartColors2: Color[] = [
    { backgroundColor: '#d6cfcb' },
    { backgroundColor: '#ccb7ae' },
    { backgroundColor: '#96808c' },
    { backgroundColor: '#706677' },
    { backgroundColor: '#565264' },
  ]



  ///////////////////////// WIP /////////////////////////

  chartData = [
    {
      data: [33],
      label: 'SO station',
      fill: false,
    },
    {
      data: [12],
      label: 'IB station',
      fill: false,
    },
    {
      data: [70],
      label: 'DB station',
      fill: false,
    },
    {
      data: [5],
      label: 'GB station',
      fill: false,
    },
    {
      data: [90],
      label: 'OB station',
      fill: false,
    },
  ];
  chartLabels: Label[] = [
  ];
  chartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: 'white'
      }
    }

  };

  onChartHover = ($event: any) => {
    window.console.log('onChartHover', $event);
  };
  onChartClick = ($event: any) => {
    window.console.log('onChartClick', $event);
  };



  newDataPoint(dataArr = [100, 100, 100], label) {
    this.chartData.forEach((dataset, index) => {
      this.chartData[index] = Object.assign({}, this.chartData[index], {
        data: [...this.chartData[index].data, dataArr[index]]
      });
    });

    this.chartLabels = [...this.chartLabels, label];
  }



  ///////////////////////// BUSY I /////////////////////////

  public doughnutChartLabels3: Label[] = ['DIESEL', 'Other'];
  public doughnutChartData3: MultiDataSet = [
    [900, 450]
  ];
  public doughnutChartType3: ChartType = 'doughnut';
  public doughnutChartColors3: Color[] = [
    { backgroundColor: ["#ab3d30", "#e7e7e7"] }
  ];

  ///////////////////////// BUSY II /////////////////////////

  public doughnutChartLabels4: Label[] = ['GASOHOL95', 'Other'];
  public doughnutChartData4: MultiDataSet = [
    [450, 900]
  ];
  public doughnutChartType4: ChartType = 'doughnut';
  public doughnutChartColors4: Color[] = [
    { backgroundColor: ["#460707", "#e7e7e7"] }
  ];

}
