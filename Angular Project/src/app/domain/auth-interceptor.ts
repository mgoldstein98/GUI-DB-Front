import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem('id_token');

    console.log('intercepted request ... ');

    //  Clone the request to add the new header.
    const authReq = req.clone({ headers: req.headers.set('Authorization', 'bearer ' + idToken) });

    console.log('Sending request with new header now ...');

    // send the newly created request
    return next.handle(authReq)
      .catch((error, caught) => {
        // intercept the respons error and displace it to the console
        console.log('Error Occurred');
        console.log(error);
        // return the error to the method that called it
        return Observable.throw(error);
      }) as any;
  }
}
