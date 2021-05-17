import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

import { FinanceRoutingModule } from './finance-routing.module';
import { GeneralJournalComponent } from './general-journal/general-journal.component';
import { FinanceComponent } from './finance.component';
import { LedgerModule } from './ledger/ledger.module';
import { IncomestatementComponent } from './incomestatement/incomestatement.component';
import { ReconciliationComponent } from './reconciliation/reconciliation.component';
import { InventorystockComponent } from './inventorystock/inventorystock.component';


@NgModule({
  declarations: [
    GeneralJournalComponent,
    FinanceComponent,
    IncomestatementComponent,
    ReconciliationComponent,
    InventorystockComponent,  
  ],
  imports: [
    MatSelectModule,
    CommonModule,
    FinanceRoutingModule,
    LedgerModule
  ]
  
})
export class FinanceModule { }
