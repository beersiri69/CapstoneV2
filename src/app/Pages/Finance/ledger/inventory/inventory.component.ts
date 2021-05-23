import { Component, OnInit } from '@angular/core';
import { LedgerService } from 'src/app/Service/ledger.service';
import {formatDate} from '@angular/common';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

export interface GeneralShow{  
  Date: String | undefined;
  Explain : String | undefined;
  Ref : number | undefined;
  Debit : number | undefined;
  Credit : number | undefined;
  Balance : number | undefined;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  GeneralShowAll :GeneralShow[]  = []
  constructor(private ledgerService:LedgerService) { }

  ngOnInit(): void {
    this.GeneralShowAll = []
    this.GeneralShowAll = this.ledgerService.ShowLedger("2018-03-01",'Inventory')
  }
  addEvent(event: MatDatepickerInputEvent<Date>){
    this.GeneralShowAll = []
    var DatePick = formatDate(event.value,'yyyy-MM-dd','en-US');
    this.GeneralShowAll = this.ledgerService.ShowLedger(DatePick,'Inventory')
    
  }

}
