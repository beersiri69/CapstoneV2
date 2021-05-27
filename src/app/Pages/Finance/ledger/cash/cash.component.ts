import { Component, OnInit } from '@angular/core';
import { LedgerService } from 'src/app/Service/ledger.service';
import {formatDate} from '@angular/common';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'DD MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export interface GeneralShow{  
  Date: String | undefined;
  Explain : String | undefined;
  Ref : number | undefined;
  Debit : number | undefined;
  Credit : number | undefined;
  Balance : number | undefined;
}

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.scss'],
  providers: [{
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  }, { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})

export class CashComponent implements OnInit {

  GeneralShowAll :GeneralShow[]  = []

  date = new FormControl(moment([2018, 2, 1]));
  YearTok:string
  MonthTok:String
  DateSearch:string

  constructor(private ledgerService:LedgerService) { }

  ngOnInit(): void {
    this.GeneralShowAll = []
    this.GeneralShowAll = this.ledgerService.ShowLedger("2018-03-01",'Cash')
  }
  addEvent(event: MatDatepickerInputEvent<Date>){
    this.GeneralShowAll = []
    var DatePick = formatDate(event.value,'yyyy-MM-dd','en-US');
    this.GeneralShowAll = this.ledgerService.ShowLedger(DatePick,'Cash')
    
  }

}
