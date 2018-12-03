import { Component, OnInit } from '@angular/core';
import { Account } from './../domain/models/account';
import { ActivatedRoute } from '@angular/router';
import { HttpClientRoutes } from '../domain/http-client-routes.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  user: Account = {};

  constructor(private route: ActivatedRoute, private myHttp: HttpClientRoutes) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.myHttp.getUser(+params['userID']).subscribe((response) => {
        this.user = response[0];
      });
    });

  }

}
