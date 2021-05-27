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
  { path: './staff', Name: "Staff" },
  { path: './customer', Name: "Customer" },
  { path: './invoice', Name: "Invoice" },
  { path: './purchase_order', Name: "Purchase Order" },
]

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  SearhForm: FormGroup;
  public Bottonshow: any[];
  public PropChange: any[];

  constructor(private router: Router,
    private networkService: NetworkService)

  { }


  ngOnInit() {
    this.Bottonshow = bottonall.filter(Bottonshow => Bottonshow)
    this.PropChange = ["btn-sel", "btn-menu", "btn-menu", "btn-menu"]
  }
  check(e) {
    var target = e.target || e.srcElement || e.currentTarget
    var x = target.id
    for (let i in this.PropChange) {
      this.PropChange[i] = "btn-menu"
    }

    this.PropChange[x] = "btn-sel"

  }
}


