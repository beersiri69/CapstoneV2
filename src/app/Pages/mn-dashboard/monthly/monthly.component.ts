import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets, } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { multi } from '../monthly/data';
import { from } from 'rxjs';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class MonthlyComponent implements OnInit {

  ///////////////////////// RESOURCES BUSY /////////////////////////

  multi: any[];
  view: any = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  legendTitle: string = 'Years';

  colorScheme = {
    domain: ['#f6af3a', '#fec569', '#ffe3bb', '#b99c7e', '#7f5c46']
  };

  

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  onResize(event) {
    this.view = [event.target.innerWidth / 1.3, 655];
  }
  // ///////////////////////// FIRST GAUGE-CHART /////////////////////////

  // public canvasWidth = 740
  // public needleValue = 100 
  // public centralLabel = '99' //show level number
  // // public bottomLabel = '0'
  // public options = {
  //   hasNeedle: true,
  //   outerNeedle: true,
  //   needleColor: 'rgb(166,206,227)',
  //   needleUpdateSpeed: 4,
  //   arcColors: ['rgb(166,206,227)', 'black'],
  //   arcDelimiters: [99],
  //   rangeLabel: ['0', '100'],
  //   needleStartValue: 0,
  // }


  // ///////////////////////// SECOND GAUGE-CHART /////////////////////////

  // public canvasWidth2 = 740
  // public needleValue2 = 50 //percent
  // public centralLabel2 = '100' //show level number
  // // public bottomLabel = '0'
  // public options2 = {
  //   hasNeedle: true,
  //   outerNeedle: true,
  //   needleColor: 'rgb(166,206,227)',
  //   needleUpdateSpeed: 4,
  //   arcColors: ['rgb(166,206,227)', 'black'],
  //   arcDelimiters: [50], //percent
  //   rangeLabel: ['0', '200'],
  //   needleStartValue: 0,
  // }



  ///////////////////////// FIRST DONUT /////////////////////////

  public doughnutChartLabels: Label[] = ['SO station', 'IB station', 'DB station', 'GB station', 'OB station'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 700, 95]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColors: Color[] = [
    { backgroundColor: ["#f6af3a", "#fec569", "#ffe3bb", "#b99c7e", "#7f5c46"] }
  ];


  ///////////////////////// SECOND DONUT /////////////////////////

  public doughnutChartLabels2: Label[] = ['SO station', 'IB station', 'DB station', 'GB station', 'OB station'];
  public doughnutChartData2: MultiDataSet = [
    [450, 200, 100, 200, 750]
  ];
  public doughnutChartType2: ChartType = 'doughnut';

  public doughnutChartColors2: Color[] = [
    { backgroundColor: ["#f6af3a", "#fec569", "#ffe3bb", "#b99c7e", "#7f5c46"] }
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
    { backgroundColor: '#fec569' },
    { backgroundColor: '#ffe3bb' },
    { backgroundColor: '#b99c7e' },
    { backgroundColor: '#7f5c46' },
  ]



  ///////////////////////// WIP /////////////////////////

  ngOnInit() {
    console.log(event);
  }

  constructor() {
    Object.assign(this, { multi })
    this.view = [innerWidth / 1.3, 655];
  }

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

  chartData2 = [
    {
      data: [3],
      label: 'DIESEL BAY',
      fill: true
    }
  ];
  chartLabels2: Label[] = [
    // อยากให้ขึ้นเป็น day / week / month ที่เลือกจะดู
    // 'DIESEL BAY', 'GASOHOL95 BAY'
  ];
  chartOptions2 = {
    responsive: true,
    legend: {
      labels: {
        fontColor: 'black'
      }
    },
    primaryYAxis: {
      minimum: 0, maximum: 5, interval: 1,
    }
  };
  // ...
  onChartHover2 = ($event: any) => {
    window.console.log('onChartHover', $event);
  };
  onChartClick2 = ($event: any) => {
    window.console.log('onChartClick', $event);
  };



  newDataPoint2(dataArr = [0, 0, 0], label) {
    this.chartData2.forEach((dataset, index) => {
      this.chartData2[index] = Object.assign({}, this.chartData2[index], {
        data: [...this.chartData2[index].data, dataArr[index]]
      });
    });

    this.chartLabels2 = [...this.chartLabels2, label];
  }

  ///////////////////////// BUSY II /////////////////////////

  chartData22 = [
    {
      data: [1],
      label: 'GASOHOL95 BAY',
      fill: false
    }
  ];
  chartLabels22: Label[] = [
    // อยากให้ขึ้นเป็น day / week / month ที่เลือกจะดู
    // 'DIESEL BAY', 'GASOHOL95 BAY'
  ];
  chartOptions22 = {
    responsive: true,
    legend: {
      labels: {
        fontColor: 'black'
      }
    },
    primaryYAxis: {
      minimum: 0, maximum: 5, interval: 1,
    }
  };
  // ...
  onChartHover22 = ($event: any) => {
    window.console.log('onChartHover', $event);
  };
  onChartClick22 = ($event: any) => {
    window.console.log('onChartClick', $event);
  };



  newDataPoint22(dataArr = [0, 0, 0], label) {
    this.chartData22.forEach((dataset, index) => {
      this.chartData22[index] = Object.assign({}, this.chartData22[index], {
        data: [...this.chartData22[index].data, dataArr[index]]
      });
    });

    this.chartLabels22 = [...this.chartLabels22, label];
  }
}





  ///////////////////////// LINE CHART [NOT USE] in EXPORT /////////////////////////

  // public lineChartData: ChartDataSets[] = [
  //   { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices',fill: false },
  //   { data: [100, 72, 25, 75, 80, 12], label: 'B',fill: false },
  //   { data: [77, 65, 78, 11, 120, 99], label: 'C',fill: false },
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






