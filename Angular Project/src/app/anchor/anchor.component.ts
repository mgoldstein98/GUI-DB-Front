import { Component, OnInit, Input } from '@angular/core';
import { Story } from './../domain/models/story';
import { HttpClientRoutes } from './../domain/http-client-routes.service';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.css']
})
export class AnchorComponent implements OnInit {
  anchor: Account;
  myStories: Story[];

  constructor(private myHttp: HttpClientRoutes) {}

  ngOnInit() {
    // account object passed from login or signup
    // change 1 to this.anchor.userID
    this.myHttp.getStories(1).subscribe((stories) => {
      this.myStories = stories;
    });
  }
}
