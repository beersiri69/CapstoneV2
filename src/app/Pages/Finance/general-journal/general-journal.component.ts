import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/Model/test'
import { NetworkService } from '../../../Service/network.service'
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-general-journal',
  templateUrl: './general-journal.component.html',
  styleUrls: ['./general-journal.component.scss']
})
export class GeneralJournalComponent implements OnInit {

  TestAll : Test[] | undefined;
  Count : number | undefined;

  constructor(private networkService : NetworkService) {

   }

  ngOnInit(): void {
    
  }
 
 
  
  addEvent(event: MatDatepickerInputEvent<Date>) {
    console.log(formatDate(event.value,'dd/MM/yyyy','en-US'));
  }


}
