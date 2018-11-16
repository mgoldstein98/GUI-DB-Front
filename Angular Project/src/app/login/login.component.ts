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

  ngOnInit() {  }

  login() {
    this.email = this.email.trim();
    this.pass = this.pass.trim();
    console.log(this.email);
    console.log(this.pass);
    this.myHttp.login(this.email, this.pass).subscribe((response) => {
      console.log(response);
      this.router.navigateByUrl(`home/${response[1][0].userID}`);

    });
  }

}
