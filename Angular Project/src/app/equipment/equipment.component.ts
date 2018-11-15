import { Component, OnInit, Input } from '@angular/core';
import { Equipment } from '../domain/models/Equipment';
import { Story } from '../domain/models/story';
import { HttpClientRoutes } from '../domain/http-client-routes.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  // @Input()
  thisStory: Story;

  myEquipment: Equipment [];
  availableEquipment: Equipment [];

  constructor(private myHttp: HttpClientRoutes) { }

  ngOnInit() {
    this.thisStory = {
      "storyID": 2,
    }
    this.getAvailableEquipment(this.thisStory.storyID);
    this.getCurrEquipment(this.thisStory.storyID);

  }//end of ng

  addEquipment(index:number){
    this.myHttp.claimEquipment(this.availableEquipment[index].equipID, this.thisStory.storyID).subscribe((equipment) => {
      this.myEquipment.push(this.availableEquipment[index]);
      this.availableEquipment.splice(index, 1);
    })
  }

  removeEquipment(index: number){
    this.myHttp.unclaimEquipment(this.thisStory.storyID, this.myEquipment[index].equipID).subscribe((equipment) => {
      this.availableEquipment.push(this.myEquipment[index]);
      this.myEquipment.splice(index, 1);
    })
  }

  getCurrEquipment(storyID: number) {
    this.myHttp.getReservedEquipment(storyID).subscribe((equipment) => {
      this.myEquipment = equipment;
    })
  }

  getAvailableEquipment(storyID: number) {
    this.myHttp.getAvailableEquipment(storyID).subscribe((equipment) => {
      this.availableEquipment = equipment;
    })
  }

}
