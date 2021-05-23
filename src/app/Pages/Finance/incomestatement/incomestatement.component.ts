import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-incomestatement',
  templateUrl: './incomestatement.component.html',
  styleUrls: ['./incomestatement.component.scss']
})
export class IncomestatementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addEvent(event: MatDatepickerInputEvent<Date>) {
    
    var DateSearch = formatDate(event.value,'yyyy-MM-dd','en-US');
    console.log(DateSearch)
    }

}
