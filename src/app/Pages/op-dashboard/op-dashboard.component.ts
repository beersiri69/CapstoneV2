import { Pivalue } from './../../Model/pivalue.Model';

import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';

import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { formatDate } from '@angular/common';
import { PivalueService } from 'src/app/Service/pivalue.service';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'DD MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-OperatorDashboard',
  templateUrl: './op-dashboard.component.html',
  styleUrls: ['./op-dashboard.component.scss'],
  providers: [{
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  }, { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})

export class OpDashboardComponent implements OnInit {
  AmountG: any | undefined;
  AmountD: any | undefined;
  TruckIn: any | undefined;
  TruckOut: any | undefined;
  GFail: any | undefined;
  DFail: any | undefined;
  Cycle: any | undefined;

  A1: number;
  A2: number;
  A3: number;
  A4: number;
  A5: number;
  A6: number;
  P1: number;
  P2: number;
  P3: number;
  P4: number;
  P5: number;
  P6: number;
  Q1: number;
  Q2: number;
  Q3: number;
  Q4: number;
  Q5: number;
  Q6: number;
  GBusy: number;
  DBusy: number;
  NOQ1: any;
  NOQ2: any;
  NOQ3: any;
  NOQ4: any;
  NOQ5: any;
  TQ1: any;
  TQ2: any;
  TQ3: any;
  TQ4: any;
  TQ5: any;
  WIP1: number;
  WIP2: number;
  WIP3: number;
  WIP4: number;
  WIP5: number;
  WIPD1: number;
  WIPD2: number;
  WIPD3: number;
  WIPD4: number;
  WIPD5: number;

  PivalueAll: Pivalue[] | undefined;

  Donut_Diesel: MultiDataSet;
  Donut_Gasohol: MultiDataSet;
  Donut_NOQ: MultiDataSet;
  Donut_TQ: MultiDataSet;
  chartData: any;

  constructor(private pivalueService: PivalueService) {}

  //TODO: EDIT TO FLASE

  date = new FormControl(moment([2018, 2, 1]));
  YearTok:string
  MonthTok:String
  DateSearch:string

  public CanRender = false;
  public CanRender2 = false;
  public CanRender3 = false;
  ngOnInit() {
    this.GetDashboardValue1('2018-03-01');
    this.GetDashboardValue3('2018-03-01');
  }

  
  addEvent(event: MatDatepickerInputEvent<Date>) {
    var DatePick = formatDate(event.value, 'yyyy-MM-dd', 'en-US');
    this.GetDashboardValue1(DatePick);
    //this.GetDashboardValue2(DatePick);
  }

  GetDashboardValue1(DateSend) {
    this.pivalueService.GetAmoutG(DateSend).subscribe((data) => {
      this.PivalueAll = data.result;
      this.AmountG = parseFloat(Number(this.AmountG = this.PivalueAll[0].Item1).toFixed(4)).toLocaleString("en");

      this.pivalueService.GetAmoutD(DateSend).subscribe((data) => {
        this.PivalueAll = data.result;
        this.AmountD = parseFloat(Number(this.PivalueAll[0].Item1).toFixed(4)).toLocaleString("en");

        this.pivalueService.GetTruckIn(DateSend).subscribe((data) => {
          this.PivalueAll = data.result;
          this.TruckIn = parseFloat(Number(this.PivalueAll[0].Item1).toFixed(4)).toLocaleString("en");

          this.pivalueService.GetTruckOut(DateSend).subscribe((data) => {
            this.PivalueAll = data.result;
            this.TruckOut = parseFloat(Number(this.PivalueAll[0].Item1).toFixed(4)).toLocaleString("en");

            this.pivalueService.GetGFail(DateSend).subscribe((data) => {
              this.PivalueAll = data.result;
              this.DFail = parseFloat(Number(this.PivalueAll[0].Item1).toFixed(4)).toLocaleString("en");

              this.pivalueService.GetDFail(DateSend).subscribe((data) => {
                this.PivalueAll = data.result;
                this.GFail = parseFloat(Number(this.PivalueAll[0].Item1).toFixed(4)).toLocaleString("en");

                this.pivalueService.GetCycle(DateSend).subscribe((data) => {
                  this.PivalueAll = data.result;
                  this.Cycle = parseFloat(Number(this.PivalueAll[0].Item1).toFixed(4)).toLocaleString("en");

                  this.pivalueService.GetWIPD(DateSend).subscribe((data) => {
                    this.PivalueAll = data.result;

                    this.WIPD1 = Number(this.PivalueAll[0].Item1);
                    this.WIPD2 = Number(this.PivalueAll[1].Item1);
                    this.WIPD3 = Number(this.PivalueAll[2].Item1);
                    this.WIPD4 = Number(this.PivalueAll[3].Item1);
                    this.WIPD5 = Number(this.PivalueAll[4].Item1);
                    //TODO ==========================================================================================  Bar Chart
                    this.chartData = [
                      {
                        data: [this.WIPD1],
                        label: 'SO station',
                        fill: false,
                      },
                      {
                        data: [this.WIPD2],
                        label: 'IB station',
                        fill: false,
                      },
                      {
                        data: [this.WIPD3],
                        label: 'DB station',
                        fill: false,
                      },
                      {
                        data: [this.WIPD4],
                        label: 'GB station',
                        fill: false,
                      },
                      {
                        data: [this.WIPD5],
                        label: 'OB station',
                        fill: false,
                      },
                    ];

                    this.CanRender = true;
                    this.GetDashboardValue3(DateSend);
                  });
                });
              });
            });
          });
        });
      });
    });
  }

  barChartData: ChartDataSets[];

  GetDashboardValue2(DateSend) {
    this.pivalueService.GetAPQSumAPI(DateSend).subscribe((data) => {
      this.PivalueAll = data.result;
      //console.log(this.PivalueAll);

      this.A1 = Number(this.PivalueAll[0].Item1);
      this.A2 = Number(this.PivalueAll[1].Item1);
      this.A3 = Number(this.PivalueAll[2].Item1);
      this.A4 = Number(this.PivalueAll[3].Item1);
      this.A5 = Number(this.PivalueAll[4].Item1);
      this.A6 = Number(this.PivalueAll[5].Item1);

      this.P1 = Number(this.PivalueAll[6].Item1);
      this.P2 = Number(this.PivalueAll[7].Item1);
      this.P3 = Number(this.PivalueAll[8].Item1);
      this.P4 = Number(this.PivalueAll[9].Item1);
      this.P5 = Number(this.PivalueAll[10].Item1);
      this.P6 = Number(this.PivalueAll[11].Item1);

      this.Q1 = Number(this.PivalueAll[12].Item1);
      this.Q2 = Number(this.PivalueAll[13].Item1);
      this.Q3 = Number(this.PivalueAll[14].Item1);
      this.Q4 = Number(this.PivalueAll[15].Item1);
      this.Q5 = Number(this.PivalueAll[16].Item1);
      this.Q6 = Number(this.PivalueAll[17].Item1);
      this.pivalueService.GBusy(DateSend).subscribe((data) => {
        this.PivalueAll = data.result;
        this.GBusy = Number(this.PivalueAll[0].Item1);
      
        this.pivalueService.DBusy(DateSend).subscribe((data) => {
          this.PivalueAll = data.result;
          this.DBusy = Number(this.PivalueAll[0].Item1);
          //TODO ==========================================================================================  2 Donut
          this.Donut_Diesel = [[this.GBusy, this.DBusy]];
          this.Donut_Gasohol = [[this.DBusy, this.GBusy]];
          this.CanRender2 = true;
          
        });
      });
       //TODO ==========================================================================================  Bar Chart APQ
      this.barChartData = [
        {
          data: [this.A1, this.P1, this.Q1],
          label: 'SALE OFFICE',
        },
        {
          data: [this.A2, this.P2, this.Q2],
          label: 'INBOUND WEIGHBRIDGE',
        },
        {
          data: [this.A3, this.P3, this.Q3],
          label: 'DIESEL BAY',
        },
        {
          data: [this.A4, this.P4, this.Q4],
          label: 'GASOHOL95 BAY',
        },
        {
          data: [this.A5, this.P5, this.Q5],
          label: 'OUTBOUND WEIGHBRIDGE',
        },
        {
          data: [this.A6, this.P6, this.Q6],
          label: 'OUTBOUND WEIGHBRIDGE',
        },
      ];

  
    });
  }

  GetDashboardValue3(DateSend) {
    this.pivalueService.GetAVGTQD(DateSend).subscribe((data) => {
      this.PivalueAll = data.result;

      this.TQ1 = parseFloat(Number(this.PivalueAll[0].Item1).toFixed(4)).toLocaleString("en");
      this.TQ2 = parseFloat(Number(this.PivalueAll[1].Item1).toFixed(4)).toLocaleString("en");
      this.TQ3 = parseFloat(Number(this.PivalueAll[2].Item1).toFixed(4)).toLocaleString("en");
      this.TQ4 = parseFloat(Number(this.PivalueAll[3].Item1).toFixed(4)).toLocaleString("en");
      this.TQ5 = parseFloat(Number(this.PivalueAll[4].Item1).toFixed(4)).toLocaleString("en");
      this.Donut_TQ = [[this.TQ1, this.TQ2, this.TQ3, this.TQ4, this.TQ5]];
      //TODO ==========================================================================================  2 Donut
      this.pivalueService.GetAVGNOQD(DateSend).subscribe((data) => {
        this.PivalueAll = data.result;

        this.NOQ1 = parseFloat(Number(this.PivalueAll[0].Item1).toFixed(4)).toLocaleString("en");
        this.NOQ2 = parseFloat(Number(this.PivalueAll[1].Item1).toFixed(4)).toLocaleString("en");
        this.NOQ3 = parseFloat(Number(this.PivalueAll[2].Item1).toFixed(4)).toLocaleString("en");
        this.NOQ4 = parseFloat(Number(this.PivalueAll[3].Item1).toFixed(4)).toLocaleString("en");
        this.NOQ5 = parseFloat(Number(this.PivalueAll[4].Item1).toFixed(4)).toLocaleString("en");
        //TODO ==========================================================================================  2 Donut
        this.Donut_NOQ = [
          [this.NOQ1, this.NOQ2, this.NOQ3, this.NOQ4, this.NOQ5],
        ];
       

        this.CanRender3 = true;
      });
    });
  }


  ///////////////////////// FIRST DONUT /////////////////////////
  //TODO Donut1
  public doughnutChartLabels: Label[] = [
    'SO station',
    'IB station',
    'DB station',
    'GB station',
    'OB station',
  ];
  public doughnutChartData: MultiDataSet = [[350, 450, 100, 700, 95]];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColors: Color[] = [
    {
      backgroundColor: ['#f6af3a', '#ffcf83', '#ffe6c4', '#b99c7e', '#7f5c46'],
    },
  ];
  //TODO Donut2
  ///////////////////////// SECOND DONUT /////////////////////////
  public doughnutChartLabels2: Label[] = [
    'SO station',
    'IB station',
    'DB station',
    'GB station',
    'OB station',
  ];
  public doughnutChartData2: MultiDataSet = [[450, 200, 100, 200, 750]];
  public doughnutChartType2: ChartType = 'doughnut';

  public doughnutChartColors2: Color[] = [
    {
      backgroundColor: ['#f6af3a', '#ffcf83', '#ffe6c4', '#b99c7e', '#7f5c46'],
    },
  ];

  ///////////////////////// %OEE /////////////////////////

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [
    '%A (AVAILABILITY)',
    '%P (PERFORMANCE)',
    '%Q (QUALITY)',
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartColors: Color[] = [
    { backgroundColor: '#ffa410' },
    { backgroundColor: '#ffcf83' },
    { backgroundColor: '#ffe6c4' },
    { backgroundColor: '#b99c7e' },
    { backgroundColor: '#7f5c46' },
    { backgroundColor: '#c1d6e1' },
  ];

  ///////////////////////// WIP /////////////////////////

  //TODO

  chartLabels: Label[] = [
    // อยากให้ขึ้นเป็น day / week / month ที่เลือกจะดู

    '12:00',
  ];
  chartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: 'white',
      },
    },
  };
  // ...
  onChartHover = ($event: any) => {
    window.console.log('onChartHover', $event);
  };
  onChartClick = ($event: any) => {
    window.console.log('onChartClick', $event);
  };

  newDataPoint(dataArr = [100, 100, 100], label) {
    this.chartData.forEach((dataset, index) => {
      this.chartData[index] = Object.assign({}, this.chartData[index], {
        data: [...this.chartData[index].data, dataArr[index]],
      });
    });

    this.chartLabels = [...this.chartLabels, label];
  }

  ///////////////////////// BUSY I /////////////////////////

  public doughnutChartLabels3: Label[] = ['DIESEL', 'Other'];
  public doughnutChartType3: ChartType = 'doughnut';
  public doughnutChartColors3: Color[] = [
    { backgroundColor: ['#ab3d30', '#e7e7e7'] },
  ];

  ///////////////////////// BUSY II /////////////////////////

  public doughnutChartLabels4: Label[] = ['GASOHOL95', 'Other'];
  public doughnutChartType4: ChartType = 'doughnut';
  public doughnutChartColors4: Color[] = [
    { backgroundColor: ['#460707', '#e7e7e7'] },
  ];
}
