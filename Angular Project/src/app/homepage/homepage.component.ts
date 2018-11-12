import { Component, OnInit } from '@angular/core';
import { Account } from './../domain/models/account';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  // take in from login or sign up
  user: Account = {};

  // some injectable service here to populate user
  constructor() { }

  ngOnInit() {
  }

}
