import { Component, OnInit, Input } from '@angular/core';
import { Account } from './../domain/models/account';
import { HttpClientRoutes } from './../domain/http-client-routes.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  // @Input()
  manager: Account;
  // myAnchors: Account[];

  constructor(private myHttp: HttpClientRoutes) { }

  ngOnInit() {
    this.manager = {
      userID: 3,
      userName: 'Manager Man',
      email: 'mgmt@anchormanagement.com',
      typeFlag: 0,
      pass: 'manager',
    };
    this.getAnchors(this.manager.userID);
  }

  getAnchors(myId: number) {
    this.myHttp.getMyAnchors(myId).subscribe((returnedAnchors) => {
      this.manager.myAnchors = returnedAnchors;
    });
  }

}
