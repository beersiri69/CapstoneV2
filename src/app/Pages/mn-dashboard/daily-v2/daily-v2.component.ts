import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets, } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';
import { Pivalue } from 'src/app/Model/pivalue.Model';
import { PivalueService } from 'src/app/Service/pivalue.service';


import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {formatDate} from '@angular/common';

const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-daily-v2',
  templateUrl: './daily-v2.component.html',
  styleUrls: ['./daily-v2.component.scss']
})
export class DailyV2Component implements OnInit {

  AmountG: any | undefined;
  AmountD: any | undefined;
  TruckIn: any | undefined;
  TruckOut: any | undefined;
  GFail: any | undefined;
  DFail: any | undefined;
  Cycle: any | undefined;

  GBusy: number;
  DBusy: number;
  NOQ1: number;
  NOQ2: number;
  NOQ3: number;
  NOQ4: number;
  NOQ5: number;
  TQ1: number;
  TQ2: number;
  TQ3: number;
  TQ4: number;
  TQ5: number;

  WIPD1: number;
  WIPD2: number;
  WIPD3: number;
  WIPD4: number;
  WIPD5: number;

  U1:number
  U2:number
  U3:number
  U4:number
  U5:number

  WIPM: any|undefined
  PivalueAll: Pivalue[] | undefined;
  DieselBusyChart: MultiDataSet;
  GasoholBusyChart: MultiDataSet;
  Donut_NOQ: MultiDataSet;
  Donut_TQ: MultiDataSet;
  chartData: any;

  public CanRender = false;
 


  date = new FormControl(moment());
  YearTok:string
  MonthTok:Number
  DateSearch:string
  constructor(private pivalueService: PivalueService) {
  }

  ngOnInit(): void {
    this.GetDashboardValue1("2018-03-01");
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    var DatePick = formatDate(event.value, 'yyyy-MM-dd', 'en-US');
    this.GetDashboardValue1(DatePick);

  }
  GetDashboardValue1(DateSend) {
   
    this.pivalueService.GetWIPD(DateSend).subscribe(data =>{
      this.PivalueAll = data.result;
      this.WIPD1    =  Number(this.PivalueAll[0].Item1);
      this.WIPD2    =  Number(this.PivalueAll[1].Item1);
      this.WIPD3    =  Number(this.PivalueAll[2].Item1);
      this.WIPD4    =  Number(this.PivalueAll[3].Item1);
      this.WIPD5    =  Number(this.PivalueAll[4].Item1);

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

      this.pivalueService.GetAmountD(DateSend).subscribe(data =>{
        this.PivalueAll = data.result;

        this.AmountG  = this.PivalueAll[0].Item1
        this.AmountD  = this.PivalueAll[1].Item1
        this.TruckIn  = this.PivalueAll[2].Item1
        this.TruckOut = this.PivalueAll[3].Item1
        this.GFail    = this.PivalueAll[4].Item1
        this.DFail    = this.PivalueAll[5].Item1
        this.Cycle    = this.PivalueAll[6].Item1

        

        this.pivalueService.GetDonutD(DateSend).subscribe(data =>{
          this.PivalueAll = data.result;
            this.DBusy = Number(this.PivalueAll[0].Item1);
            this.GBusy = Number(this.PivalueAll[1].Item1);

            this.DieselBusyChart = [[this.GBusy, this.DBusy]];
            this.GasoholBusyChart = [[this.DBusy, this.GBusy]];

          this.pivalueService.GetQueueD(DateSend).subscribe(data =>{
            this.PivalueAll = data.result;
         

            this.NOQ1 = Number(this.PivalueAll[0].Item1);
            this.NOQ2 = Number(this.PivalueAll[1].Item1);
            this.NOQ3 = Number(this.PivalueAll[2].Item1);
            this.NOQ4 = Number(this.PivalueAll[3].Item1);
            this.NOQ5 = Number(this.PivalueAll[4].Item1);           
            this.Donut_NOQ = [[this.NOQ1, this.NOQ2, this.NOQ3, this.NOQ4, this.NOQ5]];

            this.TQ1 = Number(this.PivalueAll[5].Item1);
            this.TQ2 = Number(this.PivalueAll[6].Item1);
            this.TQ3 = Number(this.PivalueAll[7].Item1);
            this.TQ4 = Number(this.PivalueAll[8].Item1);
            this.TQ5 = Number(this.PivalueAll[9].Item1);
            this.Donut_TQ = [[this.TQ1, this.TQ2, this.TQ3, this.TQ4, this.TQ5]];

            this.pivalueService.GetUtilizeD(DateSend).subscribe(data =>{
              this.PivalueAll = data.result;
              this.U1 = Number(this.PivalueAll[0].Item1)
              this.U2 = Number(this.PivalueAll[1].Item1)
              this.U3 = Number(this.PivalueAll[2].Item1)
              this.U4 = Number(this.PivalueAll[3].Item1)
              this.U5 = Number(this.PivalueAll[4].Item1)
                console.log(this.PivalueAll);
                setTimeout(() => {
                  this.barChartData2  = [
                    {
                      data: [this.U1],
                      label: 'SALE OFFICE',
                    },
                    {
                      data: [this.U2],
                      label: 'INBOUND WEIGHBRIDGE'
                    },
                    {
                      data: [this.U3],
                      label: 'DIESEL BAY'
                    },
                    {
                      data: [this.U4],
                      label: 'GASOHOL95 BAY'
                    },
                    {
                      data: [this.U5],
                      label: 'OUTBOUND WEIGHBRIDGE'
                    },
                  ];
                  this.CanRender = true                
                }, 100);
            });
          });
        });
      });
      
    });

     
  }   
  barChartData2:ChartDataSets[]
  
  


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

  public barChartColors: Color[] = [
    { backgroundColor: '#ffa410' },
    { backgroundColor: '#ffcf83' },
    { backgroundColor: '#ffe6c4' },
    { backgroundColor: '#b99c7e' },
    { backgroundColor: '#7f5c46' },
  ]



  ///////////////////////// SCHEDULE UTILIZATION /////////////////////////

  public barChartOptions2: ChartOptions = {
    responsive: true,
  };
  public barChartLabels2: Label[] = [];
  public barChartType2: ChartType = 'horizontalBar';
  public barChartLegend2 = true;

  

  public barChartColors2: Color[] = [
    { backgroundColor: '#d6cfcb' },
    { backgroundColor: '#ccb7ae' },
    { backgroundColor: '#96808c' },
    { backgroundColor: '#706677' },
    { backgroundColor: '#565264' },
    { backgroundColor: '#c1d6e1' },
  ]
  


  ///////////////////////// WIP /////////////////////////
 
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

  newDataPoint(dataArr = [100, 100, 100], label) {
    this.chartData.forEach((dataset, index) => {
      this.chartData[index] = Object.assign({}, this.chartData[index], {
        data: [...this.chartData[index].data, dataArr[index]],
      });
    });

    this.chartLabels = [...this.chartLabels, label];
  }

  // ...
  onChartHover = ($event: any) => {
    // window.console.log('onChartHover', $event);
  };
  onChartClick = ($event: any) => {
    // window.console.log('onChartClick', $event);
  };
 



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
