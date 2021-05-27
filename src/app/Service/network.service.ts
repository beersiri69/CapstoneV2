import { PurchaseAll } from './../Model/purchase';
import { ExpenseAll } from './../Model/expense.Model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Observer } from 'rxjs'
import { TestAll } from '../Model/test'
import { CustomerAll } from '../Model/customer'
import { StaffAll } from '../Model/staff'
import { TransactionAll} from '../Model/transaction.model'
import { IncomeAll } from '../Model/income.model'
import { DeliverAll } from '../Model/deliver';
import { PaymentAll } from '../Model/payment';
import { ReconAll } from '../Model/recon.Model';


@Injectable({
  providedIn: 'root'
})

export class NetworkService {

  private TestURL = `https://localhost:44389/api/auth/test`
  private cusAPI = `https://localhost:44389/api/auth/customer`
  private staffAPI = `https://localhost:44389/api/auth/staff`
  private GetExpenseAPI = 'https://localhost:44389/api/auth/getexpense'

  private DeliverAllAPI = 'https://localhost:44389/api/auth/DeliverAll'
  private PaymentAllAPI = 'https://localhost:44389/api/auth/PaymentAll'
  private PurchaseAllAPI = 'https://localhost:44389/api/auth/PurchaseAll'

  private SearchStaffAPI =''
  private SearchCustomerAPI =''
  private GetTransactionAPI = ''
  private GetTransactionStartAPI = ''
  private GetIncomeFromStartAPI = ''
  private SumCashBeforeDateAPI = ''
  private GetIncomeBetweenAPI = ''

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
    this.SearchStaffAPI = 'https://localhost:44389/api/auth/searchStaffby/' + id;
 
    return this.httpClient.get<StaffAll>(this.SearchStaffAPI)
  }
  searchCustomerby(id): Observable<CustomerAll>{
    this.SearchCustomerAPI = 'https://localhost:44389/api/auth/searchCustomerby/' + id;
 
    return this.httpClient.get<CustomerAll>(this.SearchCustomerAPI)
  }

  GetTransaction(Date): Observable<TransactionAll>{
    this.GetTransactionAPI = 'https://localhost:44389/api/auth/TransactionByDate/' + Date;

    return this.httpClient.get<TransactionAll>(this.GetTransactionAPI)
  }

  GetTransactionStart(Date): Observable<TransactionAll>{
    this.GetTransactionStartAPI = 'https://localhost:44389/api/auth/Transactionfromstart/' + Date;

    return this.httpClient.get<TransactionAll>(this.GetTransactionStartAPI)
  }

  GetIncomeFromStart(Date): Observable<IncomeAll>{
    this.GetIncomeFromStartAPI = 'https://localhost:44389/api/auth/IncomeBeforeDate/' + Date;

    return this.httpClient.get<IncomeAll>(this.GetIncomeFromStartAPI)
  }

  SumCashBeforeDate(Date): Observable<TransactionAll>{
    this.SumCashBeforeDateAPI = 'https://localhost:44389/api/auth/SumCashBeforeDate/' + Date;
    
    return this.httpClient.get<TransactionAll>(this.SumCashBeforeDateAPI)
  }

  GetExpense(): Observable<ExpenseAll>{     
    return this.httpClient.get<ExpenseAll>(this.GetExpenseAPI)
  }

  
  GetIncomeBetween(StartDate,EndDate): Observable<IncomeAll>{     
    this.GetIncomeBetweenAPI = 'https://localhost:44389/api/auth/IncomeBetween/?Start=' + StartDate + '&End='+ EndDate;
    return this.httpClient.get<IncomeAll>(this.GetIncomeBetweenAPI)
  }

  GetDeliverAll(): Observable<DeliverAll>{     
    return this.httpClient.get<DeliverAll>(this.DeliverAllAPI)
  }

  GetPaymentAll(): Observable<PaymentAll>{     
    return this.httpClient.get<PaymentAll>(this.PaymentAllAPI)
  }

  GetPurchaseAll(): Observable<PurchaseAll>{     
    return this.httpClient.get<PurchaseAll>(this.PurchaseAllAPI)
  }

  Api = ''

  GetReconcil(Date): Observable<ReconAll>{ 
    console.log("START")
    this.Api = 'https://localhost:44389/api/auth/Reconlist/'    
    return this.httpClient.get<ReconAll>(this.Api + Date)
  }
}
