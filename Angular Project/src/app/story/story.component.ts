import { Component, OnInit, Input } from '@angular/core';
import { Account } from './../domain/models/account';
import { Vehicle } from './../domain/models/vehicle';
import { Expert } from './../domain/models/expert';
import { Equipment } from './../domain/models/equipment';
import { HttpClientRoutes } from './../domain/http-client-routes.service';
import { Story } from './../domain/models/story';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  @Input()
  anchor: Account;

  @Input()
  story: Story;

  vehicles: Vehicle[];
  experts: Expert[];
  equipment: Equipment[];



  constructor(private myHttp: HttpClientRoutes) { }

  ngOnInit() {
    this.getReservedVehicles();
    this.getReservedExperts();
    this.getReservedEquipment();
  }


  getReservedVehicles() {

    this.myHttp.getReservedVehicles(this.story.storyID).subscribe((vehicles) => {
      this.vehicles = vehicles;
    });

  }

  getReservedExperts() {

    this.myHttp.getReservedExperts(this.story.storyID).subscribe((experts) => {
      this.experts = experts;
    });

  }

  getReservedEquipment() {

    this.myHttp.getReservedEquipment(this.story.storyID).subscribe((equipment) => {
      this.equipment = equipment;
    });
  }
}
