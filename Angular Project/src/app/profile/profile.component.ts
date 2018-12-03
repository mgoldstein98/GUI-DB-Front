import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientRoutes } from '../domain/http-client-routes.service';
import { Account } from '../domain/models/account';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  account: Account;

  constructor(
    private route: ActivatedRoute,
    private myHttp: HttpClientRoutes
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.myHttp.getUser(+params['userID']).subscribe((response) => {
        console.log(response[0]);
        this.account = response[0];
      });
   });
  }

}
