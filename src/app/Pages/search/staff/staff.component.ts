import { Staff } from 'src/app/Model/staff'
import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/Service/network.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',

})
export class StaffComponent implements OnInit {

  
  StaffAll : Staff[] | undefined;
  Count : number | undefined;

  constructor(private networkService : NetworkService) { }

  ngOnInit(): void {
    this.feedUser();
  }
  feedUser(){
    this.networkService.getStaff().subscribe(
      data => {
          this.StaffAll = data.result
          //alert(JSON.stringify(this.StaffAll))
          this.Count = this.StaffAll.length
      },
      err =>{
        alert("Cannot get user data");
      });
  }

}
