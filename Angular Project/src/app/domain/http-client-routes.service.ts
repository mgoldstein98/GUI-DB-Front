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
      .post<Account>(`${this.endPoint}/accounts/login`, { email, pass }, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  signup(userName: string, email: string, pass: string, typeFlag: number): Observable<String> {
    return this.httpClient
      .post<String>(`${this.endPoint}/accounts/newAccount`, { userName, email, pass, typeFlag }, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  getUser(id: number): Observable<Account> {
    return this.httpClient
      .get<Account>(`${this.endPoint}/accounts/${id}`, this.httpOptions)
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

  getMyStories(anchorID: number): Observable<Story[]> {
    return this.httpClient
      .get<Story[]>(`${this.endPoint}/stories/myStories/${anchorID}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  // Not in backend
  // Only called by managers to populate dashboard cards
  getMyAnchors(managerID: number): Observable<Account[]> {
    return this.httpClient
      .get<Account[]>(`${this.endPoint}/accounts/myAnchors/${managerID}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  // Not in backend
  // Used to populate 'add an anchor' table in manager component
  getUnmanagedAnchors(): Observable<Account[]> {
    return this.httpClient
      .get<Account[]>(`${this.endPoint}/accounts/unmanagedAnchors`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  // Not in backend
  // Only called by anchors in profile page
  getMyManager(email: string): Observable<Account> {
    return this.httpClient
      .get<Account>(`${this.endPoint}/accounts/myManager/${email}`);
  }

  // // Return all stories for a given anchor to populate anchor card
  // getStories(userID: number): Observable<Story[]> {
  //   return this.httpClient
  //     .get<Story[]>(`${this.endPoint}/stories/myStories/${userID}`, this.httpOptions)
  //     .pipe(catchError(this.handleException));
  // }

  unassignAnchorStory(anchorID: number, storyID: number): Observable<String> {
    return this.httpClient
      .put<String>(`${this.endPoint}/accounts/unassignFromStory/${storyID}`, anchorID, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  getAvailableVehicles(storyID: number): Observable<Vehicle[]> {
    return this.httpClient
      .get<Vehicle[]>(`${this.endPoint}/stories/availableVehicles/${storyID}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  getAvailableExperts(storyID: number): Observable<Expert[]> {
    return this.httpClient
      .get<Expert[]>(`${this.endPoint}/stories/availableExperts/${storyID}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  getAvailableEquipment(storyID: number): Observable<Equipment[]> {
    return this.httpClient
      .get<Equipment[]>(`${this.endPoint}/stories/availableEquipment/${storyID}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  getAvailableStories(): Observable<Story[]> {
    return this.httpClient
      .get<Story[]>(`${this.endPoint}/stories/unclaimed`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  claimStory(anchorID: number, storyID: number): Observable<Story> {
    return this.httpClient
      .put<Story>(`${this.endPoint}/stories/assignAnchor`, { anchorID, storyID }, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  claimVehicle(vehicleID: number, storyID: number): Observable<Vehicle> {
    return this.httpClient
      .post<Vehicle>(`${this.endPoint}/vehicles/reserve`, {vehicleID, storyID}, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  claimEquipment(equipID: number, storyID: number): Observable<Equipment> {
    return this.httpClient
      .put<Equipment>(`${this.endPoint}/equipment/reserve`, {equipID, storyID}, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  claimExpert(expertID: number, storyID: number): Observable<Expert> {
    return this.httpClient
      .put<Expert>(`${this.endPoint}/experts/reserve`, {expertID, storyID}, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  unclaimStory(storyID: number): Observable<Story> {
    return this.httpClient
      .put<Story>(`${this.endPoint}/accounts/unassignFromStory/${storyID}`, storyID, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  unclaimVehicle(storyID: number, vehicleID: number): Observable<Vehicle> {
    return this.httpClient
      .delete<Vehicle>(`${this.endPoint}/vehicles/deleteReservation/${storyID}/${vehicleID}`)
      .pipe(catchError(this.handleException));
  }

  unclaimEquipment(storyID: number, equipID: number): Observable<Equipment> {
    return this.httpClient
      .delete<Equipment>(`${this.endPoint}/equipment/deleteReservation/${storyID}/${equipID}`)
      .pipe(catchError(this.handleException));
  }

  unclaimExpert(storyID: number, expertID: number): Observable<Expert> {
    return this.httpClient
      .delete<Expert>(`${this.endPoint}/experts/deleteReservation/${storyID}/${expertID}`)
      .pipe(catchError(this.handleException));
  }

  protected handleException(exception: any) {
    const message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
    alert(message);
    return Observable.throw(exception);
  }

}
