import { Component, OnInit, Input } from '@angular/core';
import { Equipment } from '../domain/models/equipment';
import { Story } from '../domain/models/story';
import { HttpClientRoutes } from '../domain/http-client-routes.service';
import { MatTableDataSource } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  // @Input()
  thisStory: Story;

  myEquipment: Equipment [];
  availableEquipment: Equipment [];
  displayedColumns: string[] = ['Type', 'Name', 'actionColumn'];

  dataSource = new MatTableDataSource();
  dataSource_2 = new MatTableDataSource();


  dataChange: BehaviorSubject<Equipment[]>;


  constructor(
    private myHttp: HttpClientRoutes,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // this.displayedColumns;

    this.route.params.subscribe(params => {
      this.myHttp.getStory(+params['storyID']).subscribe((response) => {
        this.thisStory = response[0];
        this.getAvailableEquipment(this.thisStory.storyID);
        this.getCurrEquipment(this.thisStory.storyID);
      });
    });

  }// end of ng

  addEquipment(index: number) {
    this.myHttp.claimEquipment(this.availableEquipment[index].equipID, this.thisStory.storyID).subscribe((equipment) => {
      this.myEquipment.push(this.availableEquipment[index]);
      this.availableEquipment.splice(index, 1);
      this.dataSource._updateChangeSubscription();
      this.dataSource_2._updateChangeSubscription();
    });
  }

  removeEquipment(index: number) {
    this.myHttp.unclaimEquipment(this.thisStory.storyID, this.myEquipment[index].equipID).subscribe((equipment) => {
      this.availableEquipment.push(this.myEquipment[index]);
      this.myEquipment.splice(index, 1);
      this.dataSource._updateChangeSubscription();
      this.dataSource_2._updateChangeSubscription();
    });
  }

  getCurrEquipment(storyID: number) {
    this.myHttp.getReservedEquipment(storyID).subscribe((equipment) => {
      this.myEquipment = equipment;
      this.dataSource_2.data = equipment;
    });
  }

  getAvailableEquipment(storyID: number) {
    this.myHttp.getAvailableEquipment(storyID).subscribe((equipment) => {
      this.availableEquipment = equipment;
      this.dataSource.data =  equipment;

    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  returnToDash() {

    // get logged in id from local storage in case
    // this is a manager editing stories and not the
    // anchor himself

    const id = localStorage.getItem('id');
    this.router.navigateByUrl(`home/${id}`);

  }

}
