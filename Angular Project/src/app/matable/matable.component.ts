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

  manager: Account;
  myAnchors: Account[];
  availableAnchors: Account[];

  constructor(
    private myHttp: HttpClientRoutes,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.myHttp.getUser(+params['userID']).subscribe((response) => {
        this.manager = response[0];
        this.getMyAnchors();
        this.getUnmanagedAnchors();
      });
    });
  }

  getMyAnchors() {
    this.myHttp.getMyAnchors(this.manager.userID).subscribe((anchors) => {
      console.log('GETTING ANCHORS ' + anchors);
      this.myAnchors = anchors;
    });
  }

  getUnmanagedAnchors() {
    this.myHttp.getUnmanagedAnchors().subscribe((anchors) => {
      this.availableAnchors = anchors;
    });
  }

  addAnchor(index: number) {
    console.log("man ID", this.manager.userID);
    console.log("anchor moving", this.availableAnchors[index]);
    this.myHttp.addAnchor(this.manager.userID, this.availableAnchors[index].userID).subscribe((response) => {
      this.myAnchors.push(this.availableAnchors[index]);
      this.availableAnchors.splice(index, 1);
    });
  }

  removeAnchor(index: number) {
    console.log("man ID", this.manager.userID);
    console.log("anchor moving", this.myAnchors[index]);
    this.myHttp.removeAnchor(this.manager.userID, this.myAnchors[index].userID).subscribe((response) => {
      console.log(response);
      this.availableAnchors.push(this.myAnchors[index]);
      this.myAnchors.splice(index, 1);
    });
  }
}
