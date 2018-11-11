import { Component, OnInit } from '@angular/core';
import { HttpClientRoutes } from './../domain/http-client-routes.service';
import { Account } from '../domain/models/account';

@Component({
  selector: 'app-matable',
  templateUrl: './matable.component.html',
  styleUrls: ['./matable.component.css']
})
export class MatableComponent implements OnInit {
  managerAccId = 2
  managerAcc: Account
  myAnchors: Account[]
  availableAnchors: Account[]
  constructor(
    private myHttp: HttpClientRoutes
  ) { }

  ngOnInit() {
    this.myHttp.getMyAnchors(this.managerAccId).subscribe((anchors) => {
      this.myAnchors = anchors;
    })
    this.myHttp.getUnmanagedAnchors().subscribe((anchors) => {
      this.availableAnchors = anchors;
    })
  }

  addAnchor(index: number) {
    console.log(index);
  }

  removeAnchor(index: number) {
    console.log(index);
  }
}
