import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NetworkService } from 'src/app/Service/network.service';
import { Staff } from 'src/app/Model/staff'
interface botton {
  path: string;
  Name: string;
}

export const bottonall: botton[] = [
  {path:'./staff' , Name:"Staff"},
  {path:'./customer' , Name:"Customer"},
  {path:'./invoice' , Name:"Invoice"},
  {path:'./purchase_order' , Name:"Purchase Order"},
]



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})


export class SearchComponent implements OnInit {
  SearhForm: FormGroup;
  public Bottonshow: any[];


  constructor(private router : Router,
             private networkService:NetworkService,
              
    ) { }
    
    
  ngOnInit() {
    this.Bottonshow = bottonall.filter(Bottonshow => Bottonshow)    

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

  
