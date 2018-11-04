import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpClientRoutes {

  protected endPoint = 'http://54.203.53.152:8080';

  protected httpOptions = {
    headers: new HttpHeaders({
      //?????
    })
  };

  constructor(
    protected httpClient: HttpClient
  ) {}

  // NEED BACK TO CREATE ENDPOINT
  login(email: string, pass: string): Observable<Account> {
    return this.httpClient
      .post<Account>(`${this.endPoint}/login`, email, pass, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  signup(name: string, pass: string, jobTitle: number): Observable<Account> {
    return this.httpClient
      .post<Account>(`${this.endPoint}/newAccount`, name, pass, jobTitle, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  //Only called by managers
  getMyAnchors(email: string): Observable<Account[]> {
    return this.httpClient
      .get<Account[]>(`${this.endPoint}/getMyAnchors/${email}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  getUnmanagedAnchors(): Observable<Account[]> {
    return this.httpClient
      .get<Account[]>(`${this.endPoint}/'getUnmanagedAnchors'/`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  //Only called by anchors
  getMyManager(email: string): Observable<Account> {
    return this.httpClient
      .get<Account>(`${this.endPoint}/getMyManager/${email}`)
  }



  //--------------------------------
  getById(id: number): Observable<Account> {
    return this.httpClient
      .get<Account>(`${this.endPoint}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  add(account: Account): Observable<Account> {
    return this.httpClient
      .post<Account>(this.endPoint, account, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  update(id: number, account: Account): Observable<Account> {
    return this.httpClient
      .put<Account>(`${this.endPoint}/${id}`, account, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  protected handleException(exception: any) {
    const message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
    alert(message);
    return Observable.throw(exception);
  }
}
