import { Component, OnInit, Input } from '@angular/core';
import { Account } from './../domain/models/account';
import { HttpClientRoutes } from './../domain/http-client-routes.service';
import { Vehicle } from '../domain/models/vehicle';
import { Equipment } from '../domain/models/equipment';
import { Expert } from '../domain/models/expert';
import { Story } from '../domain/models/story';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  @Input()
  manager: Account;
  vehicle: Vehicle;
  equipment: Equipment;
  expert: Expert;
  story: Story;
  myAnchors: Account[];
  form: FormGroup;

  constructor(private myHttp: HttpClientRoutes,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      vehicleName: ['', [Validators.required]],
      vehicleType: ['', [Validators.required]],
      vehicleColor: ['', [Validators.required]],
      vehicleModel: ['', [Validators.required]],
      equipmentName: ['', [Validators.required]],
      equipmentType: ['', [Validators.required]],
      expertName: ['', [Validators.required]],
      expertTopic: ['', [Validators.required]],
      storyName: ['', [Validators.required]],
      storyDescription: ['', [Validators.required]],
      storyDate: ['', [Validators.required]],
      storyStart: ['', [Validators.required]],
      storyEnd: ['', [Validators.required]],
      storyPoints: ['', [Validators.required]]

    });

    this.getAnchors();
    this.vehicle = {};
    this.equipment = {};
    this.expert = {};
    this.story = {};
    console.log(this.myAnchors);
  }


  getAnchors() {
    this.myHttp.getMyAnchors(this.manager.userID).subscribe((anchors) => {
      console.log('GETTING ANCHORS ' + anchors);
      this.myAnchors = anchors;
    });
  }

  addVehicle() {
    this.myHttp.addVehicle(this.vehicle.vehicleName, this.vehicle.vehicleType, this.vehicle.color, this.vehicle.model)
    .subscribe((response) => {
      console.log('Vehicle added ', response);
    });
  }

  closeVehicle() {
    this.vehicle = {};
  }

  addEquipment() {
    this.myHttp.addEquipment(this.equipment.equipName, this.equipment.equipType)
    .subscribe((response) => {
      console.log('Equipment added ', response);
    });
  }

  closeEquipment() {
    this.equipment = {};
  }

  addExpert() {
    this.myHttp.addExpert(this.expert.expertName, this.expert.expertTopic)
    .subscribe((response) => {
      console.log('Expert added ', response);
    });
  }

  closeExpert() {
    this.expert = {};
  }

  addStory() {
    console.log(this.story.storyDate);
    console.log(this.story.startTime);
    console.log(this.story.endTime);
    this.myHttp.addStory(
      this.story.storyTopic,
      (this.story.storyDate).toString(),
      ((this.story.startTime).toString() + ':00'),
      ((this.story.endTime).toString() + ':00'),
      this.story.description,
      this.story.points)
    .subscribe((response) => {
      console.log('Story added ', response);
    });
  }

  closeStory() {
    this.story = {};
  }

}
