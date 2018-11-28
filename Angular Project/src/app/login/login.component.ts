import { Component, OnInit } from '@angular/core';
import { HttpClientRoutes } from './../domain/http-client-routes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../domain/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  pass: string;
  form: FormGroup;
  loginFailed = false;

  constructor(
    private myHttp: HttpClientRoutes,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
   }

  login() {
    this.email = this.email.trim();
    this.pass = this.pass.trim();

    // this.myHttp.login(this.email, this.pass).subscribe((response) => {
    //   console.log(response);
    //   // response[0] contains status flag
    //   if (response[0] === 1) {
    //     // response[1] contains object of user object

    //   } else {
    //     console.log('INVALID CREDENTIALS. LOGIN FAILED.');
    //   }

    // });

    this.auth.login(this.email, this.pass);
  }

}
