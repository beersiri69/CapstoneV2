import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-OperatorDashboard',
  templateUrl: './op-dashboard.component.html',
  styleUrls: ['./op-dashboard.component.scss']
})

export class OpDashboardComponent implements OnInit {
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];  
  public doughnutChartType: ChartType = 'doughnut';

  // public doughnutChartColors: Color[] = [
  //   {backgroundColor:["#9E120E","#FF5800","#FFB414"]}
  // ];



  public lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];

  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  public lineChartOptions = {
    responsive: true,
  };
  public lineChartType: ChartType = 'line';
  // lineChartColors: Color[] = [
  //   {
  //     borderColor: 'black',
  //     backgroundColor: 'rgba(255,255,0,0.28)',
  //   },
  // ];

  public lineChartLegend = true;
  public lineChartPlugins = [];
  



  // public needleValue = 20
  // public chartWidth = 400
  // public name='Gauge chart'
  // public options={
  //   hasNeedle: true,
  //   outerNeedle: true,
  //   needleColor: "rgb(166,206,227)",
  //   needleStartValue: -1,
  //   needleUpdateSpeed: 4,
  //   rangeLabel: ["-10","10"],
  //   centralLabel: "2",
  //   rangeLabelFontSize: 42,
  // }
  public canvasWidth = 300
  public needleValue = 65
  public centralLabel = ''
  public name = 'Gauge chart'
  public bottomLabel = '65'
  public options = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['rgb(44, 151, 222)', 'lightgray'],
    arcDelimiters: [30],
    rangeLabel: ['0', '100'],
    needleStartValue: 50,
}




   ngOnInit() {
  }

constructor() { }

  chartData = [
    {
      data: [330, 600, 260, 700],
      label: 'SO station'
    },
    {
      data: [120, 455, 100, 340],
      label: 'IB station'
    },
    {
      data: [45, 67, 800, 500],
      label: 'DB station'
    },
    {
      data: [700, 67, 800, 500],
      label: 'GB station'
    },
    {
      data: [200, 67, 800, 500],
      label: 'OB station'
    }
  ];
  chartLabels = [
    // อยากให้ขึ้นเป็น day / week / month ที่เลือกจะดู
    'XXX'
  ];
  chartOptions = {
    responsive: true
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
  
}
