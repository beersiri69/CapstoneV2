import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/Service/network.service';
import { Customer } from 'src/app/Model/customer'
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',

})
export class CustomerComponent implements OnInit {

  CustomerAll : Customer[] | undefined;
  Count : number | undefined;

  constructor(private networkService : NetworkService) { }

  ngOnInit(): void {
    this.feedUser();
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

}
