import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/Service/network.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['../search.component.scss']
})
export class InvoiceComponent implements OnInit {

  constructor( private networkService:NetworkService,) { }

  ngOnInit(): void {
  }
  myModel = '' 
  valuechange(){  
    if(this.myModel.length > 3){
      this.networkService.searchStaffby(this.myModel).subscribe(
        data => {         
          //this.query = data.result
          //console.log(data.result)            
        },
        err =>{
            alert("can not getuser")
        });
    }
  }
}
