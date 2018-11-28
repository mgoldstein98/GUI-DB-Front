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
      expertTopic: ['', [Validators.required]]
    });

    console.log('NG oN INIT');
    this.getAnchors();
    this.vehicle = {};
    this.equipment = {};
    this.expert = {};
    this.story = {};
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

}
