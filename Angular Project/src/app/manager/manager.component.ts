import { Component, OnInit, Input } from '@angular/core';
import { Account } from './../domain/models/account';
import { HttpClientRoutes } from './../domain/http-client-routes.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  
  @Input()
  manager: Account;

  myAnchors: Account[];

  constructor(private myHttp: HttpClientRoutes) { }

  ngOnInit() {
    console.log('NG oN INIT');
    this.getAnchors();
  }


  getAnchors() {
    this.myHttp.getMyAnchors(this.manager.userID).subscribe((anchors) => {
      console.log('GETTING ANCHORS ' + anchors);
      this.myAnchors = anchors;
    });
  }

}
