import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES1: RouteInfo[] = [
    { path: 'operatordashboard', title: 'Operation Dashboard',  icon: 'ni ni-chart-bar-32 text-blue', class: '' },
    { path: 'login', title: 'Logout',  icon:'ni-button-power text-info', class: '' },
];

export const ROUTES2: RouteInfo[] = [
  { path: 'managerdashboard', title: 'Operation Dashboard',  icon:'ni ni-chart-bar-32 text-blue', class: '' },
  { path: 'financial', title: 'Financial Dashboard',  icon:'ni-money-coins text-orange', class: '' },
  { path: 'search', title: 'Search',  icon:'ni fas fa-search text-red', class: '' },
  { path: 'login', title: 'Logout',  icon:'ni-button-power text-info', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }


  ngOnInit() {
    if(localStorage.getItem("UserRole")=='Staff'){
      this.menuItems = ROUTES1.filter(menuItem => menuItem);
    }
    else{
      this.menuItems = ROUTES2.filter(menuItem => menuItem);
    }
    
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
