import { Injectable } from '@angular/core';
import { Transaction } from '../Model/transaction.model';
import { NetworkService } from './network.service';
import { formatDate } from '@angular/common';
import { Income } from '../Model/income.model';
import { Expense } from '../Model/expense.Model';

export interface GeneralShow {
  Date: String | undefined;
  Explain: String | undefined;
  Ref: number | undefined;
  Debit: number | undefined;
  Credit: number | undefined;
  Balance: number | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class LedgerService {
  TransactionAll: Transaction[] | undefined;
  TransactionStart: Transaction[] | undefined;
  GeneralShowAll: GeneralShow[] = [];
  IncomeCal: Income[] | undefined;
  GetSumCash: Transaction[] | undefined;
  Expenseoverall: Expense[] | undefined;

  constructor(private networkService: NetworkService) {}

  ShowLedger(DateSearch, Type) {
    this.TransactionAll = [];
    this.GeneralShowAll = [];
    this.networkService.GetTransaction(DateSearch).subscribe(
      (data) => {
        this.TransactionAll = data.result;
        if (Type === 'Receivable') {
          this.InsertReceivable();
        } else if (Type === 'Payable') {
          this.InsertPayable();
        }
        // else if(Type === 'Inventory'){
        //   this.InsertInventory(DateSearch)
        // }
        else if (Type === 'Cash') {
          this.InsertCash(DateSearch);
        }
      },
      (err) => {
        //alert("can not getuser")
      }
    );

    return this.GeneralShowAll;
  }

  InsertShow(u, v, w, x, y, z) {
    this.GeneralShowAll.push({
      Date: u,
      Explain: v,
      Ref: w,
      Debit: x,
      Credit: y,
      Balance: z,
    });
  }

  InsertReceivable() {
    for (let k in this.TransactionAll) {
      var Date_insert = formatDate(
        this.TransactionAll[k].Date,
        'yyyy-MM-dd',
        'en-US'
      );

      if (this.TransactionAll[k].Volume_D != 0){
        var Amount = this.TransactionAll[k].Price_D
      }
      else{
        var Amount = this.TransactionAll[k].Price_G
      }


      
      var RefID = 'J' + this.GetRefNo(Date_insert);

      if (this.TransactionAll[k].Action === 'Sale') {
        this.InsertShow(
          Date_insert,
          'Sale Fuel',
          RefID,
          parseFloat(Number(Amount).toFixed(2)).toLocaleString("en"),
          '',
          parseFloat(Number(Amount).toFixed(2)).toLocaleString("en")
        );
        this.InsertShow(
          '',
          'Customer Paid',
          RefID,
          '',
          parseFloat(Number(Amount).toFixed(2)).toLocaleString("en"),
          '0.00'
        );
      }
    }
  }

  InsertPayable() {
    for (let k in this.TransactionAll) {
      var Date_insert = formatDate(
        this.TransactionAll[0].Date,
        'yyyy-MM-dd',
        'en-US'
      );
      if (this.TransactionAll[k].Volume_D != 0){
        var Amount = this.TransactionAll[k].Price_D
      }
      else{
        var Amount = this.TransactionAll[k].Price_G
      }
      var RefID = 'J' + this.GetRefNo(Date_insert);

      if (this.TransactionAll[k].Action === 'Purchase') {
        this.InsertShow(
          Date_insert,
          'Purchase Fuel',
          RefID,
          parseFloat(Number(Amount).toFixed(2)).toLocaleString("en"),
          '',
          parseFloat(Number(Amount).toFixed(2)).toLocaleString("en")
        );
        this.InsertShow(
          '',
          'Paid Purchase Fuel',
          RefID,
          '',
          parseFloat(Number(Amount).toFixed(2)).toLocaleString("en"),
          '0.00'
        );
      }
    }
  }
  Amount_Init: number;
  Amout_left: number;

  SumCash: number | undefined;
  async InsertCash(DateSearch): Promise<void> {
    this.SumCash = 1000000;
    this.GetSumCash = [];
    await this.InsertCash_Connect(DateSearch);

    await this.InsertCash_GetSum();

    await this.InsertCash_Gettransac();

    await this.InsertCash_GetExpense();
  }

  InsertCash_Connect(DateSearch) {
    this.networkService.SumCashBeforeDate(DateSearch).subscribe(
      (data) => {
        this.GetSumCash = data.result;
      },
      (err) => {}
    );
    this.networkService.GetExpense().subscribe(
      (data) => {
        this.Expenseoverall = data.result;
      },
      (err) => {}
    );
  }

  InsertCash_GetSum() {
    var Amount;
    for (let i in this.GetSumCash) {

      if (this.TransactionAll[i].Volume_D != 0){
         Amount = this.TransactionAll[i].Price_D
      }
      else{
         Amount = this.TransactionAll[i].Price_G
      }




      if (this.GetSumCash[i].Action === 'Purchase') {
        this.SumCash -= Amount;
      } else {
        this.SumCash += Amount;
      }
    }
  }
  InsertCash_Gettransac() {
    setTimeout(() => {}, 1000);

    var Date_insert = formatDate(
      this.TransactionAll[0].Date,
      'yyyy-MM-dd',
      'en-US'
    );
    var RefID = 'J' + this.GetRefNo(Date_insert);

    for (let k in this.TransactionAll) {
      var Date_insert = formatDate(
        this.TransactionAll[k].Date,
        'yyyy-MM-dd',
        'en-US'
      );

    var Amount

    if (this.TransactionAll[k].Volume_D != 0){
        Amount = this.TransactionAll[k].Price_D
     }
     else{
        Amount = this.TransactionAll[k].Price_G
     }

     


      
      if (this.TransactionAll[k].Action === 'Purchase') {
        this.SumCash -= Amount
        this.InsertShow(
          Date_insert,
          'Purchase Fuel',
          RefID,
          '',
          parseFloat(Number(Amount).toFixed(2)).toLocaleString("en"),
          parseFloat(Number(this.SumCash).toFixed(2)).toLocaleString("en")
        );
      } else {
        this.SumCash += Amount
        this.InsertShow(
          Date_insert,
          'Sale Fuel',
          RefID,
          parseFloat(Number(Amount).toFixed(2)).toLocaleString("en"),
          '',
          parseFloat(Number(this.SumCash).toFixed(2)).toLocaleString("en")
        );
      }
    }
  }
  InsertCash_GetExpense() {
    var Date_insert = formatDate(
      this.TransactionAll[0].Date,
      'yyyy-MM-dd',
      'en-US'
    );
    var RefID = 'J' + this.GetRefNo(Date_insert);

    for (let j in this.Expenseoverall) {
      this.SumCash -= this.Expenseoverall[j].Price_Per_day;
      this.InsertShow(
        Date_insert,
        this.Expenseoverall[j].Expense1,
        RefID,
        '',
        this.Expenseoverall[j].Price_Per_day,
        parseFloat(Number(this.SumCash).toFixed(2)).toLocaleString("en")
      );
    }
  }

  GetRefNo(date: string) {
    var DatChange;
    DatChange = '';
    DatChange += date.charAt(2);
    DatChange += date.charAt(3);
    DatChange += date.charAt(5);
    DatChange += date.charAt(6);
    DatChange += date.charAt(8);
    DatChange += date.charAt(9);
    return DatChange;
  }
}
