import { Component, OnInit } from '@angular/core';
import { AuthService } from '../domain/auth.service';
import { Router } from '@angular/router';
import { Account } from '../domain/models/account';
import { HttpClientRoutes } from '../domain/http-client-routes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private myHttp: HttpClientRoutes) { }

  user: Account;

  ngOnInit() {

    if (localStorage.getItem('id') != null) {
      this.myHttp.getUser(+localStorage.getItem('id')).subscribe((response) => {
        this.user = response[0];
      });
    }
  }

  logout() {
    this.auth.logout();
  }

  navToHome() {
    this.router.navigateByUrl(`home/${localStorage.getItem('id')}`);
  }
  navToCal() {
    this.router.navigateByUrl(`calendar/${localStorage.getItem('id')}`);
  }

  navToProfile() {
    this.router.navigateByUrl(`profile/${localStorage.getItem('id')}`);
  }

}
