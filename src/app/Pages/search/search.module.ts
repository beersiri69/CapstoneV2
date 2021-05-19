import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { StaffComponent } from './staff/staff.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';




@NgModule({
  declarations: [
    CustomerComponent,
    StaffComponent,
    InvoiceComponent,
    PurchaseOrderComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule

  ]
})
export class SearchModule { }
