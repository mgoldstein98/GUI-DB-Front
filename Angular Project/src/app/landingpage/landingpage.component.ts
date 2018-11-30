import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './../navbar/navbar.component';
import { Router } from '@angular/router';
import { AuthService } from '../domain/auth.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    // pass through this page if user is already logged in
    if (localStorage.getItem('id') != null) {
      this.router.navigateByUrl(`home/${localStorage.getItem('id')}`);
    }
  }

}
