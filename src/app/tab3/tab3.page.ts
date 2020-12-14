import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { IncomeInputDialogService } from './../income-input-dialog.service';
import { IncomeService } from '../income.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page {

  title = 'Monthly Income';

  constructor(private toastCtrl: ToastController, public alertController: AlertController, public dataService: IncomeService, public inputDialogService: IncomeInputDialogService) {};

  /*Load incomes array from dataService*/
  loadIncomes() {
    return this.dataService.getIncomes();
  }

  /*Function to remove incomes from list*/ 
  async removeIncome(income, index) {
    console.log('Removed ' + income.name + '.');
    /*Declaring toast then present to screen*/
    let toast = await this.toastCtrl.create({
      message: 'Removed ' + income.name + '.',
      duration: 3000,
      position: 'top'
    });
  
    toast.present();

    /*Removing income from array*/
    this.dataService.removeIncome(index);
  }

  /*Function to add incomes to list*/
  addIncome() {
    console.log('Adding new income.');
    this.inputDialogService.showPrompt();
  }

  /*Function to edit incomes in list*/ 
  async editIncome(income, index) {
    console.log('Editing ' + income.name + '.');
    /*Declaring toast then present to screen*/
    let toast = await this.toastCtrl.create({
      message: 'Editing ' + income.name + '.',
      duration: 3000,
      position: 'top'
    });
  
    toast.present();
    this.inputDialogService.showPrompt(income, index);
  }
}
