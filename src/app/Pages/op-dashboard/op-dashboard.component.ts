import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets, } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { single } from '../op-dashboard/data';
import { from } from 'rxjs';

@Component({
  selector: 'app-OperatorDashboard',
  templateUrl: './op-dashboard.component.html',
  styleUrls: ['./op-dashboard.component.scss']
})

export class OpDashboardComponent implements OnInit {

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



  ///////////////////////// WIP /////////////////////////

  chartData = [
    {
      data: [33, 60, 26, 70, 12, 25, 100],
      label: 'SO station',
      fill: false
    },
    {
      data: [0, 12, 33, 70, 12, 33, 80],
      label: 'IB station',
      fill: false
    },
    {
      data: [0, 70, 12, 33, 48, 20, 22],
      label: 'DB station',
      fill: false
    },
    {
      data: [1, 12, 33, 48, 57, 18, 75],
      label: 'GB station',
      fill: false
    },
    {
      data: [1, 23, 90, 33, 58, 12, 64],
      label: 'OB station',
      fill: false
    }
  ];
  chartLabels: Label[] = [
    // อยากให้ขึ้นเป็น day / week / month ที่เลือกจะดู
    '00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'
  ];
  chartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: 'white'
      }
    }

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

  ngOnInit() {
  }

  constructor() {
  }
}