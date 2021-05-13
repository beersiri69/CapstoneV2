
import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/Model/test'
import { NetworkService } from '../../../Service/network.service'

@Component({
  selector: 'app-general-journal',
  templateUrl: './general-journal.component.html',
  styleUrls: ['./general-journal.component.scss']
})
export class GeneralJournalComponent implements OnInit {

  TestAll : Test[] | undefined;
  Count : number | undefined;

  constructor(private networkService : NetworkService) { }

  ngOnInit(): void {
    this.feedUser();
  }
  feedUser(){
    this.networkService.getTest().subscribe(
      data => {
          this.TestAll = data.result
          // alert(JSON.stringify(this.TestAll[0]['A']))
          this.Count = this.TestAll.length
      },
      err =>{
        alert("Cannot get user data");
      });
  }

}
