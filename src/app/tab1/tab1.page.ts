import { Component } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';
import { NavController , Platform} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {
  calendars = [];

  constructor(public navCtrl: NavController, private calendar: Calendar, private plt: Platform) {
    this.plt.ready().then(() => {
      this.calendar.listCalendars().then(data => {
        this.calendar = data;
      });
    });
  }

  addEvent(cal) {
    let date = new Date();
    let options = { calendarId: cal.id, calendarName: cal.name, firstReminderMinutes: 15};

    this.calendar.createEventInteractivelyWithOptions('My New Event', 'St. Louis', 'Some Special Notes', date, date, options)
  }

  // openCal(cal) {
  //   this.navCtrl.goForward('CalDetailPage', {name: cal.name});
  // }

}
