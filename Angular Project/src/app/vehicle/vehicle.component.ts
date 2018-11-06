import { Component, OnInit } from '@angular/core';
import { VehicleService } from './vehicle.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  vehicles: Observable<any[]>;
  columns: string[];

  constructor(private atService: VehicleService) { }

  ngOnInit() {
    this.columns = this.atService.getColumns();
    this.vehicles = this.atService.getVechiles();
  }

  addEquipment(){

  }
}
