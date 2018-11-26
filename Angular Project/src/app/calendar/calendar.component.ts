import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { EquipCalendarComponent } from '../equip-calendar/equip-calendar.component';
import { VehicleCalendarComponent } from '../vehicle-calendar/vehicle-calendar.component';
import { Account } from '../domain/models/account';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  equipLoaded: boolean;
  vehicleLoaded: boolean;

  anchor: Account;

  constructor() { }

  ngOnInit() {
    this.equipLoaded = false;
    this.vehicleLoaded = false;
  }

  loadEquipmentCalendar() {
    this.equipLoaded = true;
    this.vehicleLoaded = false;
  }

  loadVehicleCalendar() {
    this.vehicleLoaded = true;
    this.equipLoaded = false;
  }

}

