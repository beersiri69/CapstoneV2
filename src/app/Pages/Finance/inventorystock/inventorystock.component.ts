import { Income } from './../../../Model/income.model';
import { NetworkService } from './../../../Service/network.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

interface botton{
  Name: string;
  Route: string;
}
@Component({
  selector: 'app-inventorystock',
  templateUrl: './inventorystock.component.html',
  styleUrls: ['./inventorystock.component.scss'],
  providers: [{
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  }, { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})
export class InventorystockComponent implements OnInit {
  date = new FormControl(moment([2018, 2]));
  YearTok:String
  MonthTok:any
  DateSearch:String
  DateEnd:String
  GeneralShowAll:any
  Menu_Title:string[];
  Router_List:string[];
  
  public PropChange : any[];
  constructor(private networkService:NetworkService) { 
    this.Menu_Title=[
      "WEEK01",
      "WEEK02",
      "WEEK03",
      "WEEK04",
      "WEEK05"
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
    {Name: 'WEEK05', Route: 'WEEK05'},
  ];


  ngOnInit(): void {
    this.MonthTok = String(3)
    this.YearTok = String(2018)
    this.Getincom("2018-03-01","2018-03-07")
    this.PropChange = ["btn-sel","btn-menu","btn-menu","btn-menu","btn-menu"]

  }
  chosenYearHandler(normalizedYear: Moment) {
    this.DateSearch = ''
    this.DateEnd = ''
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);    
    this.YearTok  = String(normalizedYear.year())
    this.DateSearch = this.YearTok + '-'
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);   
    this.MonthTok = normalizedMonth.month() +1 ;
    if(this.MonthTok<10){
      this.DateSearch += '0' + this.MonthTok
    }
    else{
      this.DateSearch += this.MonthTok
    }
    console.log( this.DateSearch );

    datepicker.close();
    
  }

  check(e){
    var target = e.target || e.srcElement || e.currentTarget
    var x = target.id
    for ( let i in this.PropChange){
      this.PropChange[i] = "btn-menu"
    }
    this.PropChange[x] = "btn-sel"
    this.DateSearch = ''
    this.DateEnd = ''


    if(x==0){
      this.DateSearch = this.YearTok + '-' + this.MonthTok + '-07'
      this.DateEnd = this.YearTok + '-' + this.MonthTok + '-01'

    }
    if(x==1){
      this.DateSearch = this.YearTok + '-' + this.MonthTok + '-14'
      this.DateEnd = this.YearTok + '-' + this.MonthTok + '-8'
    }
    if(x==2){
      this.DateSearch = this.YearTok + '-' + this.MonthTok + '-21'
      this.DateEnd = this.YearTok + '-' + this.MonthTok + '-15'
    }
    if(x==3){
      this.DateSearch = this.YearTok + '-' + this.MonthTok + '-28'
      this.DateEnd = this.YearTok + '-' + this.MonthTok + '-22'
   }
    if(x==4){
      this.DateSearch = this.YearTok + '-' + this.MonthTok + '-31'
      this.DateEnd = this.YearTok + '-' + this.MonthTok + '-25'
    }

    console.log(this.DateSearch);
    this.Getincom(this.DateEnd,this.DateSearch)
  
    
    
  }
  IncomeGet:Income[]
  BiginstockG:any
  BiginstockD:any
  PurchaseG:any
  PurchaseD:any
  SoldG:any
  SoldD:any
  EndG:any
  EndD:any
  CanRender = false
  Getincom(a,b){
    this.networkService.GetIncomeBetween(a,b).subscribe(data=>{
      this.IncomeGet = data.result
      console.log(this.IncomeGet);
      
      this.PurchaseG = 0
      this.PurchaseD=0
      this.SoldG=0
      this.SoldD=0

      this.BiginstockG = this.IncomeGet[0].Begin_G_B_
      this.BiginstockD = this.IncomeGet[0].Begin_D_B_
      
  
        for(var i =0;i<7;i++){
        this.PurchaseG += this.IncomeGet[i].AmountPurchase_G_B_
        this.PurchaseD += this.IncomeGet[i].AmountPurchase_D_B_
        this.SoldG     += this.IncomeGet[i].AmountSold_G_B_
        this.SoldD     += this.IncomeGet[i].AmountSold_D_B_
        console.log(this.PurchaseD);
        
      }
      this.EndG = this.BiginstockG-this.PurchaseG+this.SoldG
      this.EndD = this.BiginstockD-this.PurchaseD+this.SoldD




      this.PurchaseG =parseFloat(Number(this.PurchaseG).toFixed(2)).toLocaleString("en")
      this.PurchaseD=parseFloat(Number(this.PurchaseD).toFixed(2)).toLocaleString("en")
      this.SoldG=parseFloat(Number(this.SoldG ).toFixed(2)).toLocaleString("en")
      this.SoldD =parseFloat(Number(this.SoldD ).toFixed(2)).toLocaleString("en")
      this.BiginstockG =parseFloat(Number(this.BiginstockG).toFixed(2)).toLocaleString("en")
      this.BiginstockD =parseFloat(Number(this.BiginstockD).toFixed(2)).toLocaleString("en")
      this.EndG =parseFloat(Number(this.EndG).toFixed(2)).toLocaleString("en")
      this.EndD=parseFloat(Number(this.EndD).toFixed(2)).toLocaleString("en")

      


      this.CanRender = true

    })

    
  }


}
