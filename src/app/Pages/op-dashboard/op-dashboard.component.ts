import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-OperatorDashboard',
  templateUrl: './op-dashboard.component.html',
  styleUrls: ['./op-dashboard.component.scss']
})
//OpDashboardComponent ==> this is name of this component
export class OpDashboardComponent implements OnInit {

  // public datasets: any;
  // public data: any;
  // public salesChart;
  // public clicked: boolean = true;
  // public clicked1: boolean = false;

   ngOnInit() {

  //   this.datasets = [
  //     [0, 20, 10, 30, 15, 40, 20, 60, 60],
  //     [0, 20, 5, 25, 10, 30, 15, 40, 40]
  //   ];
  //   this.data = this.datasets[0];

  //   var chartOrders = document.getElementById('chart-orders');

  }

/*
    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }
*/
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
