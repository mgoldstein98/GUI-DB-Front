import { Component, OnInit, Input } from '@angular/core';
import { Expert } from '../domain/models/expert';
import { Story } from '../domain/models/story';
import { HttpClientRoutes } from '../domain/http-client-routes.service';
import { MatTableDataSource } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.css']
})
export class ExpertComponent implements OnInit {


  thisStory: Story;

  myExpert: Expert [];
  availableExpert: Expert [];
  displayedColumns: string[] = ['Name', 'Topic', 'actionColumn'];

  dataSource = new MatTableDataSource();
  dataSource_2 = new MatTableDataSource();


  dataChange: BehaviorSubject<Expert[]>;

  constructor(
    private myHttp: HttpClientRoutes,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // this.displayedColumns;
    this.route.params.subscribe(params => {
      this.myHttp.getStory(+params['storyID']).subscribe((response) => {
        this.thisStory = response[0];
        this.getAvailableExperts(this.thisStory.storyID);
        this.getCurrExperts(this.thisStory.storyID);
      });
    });

  }

  addExpert(index: number) {
    this.myHttp.claimExpert(this.availableExpert[index].expertID, this.thisStory.storyID).subscribe((expert) => {
      this.myExpert.push(this.availableExpert[index]);
      this.availableExpert.splice(index, 1);
      this.dataSource._updateChangeSubscription();
      this.dataSource_2._updateChangeSubscription();
    });
  }

  removeExpert(index: number) {
    this.myHttp.unclaimExpert(this.thisStory.storyID, this.myExpert[index].expertID).subscribe((expert) => {
      this.availableExpert.push(this.myExpert[index]);
      this.myExpert.splice(index, 1);
      this.dataSource._updateChangeSubscription();
      this.dataSource_2._updateChangeSubscription();
    });
  }

  getCurrExperts(storyID: number) {
    this.myHttp.getReservedExperts(storyID).subscribe((experts) => {
      this.myExpert = experts;
      this.dataSource_2.data = experts;
    });
  }

  getAvailableExperts(storyID: number) {
    this.myHttp.getAvailableExperts(storyID).subscribe((experts) => {
      this.availableExpert = experts;
      this.dataSource.data = experts;
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
