import { Injectable } from '@angular/core';
import { Transaction } from '../Model/transaction.model';
import { NetworkService } from './network.service';
import {formatDate} from '@angular/common';
import { Income } from '../Model/income.model'

export interface GeneralShow{
  Date: String | undefined;
  Explain : String | undefined;
  Ref : number | undefined;
  Debit : number | undefined;
  Credit : number | undefined;
  Balance : number | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class LedgerService {

  TransactionAll : Transaction[] | undefined;
  TransactionStart : Transaction[] | undefined;
  GeneralShowAll :GeneralShow[]  = []
  IncomeCal : Income[] | undefined

  constructor(private networkService : NetworkService) { }

  ShowLedger(DateSearch,Type){
    this.TransactionAll  = []
    this.GeneralShowAll = []
    this.networkService.GetTransaction(DateSearch).subscribe(
      data => {         
        this.TransactionAll = data.result
        //console.log(data.result)
        if(Type === 'Receivable'){
          this.InsertReceivable()
        }
        else if(Type === 'Payable'){
          this.InsertPayable()
        } 
        else if(Type === 'Inventory'){
          this.InsertInventory(DateSearch)
        } 
        else if(Type === 'Cash'){
          this.InsertCash()
        }

      
      },
      err =>{
          //alert("can not getuser")
      });
      //console.log(this.GeneralShowAll)
      return this.GeneralShowAll
  }

  InsertShow(u,v,w,x,y,z){
    this.GeneralShowAll.push({
      Date: u,
      Explain: v,
      Ref : w,
      Debit :  x,
      Credit : y,
      Balance: z
    })
  }

  InsertReceivable(){
    
    for (let k in this.TransactionAll){
      //console.log(this.TransactionAll[k].Date);
      
      var Date_insert = formatDate(this.TransactionAll[k].Date,'yyyy-MM-dd','en-US')        
      var Amount = this.TransactionAll[k].Amount
      var RefID = 'J' + this.GetRefNo(Date_insert)

      if(this.TransactionAll[k].Action==="Sale"){
        this.InsertShow(Date_insert,"Sale Fuel",RefID,Amount,'',Amount);
        this.InsertShow('','Customer Paid',RefID,'',Amount,'0');
      }
    }
    
  }

  InsertPayable(){

    for (let k in this.TransactionAll){
      var Date_insert = formatDate(this.TransactionAll[0].Date,'yyyy-MM-dd','en-US')        
      var Amount = this.TransactionAll[k].Amount
      var RefID = 'J' + this.GetRefNo(Date_insert)

      if(this.TransactionAll[k].Action==="Purchase"){
        this.InsertShow(Date_insert,"Purchase Fuel",RefID,Amount,'',Amount);
        this.InsertShow('','Paid Purchase Fuel',RefID,'',Amount,'0');
      }
    }
  }
  Amount_Init:number
  Amout_left:number

  InsertInventory(DateSearch){
    this.IncomeCal= [] 
    
   
    this.networkService.GetIncomeFromStart(DateSearch).subscribe(
      data => { 
        this.IncomeCal = data.result
        
        this.Amount_Init = this.IncomeCal['Begin_G_B_'] + this.IncomeCal['Begin_D_B_']
        console.log( this.Amount_Init)
       },
      err => {

        },
      )

    this.Amout_left = this.Amount_Init

    this.InsertShow(Date_insert,'Beginning Stock','',this.Amout_left,'',this.Amout_left);

    for (let k in this.TransactionAll){
      var Date_insert = formatDate(this.TransactionAll[k].Date,'yyyy-MM-dd','en-US')
      var RefID = 'J' + this.GetRefNo(Date_insert)

      var Amount = this.TransactionAll[k].Amount
      if(this.TransactionAll[k].Action==="Purchase"){
        this.InsertShow(Date_insert,'Purchase Fuel',RefID,Amount,'',this.Amout_left + Amount);
      }
      else{
        this.InsertShow(Date_insert,'Sale Fuel',RefID,'',Amount,this.Amout_left - Amount);
      }
    }
    
  }
  InsertCash(){
    // for (let k in this.TransactionAll){
    //   var Date_insert = formatDate(this.TransactionAll[k].Date,'yyyy-MM-dd','en-US')
        
    //   var Amount = this.TransactionAll[k].Amount
    //   if(this.TransactionAll[k].Action==="Sale"){
    //     this.InsertShow(Date_insert,v,w,x,y,z);
    //   }
    // }
  }
 
  
  GetRefNo(date :string){
    var DatChange
    DatChange = ''
    DatChange += date.charAt(2)
    DatChange += date.charAt(3)
    DatChange += date.charAt(5)
    DatChange += date.charAt(6)
    DatChange += date.charAt(8)
    DatChange += date.charAt(9)
    return DatChange
  }



}
