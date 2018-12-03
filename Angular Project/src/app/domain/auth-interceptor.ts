import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem('id_token');
    const authReq = req.clone({ headers: req.headers.set('Authorization', 'bearer ' + idToken) });

    return next.handle(authReq)
      .catch((error, caught) => {
        console.log('Error Occurred');
        console.log(error);
        return Observable.throw(error);
      }) as any;
  }
}
