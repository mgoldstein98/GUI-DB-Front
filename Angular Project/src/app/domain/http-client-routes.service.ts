import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Account } from './models/account';
import { Story } from './models/story';
import { Vehicle } from './models/vehicle';
import { Expert } from './models/expert';
import { Equipment } from './models/equipment';

@Injectable()
export class HttpClientRoutes {

  protected endPoint = 'http://54.203.53.152:8080';

  protected httpOptions = {
    headers: new HttpHeaders({
      // ?????
    })
  };

  constructor(
    protected httpClient: HttpClient
  ) { }


  login(email: string, pass: string): Observable<Account> {
    return this.httpClient
      .post<Account>(`${this.endPoint}/login`, { email, pass }, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  signup(name: string, pass: string, jobTitle: number): Observable<Account> {
    return this.httpClient
      .post<Account>(`${this.endPoint}/newAccount`, { name, pass, jobTitle }, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  // Called upon click of plus sign in anchor table by manager
  addAnchor(managerID: number, userID: number): Observable<String> {
    return this.httpClient
      .post<String>(`${this.endPoint}/assignAnchor`, { managerID, userID }, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  getReservedVehicles(storyID: number): Observable<Vehicle[]> {
    return this.httpClient
      .get<Vehicle[]>(`${this.endPoint}/stories/reservedVehicles/${storyID}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  getReservedExperts(storyID: number): Observable<Expert[]> {
    return this.httpClient
      .get<Expert[]>(`${this.endPoint}/stories/reservedExperts/${storyID}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  getReservedEquipment(storyID: number): Observable<Equipment[]> {
    return this.httpClient
      .get<Equipment[]>(`${this.endPoint}/stories/reservedEquipment/${storyID}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  // Only called by managers to populate dashboard cards
  getMyAnchors(managerID: number): Observable<Account[]> {
    return this.httpClient
      .get<Account[]>(`${this.endPoint}/getMyAnchors/${managerID}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  // Used to populate 'add an anchor' table in manager component
  getUnmanagedAnchors(): Observable<Account[]> {
    return this.httpClient
      .get<Account[]>(`${this.endPoint}/'getUnmanagedAnchors'/`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  // Only called by anchors in profile page
  getMyManager(email: string): Observable<Account> {
    return this.httpClient
      .get<Account>(`${this.endPoint}/getMyManager/${email}`);
  }

  // Return all stories for a given anchor to populate anchor card
  getStories(userID: number): Observable<Story[]> {
    return this.httpClient
      .get<Story[]>(`${this.endPoint}/myStories/${userID}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  unassignAnchorStory(anchorID: number, storyID: number): Observable<String> {

    return this.httpClient
      .put<String>(`${this.endPoint}/accounts/unassignFromStory/${storyID}`, anchorID, this.httpOptions)
      .pipe(catchError(this.handleException));
  }


  protected handleException(exception: any) {
    const message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
    alert(message);
    return Observable.throw(exception);
  }
}
