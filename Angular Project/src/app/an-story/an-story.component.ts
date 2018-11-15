import { Component, OnInit } from '@angular/core';
import { Account } from '../domain/models/account';
import { Story } from '../domain/models/story';
import { HttpClientRoutes } from '../domain/http-client-routes.service';

@Component({
  selector: 'app-an-story',
  templateUrl: './an-story.component.html',
  styleUrls: ['./an-story.component.css']
})
export class AnStoryComponent implements OnInit {

  // @Input()
  thisAnchor: Account;

  myStories: Story[];
  availableStories: Story[];
  constructor(private myHttp: HttpClientRoutes) { }

  ngOnInit() {
    this.thisAnchor = {
      "userID": 1
    }
    this.getAvailableStories();
    this.getCurrStories(this.thisAnchor.userID);

  }

  addStory(index:number){
    this.myHttp.claimStory(this.thisAnchor.userID, this.availableStories[index].storyID).subscribe((story) => {
      console.log(story);
      this.myStories.push(this.availableStories[index]);
      this.availableStories.splice(index, 1);
    })

  }

  removeStory(index: number) {
    console.log("Sent id = ", this.myStories[index].storyID);
    this.myHttp.unclaimStory(this.myStories[index].storyID).subscribe((story) => {
      console.log(story);
      this.availableStories.push(this.myStories[index]);
      this.myStories.splice(index, 1);
    })
  }

  getCurrStories(storyID: number) {
    this.myHttp.getMyStories(storyID).subscribe((stories) => {
      this.myStories = stories;
    })
  }

  getAvailableStories() {
    this.myHttp.getAvailableStories().subscribe((stories) => {
      this.availableStories = stories;
    })
  }

}