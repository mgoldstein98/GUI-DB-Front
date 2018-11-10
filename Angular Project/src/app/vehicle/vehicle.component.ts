import { Component, OnInit } from '@angular/core';
import { VehicleService } from './vehicle.service'; 
import { Vehicle } from '../domain/models/vehicle';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  
  vechiles: Vehicle[];
  
  constructor(private atService: VehicleService) { }

  ngOnInit() {
    this.vechiles = [
      {
        vehicleName: 'name1',
        vehicleType: 'type1',
        color: 'color1',
        model: 'model1',
        capacity: '5000'


    },
    {
        vehicleName: 'name2',
        vehicleType: 'type2',
        color: 'color2',
        model: 'model2',
        capacity: '5003'
    }
    ]

    
    
  }

  
  
}
