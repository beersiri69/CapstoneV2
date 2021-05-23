import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets, } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { single } from '../../example/data';
import { from } from 'rxjs';

@Component({
  selector: 'app-OperatorDashboard',
  templateUrl: './op-dashboard.component.html',
  styleUrls: ['./op-dashboard.component.scss']
})

export class OpDashboardComponent implements OnInit {


  single: any[];
  multi: any[];

  view:any= [700, 655];
  
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  onResize(event) {
    this.view = [event.target.innerWidth / 1.35, 400];
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
    {backgroundColor:["#f6af3a","#fec569","#ffe3bb","b99c7e","7f5c46"]}
  ];

  // public doughnutChartColors: Color[] = [
  //   {backgroundColor:["#9E120E","#FF5800","#FFB414"]}
  // ];


  ///////////////////////// SECOND DONUT /////////////////////////

  public doughnutChartLabels2: Label[] = ['SO station', 'IB station', 'DB station', 'GB station', 'OB station'];
  public doughnutChartData2: MultiDataSet = [
    [450, 200, 100, 200, 750]
  ];  
  public doughnutChartType2: ChartType = 'doughnut';

  public doughnutChartColors2: Color[] = [
    {backgroundColor:["#f6af3a","#fec569","#ffe3bb","b99c7e","7f5c46"]}
  ];








  public barChartLabels: Label[] = ['SO station', 'IB station', 'DB station', 'GB station', 'OB station'];
  public barChartData: ChartDataSets[] = [
    { data: [450, 200, 100, 200, 750], label:'Best fruit'}
  ];  
  public barChartType: ChartType = 'bar';

  public barChartColors: Color[] = [
    {backgroundColor:["#f6af3a","#fec569","#ffe3bb","b99c7e","7f5c46"]}
  ];








  ///////////////////////// LINE CHART [NOT USE] /////////////////////////

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
  



  ///////////////////////// WIP /////////////////////////

  // public chartColors: Color[] =[
  //   {
  //     backgroundColor:["#FF7360", "#6FC8CE", "#FAFFF2", "#FFFCC4", "#B9E8E0"]
  //   }];


  // public primaryYAxis: Object;

   ngOnInit() {
    console.log(event);
  }

constructor() {
  Object.assign(this, { single })
  this.view = [innerWidth / 4, 655];
 }
// constructor(private shipService: ShipService) { }

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
      minimum: 0, maximum: 5, interval:1, 
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
      minimum: 0, maximum: 5, interval:1, 
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


  ///////////////////////// %OEE /////////////////////////

  chartData3 = [
    {
      data: [33, 60, 26],
      label: 'SALE OFFICE',
      fill: true,
      
    },
    {
      data: [12, 45, 30],
      label: 'INBOUND WEIGHTBRIDGE',
      fill: true
    },
    {
      data: [45, 57, 60],
      label: 'DIESEL BAY',
      fill: true
    },
    {
      data: [14,32,15],
      label: 'GASOHOL95 BAY',
      fill: true
    },
    {
      data: [60,63,25],
      label: 'OUTBOUND WEIGHTBRIDGE',
      fill: true
    },
  ];
  colors:[{
    backgroundColor:"#81b29a",
    hoverBackgroundColor:"#81b29a",
    borderColor:"#81b29a",
    hoverBorderColor:"#81b29a"
}];
  chartLabels3: Label[] = [
    // อยากให้ขึ้นเป็น day / week / month ที่เลือกจะดู
    '%A (AVAILABILITY)', '%P (PERFORMANCE)', '%Q (QUALITY)'
  ];
  chartOptions3 = {
    responsive: true,
    legend: {
      labels: {
        fontColor: 'black'
      }
    }
  };
  // ...
  onChartHover3 = ($event: any) => {
    window.console.log('onChartHover', $event);
  };
  onChartClick3 = ($event: any) => {
    window.console.log('onChartClick', $event);
  };



  newDataPoint3(dataArr = [100, 100, 100], label) {
    this.chartData3.forEach((dataset, index) => {
      this.chartData3[index] = Object.assign({}, this.chartData3[index], {
        data: [...this.chartData3[index].data, dataArr[index]]
      });
    });

    this.chartLabels3 = [...this.chartLabels3, label];
  }


  
}
