import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ExpensesService } from './expenses.service';
import { InputDialogService } from './input-dialog.service';
import { Calendar } from '@ionic-native/calendar/ngx';
import { IncomeService } from './income.service';
import { IncomeInputDialogService } from './income-input-dialog.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, CommonModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ExpensesService,
    InputDialogService,
    Calendar,
    IncomeService,
    IncomeInputDialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
