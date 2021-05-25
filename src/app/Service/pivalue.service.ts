import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PivalueAll } from '../Model/pivalue.Model';

import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PivalueService {
  private AmoutGAPI =
    'https://localhost:44389/api/values/' + 'AmoutGExact' + '/';
  private AmoutDAPI =
    'https://localhost:44389/api/values/' + 'AmoutDExact' + '/';
  private TruckInAPI =
    'https://localhost:44389/api/values/' + 'TruckinExact' + '/';
  private TruckOutAPI =
    'https://localhost:44389/api/values/' + 'TruckOutExact' + '/';

  private GFailAPI = 'https://localhost:44389/api/values/' + 'FailGExact' + '/';
  private DFailAPI = 'https://localhost:44389/api/values/' + 'FailDExact' + '/';
  private CycleAPI = 'https://localhost:44389/api/values/' + 'CycleExact' + '/';
  private DBusyAPI = 'https://localhost:44389/api/values/' + 'DBusy' + '/';
  private GBusyAPI = 'https://localhost:44389/api/values/' + 'GBusy' + '/';

  private A1API = 'https://localhost:44389/api/OEE/' + 'A1' + '/';
  private A2API = 'https://localhost:44389/api/OEE/' + 'A2' + '/';
  private A3API = 'https://localhost:44389/api/OEE/' + 'A3' + '/';
  private A4API = 'https://localhost:44389/api/OEE/' + 'A4' + '/';
  private A5API = 'https://localhost:44389/api/OEE/' + 'A5' + '/';

  private P1API = 'https://localhost:44389/api/OEE/' + 'P1' + '/';
  private P2API = 'https://localhost:44389/api/OEE/' + 'P2' + '/';
  private P3API = 'https://localhost:44389/api/OEE/' + 'P3' + '/';
  private P4API = 'https://localhost:44389/api/OEE/' + 'P4' + '/';
  private P5API = 'https://localhost:44389/api/OEE/' + 'P5' + '/';

  private Q1API = 'https://localhost:44389/api/OEE/' + 'Q1' + '/';
  private Q2API = 'https://localhost:44389/api/OEE/' + 'Q2' + '/';
  private Q3API = 'https://localhost:44389/api/OEE/' + 'Q3' + '/';
  private Q4API = 'https://localhost:44389/api/OEE/' + 'Q4' + '/';
  private Q5API = 'https://localhost:44389/api/OEE/' + 'Q5' + '/';

  private APQSumAPI = 'https://localhost:44389/api/oee/AllAPQ/';
  private AVGNOQD = 'https://localhost:44389/api/oee/AVGNOQD/';
  private AVGTQD = 'https://localhost:44389/api/oee/AVGTQD/';

  private WIPDAPI = 'https://localhost:44389/api/oee/WIPD/';

  constructor(private httpClient: HttpClient) {}

  GetAmoutG(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.AmoutGAPI + Date);
  }

  GetAmoutD(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.AmoutDAPI + Date);
  }

  GetTruckIn(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.TruckInAPI + Date);
  }

  GetTruckOut(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.TruckOutAPI + Date);
  }
  GetGFail(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.GFailAPI + Date);
  }

  GetDFail(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.DFailAPI + Date);
  }

  GetCycle(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.CycleAPI + Date);
  }

  GBusy(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.GBusyAPI + Date);
  }

  DBusy(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.DBusyAPI + Date);
  }
///////////////////////////////////////////////////////////A1
///////////////////////////////////////////////////////////A1
///////////////////////////////////////////////////////////A1
///////////////////////////////////////////////////////////A1

  A1(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.A1API + Date);
  }
  A2(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.A2API + Date);
  }
  A3(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.A3API + Date);
  }
  A4(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.A4API + Date);
  }
  A5(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.A5API + Date);
  }
///////////////////////////////////////////////////////////A1
///////////////////////////////////////////////////////////A1
///////////////////////////////////////////////////////////A1
///////////////////////////////////////////////////////////A1
  Q1(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.Q1API + Date);
  }
  Q2(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.Q2API + Date);
  }
  Q3(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.Q3API + Date);
  }
  Q4(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.Q4API + Date);
  }
  Q5(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.Q5API + Date);
  }
///////////////////////////////////////////////////////////A1
///////////////////////////////////////////////////////////A1
///////////////////////////////////////////////////////////A1
///////////////////////////////////////////////////////////A1
  P1(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.P1API + Date);
  }
  P2(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.P2API + Date);
  }
  P3(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.P3API + Date);
  }
  P4(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.P4API + Date);
  }
  P5(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.P5API + Date);
  }
///////////////////////////////////////////////////////////A1
///////////////////////////////////////////////////////////A1
///////////////////////////////////////////////////////////A1
///////////////////////////////////////////////////////////A1
  
  GetAPQSumAPI(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.APQSumAPI + Date);
  }

  GetAVGNOQD(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.AVGNOQD + Date);
  }

  GetAVGTQD(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.AVGTQD + Date);
  }


  GetWIPD(Date): Observable<PivalueAll> {
    return this.httpClient.get<PivalueAll>(this.WIPDAPI + Date);
  }

}
