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
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    LedgerModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MatFormFieldModule,
    MatInputModule,
  ]
  
})
export class FinanceModule { }
