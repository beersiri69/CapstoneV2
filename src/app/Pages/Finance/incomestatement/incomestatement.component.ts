import { Income } from './../../../Model/income.model';
import { formatDate } from '@angular/common';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NetworkService } from '../../../Service/network.service';
import { Expense } from './../../../Model/expense.Model';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'DD MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-incomestatement',
  templateUrl: './incomestatement.component.html',
  styleUrls: ['./incomestatement.component.scss'],
  providers: [{
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  }, { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})

export class IncomestatementComponent implements OnInit {
  IncomeAll: Income[] | undefined;
  ExpenseAll: Expense[] | undefined;

  Sale_Gasohol: number;
  Sale_Diesel: number;
  TotalSale: number;
  Purchase_Gasohol: number;
  Purchase_Diesel: number;
  TotalPurchase: number;
  GrossProfit: number;
  Salary: number;
  Utility: number;
  Depreciation: number;
  Netincome: number;
  ExpenseSum: number;
  ToShow: any;

  constructor(private networkService: NetworkService) {}

  date = new FormControl(moment([2018, 2]));
  YearTok:string
  MonthTok:String
  DateSearch:string

  ngOnInit(): void {
    this.Start_Date = formatDate('2018-03-01', 'yyyy-MM-dd', 'en_US');
    this.End_Date = formatDate('2018-03-01', 'yyyy-MM-dd', 'en_US');
    this.ResetVariable()
    
    this.GetIncome()
    this.GetSalary()
    this.Diff_Date = 1
  }
  Start_Date: any | undefined;
  End_Date: any | undefined;
  Diff_Date: any | undefined;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  Sale_GShow: any;
  Sale_DShow: any;
  Total_SaleShow: any;
  Purchase_GShow: any;
  Purchase_DShow: any;
  Gross_ProfitShow: any;
  SalaryShow: any;
  UtilityShow: any;
  DepreciationShow: any;
  Net_IncomeShow: any;
  TotalPurchaseShow: any;

  async GetDateRange(e) {
    this.Start_Date = formatDate(this.range.value.start, 'yyyy-MM-dd', 'en_US');
    this.End_Date = formatDate(this.range.value.end, 'yyyy-MM-dd', 'en_US');

    var Difference_In_Time = this.range.value.end - this.range.value.start;
    this.Diff_Date = Difference_In_Time / (1000 * 3600 * 24) + 1;

    //console.log(this.Start_Date +"   "  + this.End_Date)

    this.ResetVariable();
    await new Promise<void>((resolve, reject) => {
      this.GetIncome();
      resolve();
    });

    await new Promise<void>((resolve, reject) => {
      this.GetSalary()
      resolve();
    });
    await new Promise<void>((resolve, reject) => {      
      resolve();
    });
    
  }

  ResetVariable() {
    this.Sale_Gasohol = 0;
    this.Sale_Diesel = 0;
    this.TotalSale = 0;
    this.Purchase_Gasohol = 0;
    this.Purchase_Diesel = 0;
    this.TotalPurchase = 0;
    this.GrossProfit = 0;
    this.Salary = 0;
    this.Utility = 0;
    this.Depreciation = 0;
    this.Netincome = 0;
    console.log(1);
  }

  GetIncome() {
    this.networkService
      .GetIncomeBetween(this.Start_Date, this.End_Date)
      .subscribe(
        (data) => {
          this.IncomeAll = data.result;
          for (let i in this.IncomeAll) {
            this.Sale_Gasohol += this.IncomeAll[i].AmountSold_G_B_;
            this.Sale_Diesel += this.IncomeAll[i].AmountSold_D_B_;

            this.Purchase_Gasohol += this.IncomeAll[i].AmountPurchase_G_B_;
            this.Purchase_Diesel += this.IncomeAll[i].AmountPurchase_D_B_;
          }
          this.Sale_GShow = parseFloat(Number(this.Sale_Gasohol).toFixed(4)).toLocaleString("en")
          this.Sale_DShow = parseFloat(Number(this.Sale_Diesel).toFixed(4)).toLocaleString("en")
          this.Purchase_GShow = parseFloat(Number(this.Purchase_Gasohol).toFixed(4)).toLocaleString("en")
          this.Purchase_DShow = parseFloat(Number(this.Purchase_Diesel).toFixed(4)).toLocaleString("en")

          this.TotalSale = this.Sale_Diesel + this.Sale_Gasohol;
          this.Total_SaleShow = parseFloat(Number(this.TotalSale).toFixed(4)).toLocaleString("en")

          this.TotalPurchase = this.Purchase_Gasohol + this.Purchase_Diesel;
          this.TotalPurchaseShow = parseFloat(Number(this.TotalPurchase).toFixed(4)).toLocaleString("en")

          this.GrossProfit = this.TotalSale - this.TotalPurchase;
          this.Gross_ProfitShow = parseFloat(Number(this.GrossProfit).toFixed(4)).toLocaleString("en")
          
        },
        (err) => {}
      );
  }

  GetSalary() {
    this.networkService.GetExpense().subscribe(
      (data) => {
        this.ExpenseAll = data.result;

        this.Salary = this.ExpenseAll[0].Price_Per_day * this.Diff_Date;
        
        
        this.Depreciation = this.ExpenseAll[1].Price_Per_day * this.Diff_Date;
        this.Utility = this.ExpenseAll[2].Price_Per_day * this.Diff_Date;
        this.ExpenseSum = this.Salary + this.Depreciation + this.Utility;
        console.log(this.ExpenseSum)
        this.Netincome = this.GrossProfit - this.ExpenseSum;
        this.SalaryShow = parseFloat(Number(this.Salary).toFixed(4)).toLocaleString("en");
        this.UtilityShow = parseFloat(Number(this.Utility).toFixed(4)).toLocaleString("en");
        this.DepreciationShow = parseFloat(Number(this.Depreciation).toFixed(4)).toLocaleString("en");
        this.Net_IncomeShow = parseFloat(Number(this.Netincome).toFixed(4)).toLocaleString("en");
        console.log(3);
      },
      (err) => {}
    );
  }


}
