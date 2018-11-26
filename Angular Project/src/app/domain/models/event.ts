import * as moment from 'moment';

export class Event {
  constructor(a, b, c) {
    this.start = (b);
    this.title = (a);
    this.description = (c);
  }
  start?: Date;
  title?: String;
  description?: String;
}
