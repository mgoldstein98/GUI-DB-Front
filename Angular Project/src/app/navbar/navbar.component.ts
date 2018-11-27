import { Component, OnInit } from '@angular/core';
import { AuthService } from '../domain/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

  navToCal() {
    this.router.navigateByUrl(`calendar/${localStorage.getItem('id')}`);
  }

  navToProfile() {
    this.router.navigateByUrl(`profile/${localStorage.getItem('id')}`);
  }

}
