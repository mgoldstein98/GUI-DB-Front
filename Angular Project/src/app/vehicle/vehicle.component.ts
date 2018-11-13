<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../domain/models/Vehicle';
=======
import { Component, OnInit, Input } from '@angular/core';
import { VehicleService } from './vehicle.service';
import { Vehicle } from '../domain/models/vehicle';
import { Story } from '../domain/models/story';
import { HttpClientRoutes } from '../domain/http-client-routes.service';

>>>>>>> 2157bae12f2f74b45b1e9adf4a4386c2713f37c7

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
<<<<<<< HEAD
  myVehicles: Vehicle [];
  availableVehicles: Vehicle [];
  

  constructor() { }

  ngOnInit() {

    this.myVehicles = [
      {
        vehicleName:'Name1',
        vehicleType:'type1',
        color:'black',
        model:'model_1'
      },
      {
        vehicleName:'Name2',
        vehicleType:'type2',
        color:'red',
        model:'model_2'
      },
      {
        vehicleName:'Name1',
        vehicleType:'type1',
        color:'black',
        model:'model_1'
      }
    ]

    this.availableVehicles = [
      {
        vehicleName:'AName',
        vehicleType:'Atype',
        color:'some color',
        model:'its a model'
      },
      {
        vehicleName:'BName',
        vehicleType:'Btype',
        color:'green',
        model:'its a model' 
      },
      {
        vehicleName:'CName',
        vehicleType:'Ctype',
        color:'red',
        model:'its a model'
      }

  ]
=======

  // @Input()
  thisStory: Story;

  myVehicles: Vehicle [];
  availableVehicles: Vehicle [];

  constructor(private myHttp: HttpClientRoutes) { }

  ngOnInit() {
    this.thisStory = {
      "storyID": 2,
    }
    this.getAvailableVehicles(this.thisStory.storyID);
    this.getCurrVehicles(this.thisStory.storyID);
>>>>>>> 2157bae12f2f74b45b1e9adf4a4386c2713f37c7
  }

  addVehicle(index:number){
    this.myHttp.claimVehicle(this.availableVehicles[index].vehicleID, this.thisStory.storyID).subscribe((vehicle) => {
      console.log(vehicle);
      this.myVehicles.push(this.availableVehicles[index]);
      this.availableVehicles.splice(index, 1);
    })
  }

  removeVehicle(index: number) {
    this.myHttp.unclaimVehicle(this.thisStory.storyID, this.myVehicles[index].vehicleID).subscribe((vehicle)=> {
      this.availableVehicles.push(this.myVehicles[index]);
      this.myVehicles.splice(index, 1);
    })
  }

  getCurrVehicles(storyID: number) {
    this.myHttp.getReservedVehicles(storyID).subscribe((vehicles) => {
      this.myVehicles = vehicles;
      console.log("My Vehicles: " , this.myVehicles);
    })
  }

  getAvailableVehicles(storyID: number) {
    this.myHttp.getAvailableVehicles(storyID).subscribe((vehicles) => {
      this.availableVehicles = vehicles;
      console.log("Available Vehicles", this.availableVehicles);
    })
  }

<<<<<<< HEAD
  
  
}
=======



>>>>>>> 2157bae12f2f74b45b1e9adf4a4386c2713f37c7
