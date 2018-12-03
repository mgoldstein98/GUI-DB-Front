import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../domain/models/vehicle';
import { Story } from '../domain/models/story';
import { HttpClientRoutes } from '../domain/http-client-routes.service';
import { MatTableDataSource } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  thisStory: Story;

  myVehicles: Vehicle [];
  availableVehicles: Vehicle [];
  displayedColumns: string[] = ['Type', 'Name', 'Color', 'Model', 'actionColumn'];

  dataSource = new MatTableDataSource();
  dataSource_2 = new MatTableDataSource();


  dataChange: BehaviorSubject<Vehicle[]>;

  constructor(
    private myHttp: HttpClientRoutes,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.myHttp.getStory(+params['storyID']).subscribe((response) => {
        this.thisStory = response[0];
        this.getAvailableVehicles(this.thisStory.storyID);
        this.getCurrVehicles(this.thisStory.storyID);
      });
    });
  }

  addVehicle(index: number) {
    this.myHttp.claimVehicle(this.availableVehicles[index].vehicleID, this.thisStory.storyID).subscribe((vehicle) => {

      this.myVehicles.push(this.availableVehicles[index]);
      this.availableVehicles.splice(index, 1);
      this.dataSource._updateChangeSubscription();
      this.dataSource_2._updateChangeSubscription();
    });
  }

  removeVehicle(index: number) {
    this.myHttp.unclaimVehicle(this.thisStory.storyID, this.myVehicles[index].vehicleID).subscribe((vehicle) => {
      this.availableVehicles.push(this.myVehicles[index]);
      this.myVehicles.splice(index, 1);
      this.dataSource._updateChangeSubscription();
      this.dataSource_2._updateChangeSubscription();
    });
  }

  getCurrVehicles(storyID: number) {
    this.myHttp.getReservedVehicles(storyID).subscribe((vehicles) => {
      this.myVehicles = vehicles;
      this.dataSource_2.data = vehicles;
    });
  }

  getAvailableVehicles(storyID: number) {
    this.myHttp.getAvailableVehicles(storyID).subscribe((vehicles) => {
      this.availableVehicles = vehicles;
      this.dataSource.data = vehicles;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  returnToDash() {

    const id = localStorage.getItem('id');
    this.router.navigateByUrl(`home/${id}`);

  }



}
