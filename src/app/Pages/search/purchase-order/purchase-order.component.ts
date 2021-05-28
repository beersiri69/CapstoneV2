import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/Service/network.service';
import {
  InvoiceAll,
  Purchase,
  Price,
  Customer,
} from 'src/app/Model/invoice.Model';
import { AuthService } from 'src/app/Service/auth.service';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['../search.component.scss']
})
export class PurchaseOrderComponent implements OnInit {

  constructor(private networkService:NetworkService,
    private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.CheckPernission()
  }
  GetInvoice: InvoiceAll[];
  ResultTok: Purchase[];
  PriceTok: Price[];
  CustomerTok: Customer[];
  myModel = '';

  InvoiceShow: any;
  PoNumShow: any;
  PaymentShow: any;
  DateShow: any;
  CustID: any;
  CusTitle: any;
  CusName: any;
  CusSur: any;
  TaxID: any;
  Filling: any;
  Gastype:any;
  Price:any;
  Quantity:any
  AmountPrice:any
  Vat:any
  Total:any

  onEnter2() {
    this.myModel;
    this.networkService.Getinvoice(this.myModel).subscribe((data) => {
      this.CustomerTok = data.Customer;
      this.ResultTok = data.result;
      this.PriceTok = data.Price;

      this.InvoiceShow = data.GetPayment;
      this.PoNumShow = data.result[0].PO_NO;
      this.PaymentShow = data.result[0].e_Bill_NO;
      this.DateShow = data.result[0].Deliver_Date;
      this.DateShow = formatDate(this.DateShow,'yyyy-MM-dd','en-US');
      this.CustID = data.result[0].Customer_ID;
      this.CusTitle = data.Customer[0].Customer_Title;
      this.CusName = data.Customer[0].Customer_Name;
      this.CusSur = data.Customer[0].Customer_Surname;
      this.TaxID = data.Customer[0].Taxpayer_ID;
      this.Filling = data.result[0].Filling_time
      this.Gastype = data.result[0].Gas_type

      if(this.Gastype == "DIESEL"){
          this.Price = data.Price[0].Diesel_Price
      }else{
          this.Price = data.Price[0].Gasohol95_Price
      }
      this.Quantity = data.result[0].Fuel_Amount
      
      this.AmountPrice  = this.Quantity*this.Price

      
      this.Vat = this.AmountPrice*0.07
      this.Total = this.AmountPrice + this.Vat


      this.AmountPrice  =  parseFloat(Number(this.AmountPrice).toFixed(4)).toLocaleString("en");
      this.Vat = parseFloat(Number(this.Vat).toFixed(4)).toLocaleString("en");
      this.Total  = parseFloat(Number(this.Total ).toFixed(4)).toLocaleString("en");
    });
  }
}