import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface LedgerList{
  Name: string;
  Route: string;
}

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.scss']
})
export class LedgerComponent implements OnInit {

  constructor(private router: Router) { }

 
  ledgers: LedgerList[] = [
    {Name: 'Account Receivable', Route: 'Account_Receivable'},
    {Name: 'Account Payable', Route: 'Account_Payable'},
    {Name: 'Stock', Route: 'Stock'},
    {Name: 'Cash', Route: 'Cash'},
  ];

  ngOnInit(): void {
  }

  navigateTo(value){
    console.log(value);
    this.router.navigate(['financial/General_Ledger',value]);
  
  }

}
