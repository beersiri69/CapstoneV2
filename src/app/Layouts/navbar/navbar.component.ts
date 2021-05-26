import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES1, ROUTES2} from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  constructor(location: Location,  private element: ElementRef, private router: Router) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES1.filter(listTitle => listTitle);
    this.listTitles = ROUTES2.filter(listTitle => listTitle);
  }
  getTitle(){
    var Titlee = this.router.url
    var Title_return = Titlee.replace('/','');
    return Title_return;
  }
  Log_Name = '';
  Log_SurName = '';
  
}
