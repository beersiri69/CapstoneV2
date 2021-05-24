import { Income } from './../../../Model/income.model';
import { formatDate } from '@angular/common';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NetworkService } from '../../../Service/network.service';
import { Expense } from './../../../Model/expense.Model';
@Component({
  selector: 'app-incomestatement',
  templateUrl: './incomestatement.component.html',
  styleUrls: ['./incomestatement.component.scss'],
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

  Sale_GShow: string;
  Sale_DShow: string;
  Total_SaleShow: string;
  Purchase_GShow: string;
  Purchase_DShow: string;
  Gross_ProfitShow: string;
  SalaryShow: string;
  UtilityShow: string;
  DepreciationShow: string;
  Net_IncomeShow: string;
  TotalPurchaseShow: string;

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
          this.Sale_GShow = this.Sale_Gasohol.toFixed(2)
          this.Sale_DShow = this.Sale_Diesel.toFixed(2)
          this.Purchase_GShow = this.Purchase_Gasohol.toFixed(2)
          this.Purchase_DShow = this.Purchase_Diesel.toFixed(2)

          this.TotalSale = this.Sale_Diesel + this.Sale_Gasohol;
          this.Total_SaleShow = this.TotalSale.toFixed(2)

          this.TotalPurchase = this.Purchase_Gasohol + this.Purchase_Diesel;
          this.TotalPurchaseShow = this.TotalPurchase.toFixed(2)

          this.GrossProfit = this.TotalSale - this.TotalPurchase;
          this.Gross_ProfitShow = this.GrossProfit.toFixed(2)
          console.log(2);
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
        this.SalaryShow = this.Salary.toFixed(2);
        this.UtilityShow = this.Utility.toFixed(2);
        this.DepreciationShow = this.Depreciation.toFixed(2);
        this.Net_IncomeShow = this.Netincome.toFixed(2);
        console.log(3);
      },
      (err) => {}
    );
  }


}
