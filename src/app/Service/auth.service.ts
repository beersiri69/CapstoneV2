import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Logindata } from '../Model/login';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient,
              private router: Router,) {}

  private LoginURL: string | undefined;

  getLogin(id, pwd): Observable<Logindata> {
    this.LoginURL = 'https://localhost:44389/api/auth/login/' + id;
    return this.httpClient.get<Logindata>(this.LoginURL);
  }

  CheckRole() {
    var x = localStorage.getItem('UserRole');

    if (x !== null) {
      console.log("routing as " + x);
    } else {
      console.log('Redirect to login');
      //this.router.navigateByUrl("/login")
    }
    return x
  }
}
