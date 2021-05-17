import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { StaffComponent } from './staff/staff.component';




@NgModule({
  declarations: [
    CustomerComponent,
    StaffComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,

  ]
})
export class SearchModule { }
