import { Component, OnInit, Input } from '@angular/core';
import { Story } from './../domain/models/story';
import { HttpClientRoutes } from './../domain/http-client-routes.service';
import { Account } from './../domain/models/account';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.css']
})
export class AnchorComponent implements OnInit {
  @Input()
  anchor: Account;
  myStories: Story[];

  constructor(private route: ActivatedRoute, private myHttp: HttpClientRoutes) { }

  ngOnInit() {

    console.log(this.anchor.userID);
    console.log(this.myStories);

    this.myHttp.getMyStories(this.anchor.userID).subscribe((stories) => {
      console.log(stories);
      this.myStories = stories;
    });
  }

  markDone(index: number) {
    this.myHttp.updatePoints(this.anchor.userID, this.myStories[index].storyID).subscribe((points) => {
      console.log('Points have been updated.');
      this.myHttp.deleteStory(this.myStories[index].storyID).subscribe((deleted) => {
        this.myStories.splice(index, 1);
      });
    });
  }
}

