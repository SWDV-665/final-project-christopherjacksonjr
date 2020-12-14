import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ExpensesService } from './expenses.service';

@Injectable()
export class InputDialogService {

  constructor(public alertController: AlertController, public dataService: ExpensesService) { }

  /*Pop up dialouge to allow users to edit expense information to be updated to list*/
  async showPrompt(expense?, index?) {
    /*Presenting alert with form for user to edit data of expense*/
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: expense ? 'Edit Expense' : 'Add Expense',
      message: expense ? 'Please edit expense...' : 'Please enter expense...',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
          value: expense ? expense.name : null
        },
        {
          name: 'amount',
          type: 'number',
          placeholder: 'Amount',
          value: expense ? expense.quantity : null
        },
        {
          name: 'date',
          type: 'date',
          placeholder: 'Date',
          value: expense ? expense.quantity : null
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: expense => {
            console.log('Confirm save', expense);
            /*Saving item to array with new information*/
            if(index !== undefined) {
              this.dataService.editExpense(expense, index);
            } else {
              /*Adding item to array*/
              this.dataService.addExpense(expense);
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
