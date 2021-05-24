import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../../../Service/network.service'
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-reconciliation',
  templateUrl: './reconciliation.component.html',
  styleUrls: ['./reconciliation.component.scss']
})
export class ReconciliationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addEvent(event: MatDatepickerInputEvent<Date>) {
    
    var DateSearch = formatDate(event.value,'yyyy-MM-dd','en-US');
   
    }

}
