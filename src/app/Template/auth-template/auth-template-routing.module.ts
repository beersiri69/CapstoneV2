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
import { FinanceModule } from 'src/app/Pages/Finance/finance.module';
import { FinanceComponent } from 'src/app/Pages/Finance/finance.component';
import { LedgerComponent } from 'src/app/Pages/Finance/ledger/ledger.component';
import { CashComponent } from 'src/app/Pages/Finance/ledger/cash/cash.component';
import { InventoryComponent } from 'src/app/Pages/Finance/ledger/inventory/inventory.component';
import { PayableComponent } from 'src/app/Pages/Finance/ledger/payable/payable.component';
import { RecieveableComponent } from 'src/app/Pages/Finance/ledger/recieveable/recieveable.component';

const Authroute: Routes = [
  {
    path: '',
    component: AuthTemplateComponent,
    children: 
    [ { path:'search', redirectTo:'search/staff',pathMatch:'full'},
      { path:'financial', redirectTo:'financial/Journal_Transaction',pathMatch:'full'},


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
          { path:'Income_Statement',    component: LedgerComponent},
          { path:'Reconciliation',    component: LedgerComponent},
          { path:'Inventory Stock',    component: LedgerComponent},
          { path:'General_Ledger',    component: LedgerComponent},
          { path:'Purchase Order',    component: LedgerComponent},
        ]
      },
      
      { path:'managerdashboard',      component: MnDashboardComponent},
      { path:'operatordashboard',     component: OpDashboardComponent},
      {
        path:'search' ,component: SearchComponent,
        children:[
          {path: 'staff' , component: StaffComponent},
          {path: 'customer' , component: CustomerComponent},  
        ] 
      },
    ]
  },
 
   
 ];

@NgModule({
  imports: [RouterModule.forChild(Authroute)],
  exports: [RouterModule]
})
export class AuthTemplateRoutingModule { }