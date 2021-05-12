import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Observer } from 'rxjs'
import { TestAll } from '../Model/test'

@Injectable({
  providedIn: 'root'
})

export class NetworkService {

  private TestURL = `https://localhost:44389/api/auth/test`

  constructor(private httpClient: HttpClient) { }

  getTest(): Observable<TestAll>{
    return this.httpClient.get<TestAll>(this.TestURL)
  }
}
