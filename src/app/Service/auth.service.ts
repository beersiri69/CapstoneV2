import { Login } from './../Model/login';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs'
import { Logindata } from '../Model/login'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private httpClient: HttpClient) { }

  private LoginURL: string | undefined
  
  getLogin(id,pwd): Observable<Logindata>{
    this.LoginURL = 'https://localhost:44389/api/auth/login/' + id
    return this.httpClient.get<Logindata>(this.LoginURL)
  }

}
