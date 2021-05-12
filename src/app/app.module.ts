import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule  } from 'angular2-chartjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { SidebarComponent } from './Layouts/sidebar/sidebar.component';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './Pages/home/home.component';
import { OpDashboardComponent } from './Pages/op-dashboard/op-dashboard.component';
import { MnDashboardComponent } from './Pages/mn-dashboard/mn-dashboard.component';
import { SearchComponent } from './Pages/search/search.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { GeneralJournalComponent } from './Pages/Finance/general-journal/general-journal.component'
import { from } from 'rxjs';

const appRoutes:Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full' },
  {path:"Home", component:HomeComponent},
  {path:"OperatorDashboard", component:OpDashboardComponent},
  {path:"ManagerDashboard", component:MnDashboardComponent},
  {path:"Search", component:SearchComponent},
  {path:"GeneralJournal", component:GeneralJournalComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    OpDashboardComponent,
    MnDashboardComponent,
    SearchComponent,
    GeneralJournalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ChartModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
