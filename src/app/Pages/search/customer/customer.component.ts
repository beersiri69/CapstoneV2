import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/Service/network.service';
import { Customer } from 'src/app/Model/customer'
import { AuthService } from 'src/app/Service/auth.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['../search.component.scss']
})
export class CustomerComponent implements OnInit {

  CustomerAll : Customer[] | undefined;
  Count : number | undefined;

  constructor(private networkService : NetworkService,
    private auth:AuthService
    ) { }

  ngOnInit(): void {
    this.feedUser();
    this.auth.CheckPernission()
  }
  feedUser(){
    this.networkService.getCustomer().subscribe(
      data => {
          this.CustomerAll = data.result
          //alert(JSON.stringify(this.CustomerAll))
          this.Count = this.CustomerAll.length
      },
      err =>{
        //alert("Cannot get user data");
      });
  }
  myModel = '' 
  valuechange(){  
    if(this.myModel.length > 3){
      this.networkService.searchCustomerby(this.myModel).subscribe(
        data => {        
          this.CustomerAll = data.result  
          //this.query = data.result
          //console.log(data.result)            
        },
        err =>{
            alert("can not getuser")
        });
    }else{
      this.feedUser();
    }
  }
}
