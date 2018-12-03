import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientRoutes } from '../domain/http-client-routes.service';
import { Account } from '../domain/models/account';
import { Event } from '../domain/models/event';

import * as $ from 'jquery';
import * as moment from 'moment';
import 'fullcalendar';

@Component({
  selector: 'app-equip-calendar',
  templateUrl: './equip-calendar.component.html',
  styleUrls: ['./equip-calendar.component.css']
})
export class EquipCalendarComponent implements OnInit {
  constructor(private route: ActivatedRoute, private myHttp: HttpClientRoutes) { }
  dates: Event[] = [];

  @Input()
  anchor: Account;

  ngOnInit() {
    this.myHttp.getMyReservedEquipment(this.anchor.userID).subscribe((reservations) => {
      for (const entry in reservations) {
        this.dates.push(reservations[entry].equipName, reservations[entry].storyDate, reservations[entry].model);
      }
      if (this.dates.length === 7) {
        $('#calendar').fullCalendar({

          showNonCurrentDates: false,
          height: 10,
          contentHeight: 600,
          events:
          [
            {
              title: `${this.dates[0].title}`,
              start: `${this.dates[0].start}`,
              allDay: true
            },
            {
              title: `${this.dates[1].title}`,
              start: `${this.dates[1].start}`,
              allDay: true
            },
            {
              title: `${this.dates[2].title}`,
              start: `${this.dates[2].start}`,
              allDay: true
            },
            {
              title: `${this.dates[3].title}`,
              start: `${this.dates[3].start}`,
              allDay: true
            },
            {
              title: `${this.dates[4].title}`,
              start: `${this.dates[4].start}`,
              allDay: true
            },
            {
              title: `${this.dates[5].title}`,
              start: `${this.dates[5].start}`,
              allDay: true
            },
            {
              title: `${this.dates[6].title}`,
              start: `${this.dates[6].start}`,
              allDay: true
            }
          ],
          eventColor: '#3AAFA9'
        });
      }
      if (this.dates.length === 6) {
        $('#calendar').fullCalendar({

          showNonCurrentDates: false,
          height: 10,
          contentHeight: 600,
          events:
          [
            {
              title: `${this.dates[0].title}`,
              start: `${this.dates[0].start}`,
              allDay: true
            },
            {
              title: `${this.dates[1].title}`,
              start: `${this.dates[1].start}`,
              allDay: true
            },
            {
              title: `${this.dates[2].title}`,
              start: `${this.dates[2].start}`,
              allDay: true
            },
            {
              title: `${this.dates[3].title}`,
              start: `${this.dates[3].start}`,
              allDay: true
            },
            {
              title: `${this.dates[4].title}`,
              start: `${this.dates[4].start}`,
              allDay: true
            },
            {
              title: `${this.dates[5].title}`,
              start: `${this.dates[5].start}`,
              allDay: true
            }
          ],
          eventColor: '#3AAFA9'
        });
      }
      if (this.dates.length === 5) {
        $('#calendar').fullCalendar({

          showNonCurrentDates: false,
          height: 10,
          contentHeight: 600,
          events:
          [
            {
              title: `${this.dates[0].title}`,
              start: `${this.dates[0].start}`,
              allDay: true
            },
            {
              title: `${this.dates[1].title}`,
              start: `${this.dates[1].start}`,
              allDay: true
            },
            {
              title: `${this.dates[2].title}`,
              start: `${this.dates[2].start}`,
              allDay: true
            },
            {
              title: `${this.dates[3].title}`,
              start: `${this.dates[3].start}`,
              allDay: true
            },
            {
              title: `${this.dates[4].title}`,
              start: `${this.dates[4].start}`,
              allDay: true
            }
          ],
          eventColor: '#3AAFA9'
        });
      }
      if (this.dates.length === 4) {
        $('#calendar').fullCalendar({

          showNonCurrentDates: false,
          height: 10,
          contentHeight: 600,
          events:
          [
            {
              title: `${this.dates[0].title}`,
              start: `${this.dates[0].start}`,
              allDay: true
            },
            {
              title: `${this.dates[1].title}`,
              start: `${this.dates[1].start}`,
              allDay: true
            },
            {
              title: `${this.dates[2].title}`,
              start: `${this.dates[2].start}`,
              allDay: true
            },
            {
              title: `${this.dates[3].title}`,
              start: `${this.dates[3].start}`,
              allDay: true
            }
          ],
          eventColor: '#3AAFA9'
        });
      }
      if (this.dates.length === 3) {
        $('#calendar').fullCalendar({

          showNonCurrentDates: false,
          height: 10,
          contentHeight: 600,
          events:
          [
            {
              title: `${this.dates[0].title}`,
              start: `${this.dates[0].start}`,
              allDay: true
            },
            {
              title: `${this.dates[1].title}`,
              start: `${this.dates[1].start}`,
              allDay: true
            },
            {
              title: `${this.dates[2].title}`,
              start: `${this.dates[2].start}`,
              allDay: true
            }
          ],
          eventColor: '#3AAFA9'
        });
      }
      if (this.dates.length === 2) {
        $('#calendar').fullCalendar({

          showNonCurrentDates: false,
          height: 10,
          contentHeight: 600,
          events:
          [
            {
              title: `${this.dates[0].title}`,
              start: `${this.dates[0].start}`,
              allDay: true
            },
            {
              title: `${this.dates[1].title}`,
              start: `${this.dates[1].start}`,
              allDay: true
            }
          ],
          eventColor: '#3AAFA9'
        });
      }
      if (this.dates.length === 1) {
        $('#calendar').fullCalendar({

          showNonCurrentDates: false,
          height: 10,
          contentHeight: 600,
          events:
          [
            {
              title: `${this.dates[0].title}`,
              start: `${this.dates[0].start}`,
              allDay: true
            }
          ],
          eventColor: '#3AAFA9',
        });
      }
      if (this.dates.length === 0) {
        $('#calendar').fullCalendar({

          showNonCurrentDates: false,
          height: 10,
          contentHeight: 600,
          events:
            [
            ]
        });
      }
    })
  }

}
