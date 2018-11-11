import { Component, OnInit } from '@angular/core';
import { VehicleService } from './vehicle.service'; 
import { Vehicle } from '../domain/models/vehicle';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  
  myVehicles: Vehicle [];
  availableVehicles: Vehicle [];
  
  constructor(private atService: VehicleService) { }

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



  }

  addVehicle(index:number){
    this.myVehicles.push(this.availableVehicles[index]);
    this.availableVehicles.splice(index, 1);
  }

  removeVehicle(index: number) {
    this.availableVehicles.push(this.myVehicles[index]);
    this.myVehicles.splice(index, 1);
  }
}

    

    
 