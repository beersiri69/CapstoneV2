import { PurchaseOrderComponent } from './../../Pages/search/purchase-order/purchase-order.component';
import { InvoiceComponent } from './../../Pages/search/invoice/invoice.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../Pages/home/home.component';
import { GeneralJournalComponent } from '../../Pages/Finance/general-journal/general-journal.component';
import { MnDashboardComponent } from '../../Pages/mn-dashboard/mn-dashboard.component';
import { OpDashboardComponent } from '../../Pages/op-dashboard/op-dashboard.component';
import { SearchComponent } from '../../Pages/search/search.component';
import { StaffComponent } from 'src/app/Pages/search/staff/staff.component';
import { CustomerComponent } from 'src/app/Pages/search/customer/customer.component';
import { AuthTemplateComponent } from './auth-template.component';
import { FinanceComponent } from 'src/app/Pages/Finance/finance.component';
import { LedgerComponent } from 'src/app/Pages/Finance/ledger/ledger.component';
import { CashComponent } from 'src/app/Pages/Finance/ledger/cash/cash.component';
import { InventoryComponent } from 'src/app/Pages/Finance/ledger/inventory/inventory.component';
import { PayableComponent } from 'src/app/Pages/Finance/ledger/payable/payable.component';
import { RecieveableComponent } from 'src/app/Pages/Finance/ledger/recieveable/recieveable.component';
import { IncomestatementComponent } from 'src/app/Pages/Finance/incomestatement/incomestatement.component';
import { ReconciliationComponent } from 'src/app/Pages/Finance/reconciliation/reconciliation.component';
import { InventorystockComponent } from 'src/app/Pages/Finance/inventorystock/inventorystock.component';
import { ExampleComponent } from 'src/app/example/example.component';
import { LoginComponent } from 'src/app/login/login.component';
import { WeeklyComponent } from 'src/app/Pages/mn-dashboard/weekly/weekly.component';
import { MonthlyComponent } from 'src/app/Pages/mn-dashboard/monthly/monthly.component';
import { DailyV2Component } from 'src/app/Pages/mn-dashboard/daily-v2/daily-v2.component';

const Authroute: Routes = [
  {
    path: '',
    component: AuthTemplateComponent,
    children: 
    [ { path:'search', redirectTo:'search/staff',pathMatch:'full'},
      { path:'financial', redirectTo:'financial/Journal_Transaction',pathMatch:'full'},
      { path:'financial/General_Ledger',redirectTo:'financial/General_Ledger/Account_Receivable',pathMatch:'full'},
      { path:'managerdashboard', redirectTo:'managerdashboard/daily',pathMatch:'full'},
      // { path:'managerdashboard', redirectTo:'managerdashboard/',pathMatch:'full'},


      { path:'home',                  component: HomeComponent},
      { path:'financial',             component: FinanceComponent,
        children:
        [
          { path:'Journal_Transaction',    component: GeneralJournalComponent},
          { path:'General_Ledger',    component: LedgerComponent,
            children:
            [
              { path:'Account_Receivable',  component: RecieveableComponent},
              { path:'Account_Payable',     component: PayableComponent},
              { path:'Stock',               component: InventoryComponent},
              { path:'Cash',                component: CashComponent},
            ]},
          { path:'Income_Statement',    component: IncomestatementComponent},
          { path:'Reconciliation',    component: ReconciliationComponent},
          { path:'Inventory_Stock',    component: InventorystockComponent},
        ]
      },
      
      { path:'managerdashboard',      component: MnDashboardComponent,
      children:[
        {path: 'daily' , component: DailyV2Component},
        {path: 'weekly' , component: WeeklyComponent}, 
        {path: 'monthly' , component: MonthlyComponent}, 
       
      ] 
    },
      { path:'operatordashboard',     component: OpDashboardComponent},
      {
        path:'search' ,component: SearchComponent,
        children:[
          {path: 'staff' , component: StaffComponent},
          {path: 'customer' , component: CustomerComponent}, 
          {path: 'invoice' , component: InvoiceComponent}, 
          {path: 'purchase_order' , component: PurchaseOrderComponent}, 
        ] 
      },
      {
        path:'example',
        component:ExampleComponent
      },
     
    ]
  },
 
   
 ];

@NgModule({
  imports: [RouterModule.forChild(Authroute)],
  exports: [RouterModule]
})
export class AuthTemplateRoutingModule { }
