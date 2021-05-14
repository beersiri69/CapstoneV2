import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { SearchComponent } from './search.component';
import { StaffComponent } from './staff/staff.component';

const SearchRoutes: Routes = [
  {path:'' ,component: SearchComponent },
  {path: 'search/staff' , component: StaffComponent},
  {path: 'search/customer' , component: CustomerComponent},
  {
    path: '**',
    redirectTo: 'home',

  }
];

@NgModule({
  imports: [RouterModule.forChild(SearchRoutes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
