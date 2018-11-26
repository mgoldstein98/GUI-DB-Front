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

    this.myHttp.login(email, password).subscribe((response) => {
      console.log('hit login');

      if (response[0] === 0) {
        console.log('INVALID CREDENTIALS. LOGIN FAILED.');

      } else {
        // [1,{"userID":"actualID"}, token] is the response
        // do something with jwt in response[2] here
        // navigate using response[1];

        console.log('HTTP LOGIN RESPONSE' + response);
        console.log('Setting session');

        const expiresAt = moment().add(response[2].expiresIn, 'second');
        localStorage.setItem('id_token', response[2]);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
        localStorage.setItem('id', response[1].userID);

        this.router.navigateByUrl(`home/${response[1].userID}`);

      }
    }, (err) => { console.log(err); }

    );
  }

  logout() {

    // can clear local storage since we aren't using it
    // anywhere else in the application
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('id');
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
