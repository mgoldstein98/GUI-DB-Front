import { Component, OnInit } from '@angular/core';
import { HttpClientRoutes } from './../domain/http-client-routes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  pass: string;

  constructor(
    private myHttp: HttpClientRoutes,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() { }

  login() {
    this.email = this.email.trim();
    this.pass = this.pass.trim();
    console.log('Email sent: ' + this.email);
    console.log('Pass sent:' + this.pass);
    this.myHttp.login(this.email, this.pass).subscribe((response) => {
      // response[0] contains status flag
      if (response[0] === 1) {
        // response[1] contains object of user object
        this.router.navigateByUrl(`home/${response[1][0].userID}`);
      } else {
        console.log('INVALID CREDENTIALS. LOGIN FAILED.');
      }
    });
  }

}

