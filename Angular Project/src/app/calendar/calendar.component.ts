import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { EquipCalendarComponent } from '../equip-calendar/equip-calendar.component';
import { VehicleCalendarComponent } from '../vehicle-calendar/vehicle-calendar.component';
import { ExpertTableComponent } from '../expert-table/expert-table.component';
import { Account } from '../domain/models/account';
import { ActivatedRoute } from '@angular/router';
import { HttpClientRoutes } from '../domain/http-client-routes.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  storiesLoaded: boolean;
  equipLoaded: boolean;
  vehicleLoaded: boolean;
  expertLoaded: boolean;

  anchor: Account;

  constructor(
    private route: ActivatedRoute,
    private myHttp: HttpClientRoutes) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
       this.myHttp.getUser(+params['userID']).subscribe((response) => {
         this.anchor = response[0];
       });
    });
    this.storiesLoaded = false;
    this.equipLoaded = false;
    this.vehicleLoaded = false;
    this.expertLoaded = false;
  }

  loadEquipmentCalendar() {
    this.equipLoaded = true;
    this.vehicleLoaded = false;
    this.storiesLoaded = false;
    this.expertLoaded = false;
  }

  loadVehicleCalendar() {
    this.vehicleLoaded = true;
    this.equipLoaded = false;
    this.storiesLoaded = false;
    this.expertLoaded = false;
  }

  loadStoriesCalendar() {
    this.vehicleLoaded = false;
    this.equipLoaded = false;
    this.storiesLoaded = true;
    this.expertLoaded = false;
  }

  loadExpertCalendar() {
    this.vehicleLoaded = false;
    this.equipLoaded = false;
    this.storiesLoaded = false;
    this.expertLoaded = true;
  }

}

