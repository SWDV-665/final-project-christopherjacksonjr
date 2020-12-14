import { Injectable } from '@angular/core';

@Injectable()
export class ExpensesService {
  expenses = [];

  constructor() { }

  /*Get expenses array*/
  getExpenses() {
    return this.expenses;
  }

  /*Removing expense from array*/
  removeExpense(index) {
    this.expenses.splice(index, 1);
  }

  /*Adding expense to array*/
  addExpense(expense) {
    this.expenses.push(expense);
  }

  /*Saving expense to array with new information*/
  editExpense(expense, index) {
    this.expenses[index] = expense;
  }
}
