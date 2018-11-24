import { Injectable } from '@angular/core';
import { HttpClientRoutes } from './http-client-routes.service';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable()
export class AuthService {

  constructor(
    private myHttp: HttpClientRoutes,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  login(email: string, password: string) {

    // UGH NOT WORKING
    // return this.myHttp
    //   .post<Account>(`http://54.203.53.152:8080/login`, { email, password })
    //   .tap(res => this.setSession)
    //   .shareReplay();

    this.myHttp.login(email, password).subscribe((response) => {
      console.log('hit login');

      if (response[0] === 0) {
        console.log('INVALID CREDENTIALS. LOGIN FAILED.');

      } else {
        // [1,{"userID":"actualID"}, token] is the response
        // do something with jwt in response[2] here
        // return response[1]; // function calling service will receive userid upon success
        console.log('Setting session');
        this.setSession(response[2]);
        console.log(response);
        this.router.navigateByUrl(`home/${response[1].userID}`);

      }
    }, (err) => { console.log(err); }

    );
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    localStorage.setItem('id_token', authResult);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {

    // can clear local storage since we aren't using it
    // anywhere else in the application
    localStorage.clear();
    this.router.navigateByUrl(`/`);


  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

}
