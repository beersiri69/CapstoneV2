import { Staff } from 'src/app/Model/staff'
import { Component, OnInit ,Input} from '@angular/core';
import { NetworkService } from 'src/app/Service/network.service';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';



@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['../search.component.scss']
})
export class StaffComponent implements OnInit {

  TableName = "Staff"
  StaffAll : Staff[] | undefined;
  

  constructor(private networkService : NetworkService,
    private auth:AuthService
              
    ) { }

  ngOnInit(): void {
    this.feedUser();
    this.auth.CheckPernission()
  }
  feedUser(){
    this.networkService.getStaff().subscribe(
      data => {
          this.StaffAll = data.result            
      },
      err =>{        
      });
  }

  myModel = ''
  valuechange(){  
    
    if(this.myModel.length > 3){
      this.networkService.searchStaffby(this.myModel).subscribe(
        data => {         
          this.StaffAll = data.result 
        },
        err =>{
            alert("can not getuser")
        });
    }
    else{
      this.feedUser()
    }  
  }

  
}
