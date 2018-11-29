import { Component, OnInit } from '@angular/core';
import { HttpClientRoutes } from './../domain/http-client-routes.service';
import { Account } from '../domain/models/account';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../domain/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})
export class AccountCreationComponent implements OnInit {

  account: Account;
  form: FormGroup;
  passCheck = false;


  constructor(
    private myHttp: HttpClientRoutes,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit() {

    // pass through this page if user is already logged in
    if (this.auth.isLoggedIn()) {
      this.router.navigateByUrl(`home/${localStorage.getItem('id')}`);
    }

    this.account = {};
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.min(5), Validators.max(45), Validators.email]],
      password: ['', [Validators.required, Validators.min(8)]],
      confirmPassword: ['', [Validators.required, Validators.min(8)]],
      accType: ['', [Validators.required]]
    });
  }

  createAccount() {

    if (this.form.controls['password'].value !== this.form.controls['confirmPassword'].value) {
      this.passCheck = true;
      return;
    }

    console.log(this.account);
    this.myHttp.signup(this.account.userName, this.account.email, this.account.pass, this.account.typeFlag).subscribe((response) => {
      console.log(response);
      this.auth.login(this.account.email, this.account.pass);

    });
  }
}
