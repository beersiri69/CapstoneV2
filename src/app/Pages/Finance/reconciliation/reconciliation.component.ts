
import { NetworkService } from 'src/app/Service/network.service';
import { Component, OnInit } from '@angular/core';

import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {formatDate} from '@angular/common';
import {  ReconAll,Purchase,Payment,Deliver } from 'src/app/Model/recon.Model';

export interface GeneralShow{  
  Date: String | undefined;
  PO : String | undefined;
  E_bill_No : String | undefined;
  Invoice_No : String | undefined;
  Delivery_ID : String | undefined;
  Truck_ID : String | undefined;
  Type : String | undefined;
  Quantity : number | undefined;
  Amount : number | undefined;
  Agent : String | undefined;
}

@Component({
  selector: 'app-reconciliation',
  templateUrl: './reconciliation.component.html',
  styleUrls: ['./reconciliation.component.scss']
})
export class ReconciliationComponent implements OnInit {

  ToktRec: ReconAll
  constructor(private networkService:NetworkService) { }

  public CanRender = false
  ngOnInit(): void {
    this.GeneralShowAll=[]
    this.ReconcilFunc("2018-03-01");
  }
  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.CanRender = false
    this.GeneralShowAll=[]
    var DateSearch = formatDate(event.value,'yyyy-MM-dd','en-US');
    this.ReconcilFunc(DateSearch);
    }

    Paymentinfo: Payment[]
    Deliverinfo: Deliver[]
    PurchaseInfo: Purchase[]

  ReconcilFunc(Date){
    this.networkService.GetReconcil(Date).subscribe(data=>{
        this.Paymentinfo=data.Payment
        this.Deliverinfo = data.Deliver
        this.PurchaseInfo = data.Purchase


        
        setTimeout(() => {
          this.Insertloop()
          this.CanRender=true
        }, 200);
      
    })
  }
  GeneralShowAll: GeneralShow[]

  InsertShow(a,b,c,d,e,f,g,h,i,j){
    this.GeneralShowAll.push({
      Date: a,
      PO : b,
      E_bill_No : c,
      Invoice_No : d,
      Delivery_ID : e,
      Truck_ID : f,
      Type : g,
      Quantity : h,
      Amount : i,
      Agent : j
    })
  }
  Insertloop(){
    for(let k in this.Deliverinfo){
      
      
      var date = formatDate(this.PurchaseInfo[k].Deliver_Date,
                          'yyyy-MM-dd',
                          'en-US'
                         );
      var PO_NO = this.PurchaseInfo[k].PO_NO
      var Payment_NO = this.Paymentinfo[k].e_Bill_NO
      var Invoice_No = this.Paymentinfo[k].Invoice_NO
      var Deliver_ID = this.Deliverinfo[k].Deliver_ID
      var Truck_ID = this.Deliverinfo[k].Truck_NO
      var Type = this.PurchaseInfo[k].Gas_type
      var Quantity = this.PurchaseInfo[k].Fuel_Amount
      var amount = this.Paymentinfo[k].Amount
      var Agent = this.PurchaseInfo[k].Customer_ID


      this.InsertShow(date,PO_NO,Payment_NO,Invoice_No,Deliver_ID,
        Truck_ID,Type,Quantity,amount,Agent)

    }
  }

}
