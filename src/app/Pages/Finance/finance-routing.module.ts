import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralJournalComponent } from './general-journal/general-journal.component';

const Financeroutes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forChild(Financeroutes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
