import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Observer } from 'rxjs'
import { TestAll } from '../Model/test'
import { CustomerAll } from '../Model/customer'
import { StaffAll } from '../Model/staff'

@Injectable({
  providedIn: 'root'
})

export class NetworkService {

  private TestURL = `https://localhost:44389/api/auth/test`
  private cusAPI = `https://localhost:44389/api/auth/customer`
  private staffAPI = `https://localhost:44389/api/auth/staff`
  private searchStaff =''
  private CustomerAll =''
  constructor(private httpClient: HttpClient) { }

  getTest(): Observable<TestAll>{
    return this.httpClient.get<TestAll>(this.TestURL)
  }
  getStaff(): Observable<StaffAll>{
    return this.httpClient.get<StaffAll>(this.staffAPI)
  }
  getCustomer(): Observable<CustomerAll>{
    return this.httpClient.get<CustomerAll>(this.cusAPI)
  }


  searchStaffby(id): Observable<StaffAll>{
    this.searchStaff = 'https://localhost:44389/api/auth/searchStaffby/' + id;
    //console.log(this.searchStaff)
    return this.httpClient.get<StaffAll>(this.searchStaff)
  }
  searchCustomerby(id): Observable<CustomerAll>{
    this.CustomerAll = 'https://localhost:44389/api/auth/searchCustomerby/' + id;
    //console.log(this.searchStaff)
    return this.httpClient.get<CustomerAll>(this.CustomerAll)
  }

}
