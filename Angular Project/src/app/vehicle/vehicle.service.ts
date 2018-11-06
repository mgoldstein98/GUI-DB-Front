import { Injectable } from '@angular/core';
import { Vechiles_data } from './mock-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VehicleService {

  constructor() { }

  getVechiles(): Observable<any[]>{
    return Observable.of(Vechiles_data);
  }

  getColumns(): string[]
  {
    return ["id","name","type","color","model","capacity"];
  };

}
