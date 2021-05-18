import { AuthService } from 'src/app/Service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private authservice: AuthService) {}

  chartData = [
    {
      data: [330, 600, 260, 700],
      label: 'Account A',
    },
    {
      data: [120, 455, 100, 340],
      label: 'Account B',
    },
    {
      data: [45, 67, 800, 500],
      label: 'Account C',
    },
  ];
  chartLabels = ['January', 'February', 'March', 'April'];
  chartOptions = {
    responsive: true,
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
  // };

  ngOnInit() {
    //this.authservice.CheckRole()
  }
}
