import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-OperatorDashboard',
  templateUrl: './op-dashboard.component.html',
  styleUrls: ['./op-dashboard.component.scss']
})

export class OpDashboardComponent implements OnInit {

  ///////////////////////// FIRST GAUGE-CHART /////////////////////////

  public canvasWidth = 740
  public needleValue = 100 
  public centralLabel = '99' //show level number
  // public bottomLabel = '0'
  public options = {
    hasNeedle: true,
    outerNeedle: true,
    needleColor: 'rgb(166,206,227)',
    needleUpdateSpeed: 4,
    arcColors: ['rgb(166,206,227)', 'black'],
    arcDelimiters: [99],
    rangeLabel: ['0', '100'],
    needleStartValue: 0,
  }


  ///////////////////////// SECOND GAUGE-CHART /////////////////////////

  public canvasWidth2 = 740
  public needleValue2 = 50 //percent
  public centralLabel2 = '100' //show level number
  // public bottomLabel = '0'
  public options2 = {
    hasNeedle: true,
    outerNeedle: true,
    needleColor: 'rgb(166,206,227)',
    needleUpdateSpeed: 4,
    arcColors: ['rgb(166,206,227)', 'black'],
    arcDelimiters: [50], //percent
    rangeLabel: ['0', '200'],
    needleStartValue: 0,
  }




  ///////////////////////// FIRST DONUT /////////////////////////

  public doughnutChartLabels: Label[] = ['SO station', 'IB station', 'OB station', 'GB station', 'DB station'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 700, 95]
  ];  
  public doughnutChartType: ChartType = 'doughnut';

  // public doughnutChartColors: Color[] = [
  //   {backgroundColor:["#9E120E","#FF5800","#FFB414"]}
  // ];


  ///////////////////////// SECOND DONUT /////////////////////////

  public doughnutChartLabels2: Label[] = ['SO station', 'IB station', 'OB station', 'GB station', 'DB station'];
  public doughnutChartData2: MultiDataSet = [
    [450, 200, 100, 200, 750]
  ];  
  public doughnutChartType2: ChartType = 'doughnut';

  public doughnutChartColors2: Color[] = [
    {backgroundColor:["#9E120E","#FF5800","#FFB414","black"]}
  ];




  ///////////////////////// LINE CHART [NOT USE] /////////////////////////

  // public lineChartData: ChartDataSets[] = [
  //   { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  // ];

  // public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  // public lineChartOptions = {
  //   responsive: true,
  // };
  // public lineChartType: ChartType = 'line';
  // // lineChartColors: Color[] = [
  // //   {
  // //     borderColor: 'black',
  // //     backgroundColor: 'rgba(255,255,0,0.28)',
  // //   },
  // // ];

  // public lineChartLegend = true;
  // public lineChartPlugins = [];
  



  ///////////////////////// BIG LINE-CHART /////////////////////////

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
      label: 'OB station'
    },
    {
      data: [700, 67, 800, 500],
      label: 'GB station'
    },
    {
      data: [200, 67, 800, 500],
      label: 'DB station'
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
  
  lineChartColors: Color[] = [
    {backgroundColor:["white","#FF5800","#FFB414","white","pink"]}
  ];

  newDataPoint(dataArr = [100, 100, 100], label) {
    this.chartData.forEach((dataset, index) => {
      this.chartData[index] = Object.assign({}, this.chartData[index], {
        data: [...this.chartData[index].data, dataArr[index]]
      });
    });

    this.chartLabels = [...this.chartLabels, label];
  }
  
}
