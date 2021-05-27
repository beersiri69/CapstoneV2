import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LedgerRoutingModule } from './ledger-routing.module';
import { LedgerComponent } from './ledger.component';
import { RecieveableComponent } from './recieveable/recieveable.component';
import { PayableComponent } from './payable/payable.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CashComponent } from './cash/cash.component';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormControl, FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    RecieveableComponent,
    PayableComponent,
    InventoryComponent,
    CashComponent,
    LedgerComponent
  ],
  imports: [
    MatSelectModule,
    CommonModule,
    LedgerRoutingModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class LedgerModule { }
