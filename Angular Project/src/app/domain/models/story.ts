import {Vehicle} from './vehicle';
import {Expert} from './expert';
import {Equipment} from './equipment';
import {Account} from './account';

export class Story {
  storyID?: number;
  storyTopic?: string;
  anchorID?: number;
  storyDate?: Date;
  description?: string;
  startTime?: Date;
  endTime?: Date;
  equipment?: Equipment[];
  vehicle?: Vehicle[];
  expert?: Expert[];
  points?: number;
}
