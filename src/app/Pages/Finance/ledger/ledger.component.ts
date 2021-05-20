import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {} from '../../search/search.component'

interface botton{
  Name: string;
  Route: string;
}

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['../../search/search.component.scss']
})

export class LedgerComponent implements OnInit {
  constructor(private router: Router) { } 
  public PropChange : any[];
    // B
  ledgers: botton[] = [
    {Name: 'Account Receivable', Route: 'Account_Receivable'},
    {Name: 'Account Payable', Route: 'Account_Payable'},
    {Name: 'Stock', Route: 'Stock'},
    {Name: 'Cash', Route: 'Cash'},
  ];

  ngOnInit(): void {
    this.PropChange = ["btn-menuuu","btn-menuuu","btn-menuuu","btn-menuuu"]
  }

  check(e){
    var target = e.target || e.srcElement || e.currentTarget
    var x = target.id
    for ( let i in this.PropChange){
      this.PropChange[i] = "btn-menuuu"
    }
    this.PropChange[x] = "btn-selll"
  }

  navigateTo(value){
    console.log(value);
    this.router.navigate(['financial/General_Ledger',value]);
  
  }

}
