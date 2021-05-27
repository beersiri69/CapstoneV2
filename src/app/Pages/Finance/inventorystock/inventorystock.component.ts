import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';

const moment = _rollupMoment || _moment;
interface botton{
  Name: string;
  Route: string;
}
@Component({
  selector: 'app-inventorystock',
  templateUrl: './inventorystock.component.html',
  styleUrls: ['./inventorystock.component.scss']
})
export class InventorystockComponent implements OnInit {
  date = new FormControl(moment([2018, 2]));
  YearTok:String
  MonthTok:any
  DateSearch:String
  GeneralShowAll:any
  Menu_Title:string[];
  Router_List:string[];
  
  public PropChange : any[];
  constructor() { 
    this.Menu_Title=[
      "WEEK01",
      "WEEK02",
      "WEEK03",
      "WEEK04"
    ]
    this.Router_List=[
      "WEEK01",
      "WEEK02",
      "WEEK03",
      "WEEK04"
    ]
  }

  
  pages: botton[] = [
    {Name: 'WEEK01', Route: 'WEEK01'},
    {Name: 'WEEK02', Route: 'WEEK02'},
    {Name: 'WEEK03', Route: 'WEEK03'},
    {Name: 'WEEK04', Route: 'WEEK04'},
  ];

  ngOnInit(): void {
    this.MonthTok = String(3)
    this.YearTok = String(2018)

    this.PropChange = ["btn-sel","btn-menu","btn-menu","btn-menu"]
    //this.GetDashboardValue1('2018-03-31');  
  }
  chosenYearHandler(normalizedYear: Moment) {
    this.DateSearch = ''
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);    
    this.YearTok  = String(normalizedYear.year())
    this.DateSearch = this.YearTok + '-'
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    datepicker.close();
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);   
    this.MonthTok = normalizedMonth.month() +1 ;
    if(this.MonthTok<10){
      this.DateSearch += '0' + this.MonthTok  + '-31'
    }
    else{
      this.DateSearch += this.MonthTok  + '-31'
    }
    console.log( this.DateSearch );

    
  }

  check(e){
    var target = e.target || e.srcElement || e.currentTarget
    var x = target.id
    for ( let i in this.PropChange){
      this.PropChange[i] = "btn-menu"
    }
    this.PropChange[x] = "btn-sel"
    this.DateSearch = ''


    if(x==0){this.DateSearch = this.YearTok + '-' + this.MonthTok + '-07'}
    if(x==1){this.DateSearch = this.YearTok + '-' + this.MonthTok + '-14'}
    if(x==2){this.DateSearch = this.YearTok + '-' + this.MonthTok + '-21'}
    if(x==3){this.DateSearch = this.YearTok + '-' + this.MonthTok + '-28'}

    //this.GetDashboardValue1(this.DateSearch);  
    
    
  }


}
