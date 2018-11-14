import { Component, OnInit } from '@angular/core';
import { HttpClientRoutes } from './../domain/http-client-routes.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private myHttp: HttpClientRoutes) { }

  ngOnInit() {
    this.email = '';
    this.password = '';
  }

  login() {
    this.myHttp.login(this.email, this.password).subscribe((response) => {
      console.log(response);
    });
  }

}
