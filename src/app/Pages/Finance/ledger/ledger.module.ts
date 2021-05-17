import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LedgerRoutingModule } from './ledger-routing.module';
import { LedgerComponent } from './ledger.component';
import { RecieveableComponent } from './recieveable/recieveable.component';
import { PayableComponent } from './payable/payable.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CashComponent } from './cash/cash.component';
import { MatSelectModule } from '@angular/material/select';


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
    LedgerRoutingModule
  ]
})
export class LedgerModule { }
