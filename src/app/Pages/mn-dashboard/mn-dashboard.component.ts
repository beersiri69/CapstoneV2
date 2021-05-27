import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

interface botton{
  Name: string;
  Route: string;
}

@Component({
  selector: 'app-mn-dashboard',
  templateUrl: './mn-dashboard.component.html',
  styleUrls: ['./mn-dashboard.component.scss']
})

export class MnDashboardComponent implements OnInit {
  Menu_Title:string[];
  Router_List:string[];
  public PropChange : any[];
  constructor(private router: Router) {
    this.Menu_Title=[
      "Daily",
      "Weekly",
      "Monthly"
    ]
    this.Router_List=[
      "Daily",
      "Weekly",
      "Monthly"
    ]
   }
  
//OLD one
  pages: botton[] = [
    {Name: 'Daily', Route: 'daily'},
    {Name: 'Weekly', Route: 'weekly'},
    {Name: 'Monthly', Route: 'monthly'},
  ];

  ngOnInit(): void {
    this.PropChange = ["btn-sel","btn-menu","btn-menu"]
  }

  check(e){
    var target = e.target || e.srcElement || e.currentTarget
    var x = target.id
    for ( let i in this.PropChange){
      this.PropChange[i] = "btn-menu"
    }
    this.PropChange[x] = "btn-sel"
  }

  navigateTo(value){
    //console.log(value);
    this.router.navigate(['managerdashboard/',value]);
  
  }

}

