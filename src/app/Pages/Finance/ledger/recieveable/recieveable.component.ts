import { LedgerService } from './../../../../Service/ledger.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/Service/network.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {formatDate} from '@angular/common';
import { Transaction } from 'src/app/Model/transaction.model';
import { ThisReceiver } from '@angular/compiler';

export interface GeneralShow{  
  Date: String | undefined;
  Explain : String | undefined;
  Ref : number | undefined;
  Debit : number | undefined;
  Credit : number | undefined;
  Balance : number | undefined;
}

@Component({
  selector: 'app-recieveable',
  templateUrl: './recieveable.component.html',
  styleUrls: ['./recieveable.component.scss']
})
export class RecieveableComponent implements OnInit {
  GeneralShowAll :GeneralShow[]  = []
  
  constructor(private networkService : NetworkService,
              private ledgerService:LedgerService) {

  }

  ngOnInit(): void {
    this.GeneralShowAll = []
    this.GeneralShowAll = this.ledgerService.ShowLedger("2018-03-01",'Receivable')
    
  }

  addEvent(event: MatDatepickerInputEvent<Date>){
    this.GeneralShowAll = []
    var DatePick = formatDate(event.value,'yyyy-MM-dd','en-US');
    this.GeneralShowAll = this.ledgerService.ShowLedger(DatePick,'Receivable')
    
  }

}
