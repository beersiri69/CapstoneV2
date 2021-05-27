import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/Model/test'
import { NetworkService } from '../../../Service/network.service'
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {formatDate} from '@angular/common';
import { Transaction } from 'src/app/Model/transaction.model';
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
}

@Component({
  selector: 'app-general-journal',
  templateUrl: './general-journal.component.html',
  styleUrls: ['./general-journal.component.scss'],
  providers: [{
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  }, { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})


export class GeneralJournalComponent implements OnInit {

  // TestAll : Test[] | undefined;
  // Count : number | undefined;

 
  
  constructor(private networkService : NetworkService,
             ) {
              
   }
   date = new FormControl(moment([2018, 2, 1]));
   YearTok:string
   MonthTok:String
   DateSearch:string
   
  ngOnInit(): void {    
    this.Init_Date()
  }
  GeneralShowAll :GeneralShow[]  = []
  
  TransactionAll : Transaction[] | undefined;

  Init_Date(){
  var DateSearchInit = "2018-03-01"

  this.GetRefNo(DateSearchInit)
  
  this.networkService.GetTransaction(DateSearchInit).subscribe(
    data => {         
      this.TransactionAll = data.result
      this.InsertLoop()
    },
    err =>{
        alert("can not getuser")
    });
  }
  
  
  
  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.GeneralShowAll = []
    var DateSearch = formatDate(event.value,'yyyy-MM-dd','en-US');
    this.GetRefNo(DateSearch)
    
    this.networkService.GetTransaction(DateSearch).subscribe(
      data => {         
        this.TransactionAll = data.result   
       
        this.InsertLoop()
      },
      err =>{
          //alert("can not getuser")
      });
    }
         
    InsertShow(w,x,y,z,o){
      this.GeneralShowAll.push({
        Date: w,
        Explain: x,
        Ref : y,
        Debit :  z,
        Credit : o,
      })
    }

    InsertLoop(){
      var CashNo = 101
      var ReceivableNo = 112
      var PayableNo = 201
      var InventoryNo = 126

      for (let k in this.TransactionAll){  

        var Date_insert = formatDate(this.TransactionAll[k].Date,'yyyy-MM-dd','en-US')
        
        if (this.TransactionAll[k].Volume_D != 0){
          var Amount = parseFloat(Number(this.TransactionAll[k].Price_D).toFixed(4)).toLocaleString("en")
        }
        else{
          var Amount = parseFloat(Number(this.TransactionAll[k].Price_G).toFixed(4)).toLocaleString("en")
        }
         
        //TODO SALE
        if(this.TransactionAll[k].Action === "Purchase"){

          if(this.TransactionAll[k].Type === "DIESEL"){
            this.InsertShow(Date_insert,"Inventory Diesel (Sale Diesel)",InventoryNo,Amount,'')

          }else{
            this.InsertShow(Date_insert,"Inventory Gasohol95 (Sale Gasohol95)",InventoryNo,Amount,'')
          }
          
          this.InsertShow('',"Acc. Payable",PayableNo,'',Amount)
          this.InsertShow(Date_insert,"Acc. Payable",PayableNo,Amount,'')
          this.InsertShow('',"Cash",CashNo,'',Amount)

        //TODO Purchase
        }else if(this.TransactionAll[k].Action === "Sale"){

          if(this.TransactionAll[k].Type === "DIESEL"){
            this.InsertShow(Date_insert,"Acc. Receivable (Purchase Diesel)",ReceivableNo,Amount,'')
            
          }else{
            this.InsertShow(Date_insert,"Acc. Receivable (Purchase Gasohol 95)",ReceivableNo,Amount,'')
          }          
          this.InsertShow('',"Inventory",InventoryNo,'',Amount)
          this.InsertShow(Date_insert,"Cash",CashNo,Amount,'')
          this.InsertShow('',"Acc. Receivable",ReceivableNo,'',Amount)         
        }
      }
      
    }
    DatChange :string
    GetRefNo(date :string){
      this.DatChange = date.charAt(2)
      this.DatChange += date.charAt(3)
      this.DatChange += date.charAt(5)
      this.DatChange += date.charAt(6)
      this.DatChange += date.charAt(8)
      this.DatChange += date.charAt(9)
    }
}
 




