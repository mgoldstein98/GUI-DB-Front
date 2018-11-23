import { Component, OnInit } from '@angular/core';
import { HttpClientRoutes } from './../domain/http-client-routes.service';
import { Account } from '../domain/models/account';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matable',
  templateUrl: './matable.component.html',
  styleUrls: ['./matable.component.css']
})
export class MatableComponent implements OnInit {
  managerAcc: Account;
  myAnchors: Account[];
  availableAnchors: Account[];
  constructor(
    private myHttp: HttpClientRoutes,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.myHttp.getUser(+params['userID']).subscribe((response) => {
        this.managerAcc = response[0];
        this.getMyAnchors();
        this.getUnmanagedAnchors();
      });
    });
  }

  getMyAnchors() {
    this.myHttp.getMyAnchors(this.managerAcc.userID).subscribe((anchors) => {
      console.log(anchors);
      this.myAnchors = anchors;
    });
  }

  getUnmanagedAnchors() {
    this.myHttp.getUnmanagedAnchors().subscribe((anchors) => {
      this.availableAnchors = anchors;
    });
  }

  addAnchor(index: number) {
    console.log(index);
  }

  removeAnchor(index: number) {
    console.log(index);
  }
}
