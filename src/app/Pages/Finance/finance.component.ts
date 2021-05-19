import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


interface botton{
  Name: string;
  Route: string;
}

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['../search/search.component.scss'],
  
})

export class FinanceComponent implements OnInit {
  Menu_Title:string[];
  Router_List:string[];
  constructor(private router: Router) {
    this.Menu_Title=[
      "Journal Transaction",
      "General Ledger",
      "Income Statement",
      "Reconciliation",
      "Inventory Stock",
      "Purchase Order",
      "Invoice"
    ]
    this.Router_List=[
      "Journal_Transaction",
      "General_ledger",
      "Income_Statement",
      "Reconciliation",
      "Inventory_Stock",
      "Purchase_Order",
      "Invoice"
    ]
   }
  
//OLD one
  pages: botton[] = [
    {Name: 'Journal Transaction', Route: 'Journal_Transaction'},
    {Name: 'General Ledger', Route: 'General_Ledger'},
    {Name: 'Income Statement', Route: 'Income_Statement'},
    {Name: 'Reconciliation', Route: 'Reconciliation'},
    {Name: 'Inventory Stock', Route: 'Inventory_Stock'},
  ];

  ngOnInit() { 
  }

  navigateTo(value){
    //console.log(value);
    this.router.navigate(['financial/',value]);
  
  }

}
