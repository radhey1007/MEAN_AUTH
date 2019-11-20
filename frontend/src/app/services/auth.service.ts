import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl ='http://localhost:3000/api/';

  constructor(private http:HttpClient) {
  }

   registerUser = (user) => {
    return this.http.post(this.baseUrl + 'register' , user);
   }

   login = (user) => {
    return this.http.post(this.baseUrl + 'login' , user);
   }

   loggedIn = () =>{
     return !!localStorage.getItem('token');
   }

}
