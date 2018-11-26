import { Component, OnInit } from '@angular/core';
import { Account } from '../domain/models/account';
import { Story } from '../domain/models/story';
import { HttpClientRoutes } from '../domain/http-client-routes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-an-story',
  templateUrl: './an-story.component.html',
  styleUrls: ['./an-story.component.css']
})
export class AnStoryComponent implements OnInit {


  anchor: Account;
  myStories: Story[];
  availableStories: Story[];

  constructor(
    private myHttp: HttpClientRoutes,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.myHttp.getUser(+params['userID']).subscribe((response) => {
        this.anchor = response[0];
        this.getAvailableStories();
        this.getCurrStories();
      });
    });
  }

  getCurrStories() {
    this.myHttp.getMyStories(this.anchor.userID).subscribe((stories) => {
      this.myStories = stories;
    });
  }

  getAvailableStories() {
    this.myHttp.getAvailableStories().subscribe((stories) => {
      this.availableStories = stories;
    });
  }

  addStory(index: number) {
    this.myHttp.claimStory(this.anchor.userID, this.availableStories[index].storyID).subscribe((story) => {
      this.myStories.push(this.availableStories[index]);
      this.availableStories.splice(index, 1);
    });

  }

  removeStory(index: number) {
    this.myHttp.unclaimStory(this.myStories[index].storyID).subscribe((story) => {
      this.availableStories.push(this.myStories[index]);
      this.myStories.splice(index, 1);
    });
  }

  returnToDash() {

    // get logged in id from local storage in case
    // this is a manager editing stories and not the
    // anchor himself

    const id = localStorage.getItem('id');
    this.router.navigateByUrl(`home/${id}`);

  }


}
