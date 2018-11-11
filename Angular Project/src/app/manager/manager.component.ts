import { Component, OnInit } from '@angular/core';
import { Account } from './../domain/models/account';
import { HttpClientRoutes } from './../domain/http-client-routes.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  manager: Account;
  // myAnchors: Account[];

  constructor(private myHttp: HttpClientRoutes) { }

  ngOnInit() {
    this.getAnchors(this.manager.userID);
  }

  getAnchors(myId: number) {
    this.myHttp.getMyAnchors(myId).subscribe((returnedAnchors) => {
      this.manager.myAnchors = returnedAnchors;
    });
  }

}
