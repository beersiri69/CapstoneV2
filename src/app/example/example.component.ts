import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { single } from './data';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
  
})
export class ExampleComponent implements OnInit {
  single: any[];
  multi: any[];

  view:any= [700, 500];
  
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
  constructor() { 
    Object.assign(this, { single })
  }

  ngOnInit(): void {
  }
  onSelect(event) {
    console.log(event);
  }

}
