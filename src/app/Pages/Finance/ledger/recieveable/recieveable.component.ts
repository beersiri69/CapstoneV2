import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/Service/network.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-recieveable',
  templateUrl: './recieveable.component.html',
  styleUrls: ['./recieveable.component.scss']
})
export class RecieveableComponent implements OnInit {

  constructor(private networkService : NetworkService,) { }

  ngOnInit(): void {
  }

  addEvent(event: MatDatepickerInputEvent<Date>){

  }

}
