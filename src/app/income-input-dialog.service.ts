import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IncomeService } from './income.service';

@Injectable({
  providedIn: 'root'
})
export class IncomeInputDialogService {

  constructor(public alertController: AlertController, public dataService: IncomeService) { }

  /*Pop up dialouge to allow users to edit income information to be updated to list*/
  async showPrompt(income?, index?) {
    /*Presenting alert with form for user to edit data of income*/
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: income ? 'Edit Income' : 'Add Income',
      message: income ? 'Please edit income...' : 'Please enter income...',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
          value: income ? income.name : null
        },
        {
          name: 'amount',
          type: 'number',
          placeholder: 'Amount',
          value: income ? income.quantity : null
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
          handler: income => {
            console.log('Confirm save', income);
            /*Saving income to array with new information*/
            if(index !== undefined) {
              this.dataService.editIncome(income, index);
            } else {
              /*Adding income to array*/
              this.dataService.addIncome(income);
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
