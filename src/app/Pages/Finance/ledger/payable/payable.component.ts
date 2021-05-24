import { Component, OnInit } from '@angular/core';
import { LedgerService } from 'src/app/Service/ledger.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {formatDate} from '@angular/common';
export interface GeneralShow{  
  Date: String | undefined;
  Explain : String | undefined;
  Ref : number | undefined;
  Debit : number | undefined;
  Credit : number | undefined;
  Balance : number | undefined;
}

@Component({
  selector: 'app-payable',
  templateUrl: './payable.component.html',
  styleUrls: ['./payable.component.scss']
})
export class PayableComponent implements OnInit {
  GeneralShowAll :GeneralShow[]  = []
  constructor(private ledgerService:LedgerService) { }

  ngOnInit(): void {
    this.GeneralShowAll = []
    this.GeneralShowAll = this.ledgerService.ShowLedger("2018-03-01",'Payable')
  }

  addEvent(event: MatDatepickerInputEvent<Date>){
    this.GeneralShowAll = []
    var DatePick = formatDate(event.value,'yyyy-MM-dd','en-US');
    this.GeneralShowAll = this.ledgerService.ShowLedger(DatePick,'Receivable')
    
  }

}
