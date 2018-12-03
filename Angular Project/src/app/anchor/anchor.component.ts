import { Component, OnInit, Input } from '@angular/core';
import { Story } from './../domain/models/story';
import { HttpClientRoutes } from './../domain/http-client-routes.service';
import { Account } from './../domain/models/account';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.css']
})
export class AnchorComponent implements OnInit {
  @Input()
  anchor: Account;
  myStories: Story[];

  constructor(
    private route: ActivatedRoute,
    private myHttp: HttpClientRoutes,
    private router: Router) { }

  ngOnInit() {
    this.myHttp.getMyStories(this.anchor.userID).subscribe((stories) => {
      this.myStories = stories;
    });
  }

  markDone(index: number) {
    this.myHttp.updatePoints(this.anchor.userID, this.myStories[index].storyID).subscribe((points) => {

      this.myHttp.deleteStory(this.myStories[index].storyID).subscribe((deleted) => {
        this.myStories.splice(index, 1);
        this.router.navigateByUrl(`home/${localStorage.getItem('id')}`);
      });
    });
  }
}

