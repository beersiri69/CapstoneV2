import { Component, OnInit } from '@angular/core';
import { LedgerService } from 'src/app/Service/ledger.service';
import { formatDate } from '@angular/common';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Income } from 'src/app/Model/income.model';
import { NetworkService } from 'src/app/Service/network.service';
import { Transaction } from 'src/app/Model/transaction.model';

export interface GeneralShow {
  Date: String | undefined;
  Explain: String | undefined;
  Ref: number | undefined;
  Debit: number | undefined;
  Credit: number | undefined;
  Balance: number | undefined;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  GeneralShowAll: GeneralShow[]
  constructor(
    private ledgerService: LedgerService,
    private networkService: NetworkService
  ) {}

  ngOnInit() {
    this.GeneralShowAll = [];
    this.InsertInventory('2018-03-01');
  }
  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.GeneralShowAll = [];
    var DatePick = formatDate(event.value, 'yyyy-MM-dd', 'en-US');
    this.InsertInventory(DatePick);
  }

  IncomeCal: Income[] | [];
  TransactionAll: Transaction[] | undefined;
  Amount_Init: number | undefined;
  Amout_left: number | undefined;
  Date_insert:string
  RefID:string
  async InsertInventory(DateSearch) {
   
    await this.networkService.GetTransaction(DateSearch).subscribe(
      (data) => {

        this.TransactionAll = data.result;
        
        
        this.Date_insert = formatDate(
          this.TransactionAll[0].Date,
          'yyyy-MM-dd',
          'en-US'
        );
        this.RefID = 'J' + this.GetRefNo(this.Date_insert);
        
        
      },
      (err) => {}
    );     
    await this.networkService.GetIncomeFromStart(DateSearch).subscribe(
      (data) => {

        this.IncomeCal = data.result;
        this.Amount_Init =
        this.IncomeCal['Begin_G_B_'] + this.IncomeCal['Begin_D_B_'];
        this.Amout_left = this.Amount_Init;
      
        var Amount
        for (let k in this.TransactionAll) {

          if (this.TransactionAll[k].Volume_D != 0){
            Amount = this.TransactionAll[k].Price_D
         }
         else{
            Amount = this.TransactionAll[k].Price_G
         }
         
          if (this.TransactionAll[k].Action === 'Purchase') {
            this.Amout_left += Amount;
            this.InsertShow(
              this.Date_insert,
              'Purchase Fuel',
              this.RefID,
              Amount.toFixed(2),
              '',
              this.Amout_left.toFixed(2)
            );
          } else {
            this.Amout_left -= Amount;
            this.InsertShow(
              this.Date_insert,
              'Sale Fuel',
              this.RefID,
              '',
              Amount.toFixed(2),
              this.Amout_left.toFixed(2)
            );
          }
        }
      },
      (err) => {}
    )
    
   
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
