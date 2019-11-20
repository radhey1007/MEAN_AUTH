import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
 
  baseUrl ='http://localhost:3000/api/';

  constructor(private http:HttpClient) { 

  }

  getEvents = () => {
    return this.http.get<any>(this.baseUrl + 'events');
   }

   getSpecialEvents = () => {
    return this.http.get<any>(this.baseUrl + 'special-events');
   }
}
