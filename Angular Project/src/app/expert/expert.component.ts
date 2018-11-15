import { Component, OnInit, Input } from '@angular/core';
import { Expert } from '../domain/models/Expert';
import { Story } from '../domain/models/story';
import { HttpClientRoutes } from '../domain/http-client-routes.service';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.css']
})
export class ExpertComponent implements OnInit {

  // @Input()
  thisStory: Story

  myExpert: Expert [];
  availableExpert: Expert [];
  constructor(private myHttp: HttpClientRoutes) { }

  ngOnInit() {
    this.thisStory = {
      "storyID": 2,
    }
    this.getAvailableVehicles(this.thisStory.storyID);
    this.getCurrVehicles(this.thisStory.storyID);

  }

  addExpert(index:number){
    this.myHttp.claimExpert(this.availableExpert[index].expertID, this.thisStory.storyID).subscribe((expert) => {
      this.myExpert.push(this.availableExpert[index]);
      this.availableExpert.splice(index, 1);
    })
  }

  removeExpert(index: number) {
    this.myHttp.unclaimExpert(this.thisStory.storyID, this.myExpert[index].expertID).subscribe((expert) => {
      this.availableExpert.push(this.myExpert[index]);
      this.myExpert.splice(index, 1);
    })
  }

  getCurrVehicles(storyID: number) {
    this.myHttp.getReservedExperts(storyID).subscribe((experts) => {
      this.myExpert = experts;
    })
  }

  getAvailableVehicles(storyID: number) {
    this.myHttp.getAvailableExperts(storyID).subscribe((experts) => {
      this.availableExpert = experts;
    })
  }
}
