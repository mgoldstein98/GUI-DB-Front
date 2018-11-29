import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientRoutes } from '../domain/http-client-routes.service';
import { Account } from '../domain/models/account';
import { Story } from '../domain/models/story';
import { Event } from '../domain/models/event';

import * as $ from 'jquery';
import * as moment from 'moment';
import 'fullcalendar';

@Component({
  selector: 'app-stories-calendar',
  templateUrl: './stories-calendar.component.html',
  styleUrls: ['./stories-calendar.component.css']
})
export class StoriesCalendarComponent implements OnInit {

  myStories: Story[] = []
  dates: Event[] = []
  @Input()
  anchor: Account;

  constructor(private route: ActivatedRoute, private myHttp: HttpClientRoutes) { }

  ngOnInit() {
    this.myHttp.getMyStories(this.anchor.userID).subscribe((stories) => {
      for (let entry in stories) {
        this.dates.push(new Event(stories[entry].storyTopic, stories[entry].storyDate, stories[entry].description));
      }
      if (this.dates.length === 7) {
        $('#calendar').fullCalendar({
          // put your options and callbacks here
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
          eventColor: '#9aa8c6'
        });
      }
      if (this.dates.length === 6) {
        $('#calendar').fullCalendar({
          // put your options and callbacks here
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
          eventColor: '#9aa8c6'
        });
      }
      if (this.dates.length === 5) {
        $('#calendar').fullCalendar({
          // put your options and callbacks here
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
          eventColor: '#9aa8c6'
        });
      }
      if (this.dates.length === 4) {
        $('#calendar').fullCalendar({
          // put your options and callbacks here
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
          eventColor: '#9aa8c6'
        });
      }
      if (this.dates.length === 3) {
        $('#calendar').fullCalendar({
          // put your options and callbacks here
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
          eventColor: '#9aa8c6'
        });
      }
      if (this.dates.length === 2) {
        $('#calendar').fullCalendar({
          // put your options and callbacks here
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
          eventColor: '#9aa8c6'
        });
      }
      if (this.dates.length === 1) {
        $('#calendar').fullCalendar({
          // put your options and callbacks here
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
          eventColor: '#9aa8c6',
        });
      }
      if (this.dates.length === 0) {
        $('#calendar').fullCalendar({
          // put your options and callbacks here
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
