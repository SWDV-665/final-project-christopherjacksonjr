import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ExpensesService } from './../expenses.service';
import { InputDialogService } from './../input-dialog.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page {

  title = 'Monthly Expenses';

  constructor(private toastCtrl: ToastController, public alertController: AlertController, public dataService: ExpensesService, public inputDialogService: InputDialogService) {};

  /*Load items array from dataService*/
  loadExpenses() {
    return this.dataService.getExpenses();
  }

  /*Function to remove items from list*/ 
  async removeExpense(expense, index) {
    console.log('Removed ' + expense.name + '.');
    /*Declaring toast then present to screen*/
    let toast = await this.toastCtrl.create({
      message: 'Removed ' + expense.name + '.',
      duration: 3000,
      position: 'top'
    });
  
    toast.present();

    /*Removing item from array*/
    this.dataService.removeExpense(index);
  }

  /*Function to add items to list*/
  addExpense() {
    console.log('Adding new item.');
    this.inputDialogService.showPrompt();
  }

  /*Function to edit items in list*/ 
  async editExpense(expense, index) {
    console.log('Editing ' + expense.name + '.');
    /*Declaring toast then present to screen*/
    let toast = await this.toastCtrl.create({
      message: 'Editing ' + expense.name + '.',
      duration: 3000,
      position: 'top'
    });
  
    toast.present();
    this.inputDialogService.showPrompt(expense, index);
  }
}
