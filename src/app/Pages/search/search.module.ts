import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { StaffComponent } from './staff/staff.component';
import { ComponentsModule } from 'src/app/Layouts/components.module';



@NgModule({
  declarations: [
    CustomerComponent,
    StaffComponent,

  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ComponentsModule
  ]
})
export class SearchModule { }
