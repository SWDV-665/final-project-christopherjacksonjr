import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  incomes = [];

  constructor() { }

  /*Get incomes array*/
  getIncomes() {
    return this.incomes;
  }

  /*Removing income from array*/
  removeIncome(index) {
    this.incomes.splice(index, 1);
  }

  /*Adding income to array*/
  addIncome(income) {
    this.incomes.push(income);
  }

  /*Saving income to array with new information*/
  editIncome(income, index) {
    this.incomes[index] = income;
  }
}
