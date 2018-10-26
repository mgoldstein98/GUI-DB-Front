import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import * as moment from 'moment';
import 'fullcalendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(function() {
      // page is now ready, initialize the calendar...
      $('#calendar').fullCalendar({
        // put your options and callbacks here
        defaultView: 'month'
      });
    });

  }

}
