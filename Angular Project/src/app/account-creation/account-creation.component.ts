import { Component, OnInit } from '@angular/core';
import { HttpClientRoutes } from './../domain/http-client-routes.service';
import { Account } from '../domain/models/account';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})
export class AccountCreationComponent implements OnInit {

  account: Account;

  constructor(
    private myHttp: HttpClientRoutes,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.account = {};
  }

  createAccount () {
    console.log(this.account);
    this.myHttp.signup(this.account.userName, this.account.email, this.account.pass, this.account.typeFlag).subscribe((response) => {
      console.log(response);

      this.router.navigateByUrl(`home/${response}`);

    });
  }
}
