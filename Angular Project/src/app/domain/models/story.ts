import {Vehicle} from './vehicle';
import {Expert} from './expert';
import {Equipment} from './equipment';
import {Account} from './account';

export class Story {
  category?: string;
  anchor?: Account;
  date?: Date;
  description?: string;
  timeStart?: Date;
  timeEnd?: Date;
  equipment?: Equipment[];
  vehicle?: Vehicle[];
  expert?: Expert[];
}
