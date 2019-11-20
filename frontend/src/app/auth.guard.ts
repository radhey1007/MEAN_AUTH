import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authService:AuthService,public route:Router){

  }

  canActivate():boolean {
    console.log(this.authService.loggedIn() , 'this.authService.loggedIn() in auth guard')
    if(this.authService.loggedIn()){
      return true;
    }else{
      this.route.navigate(['login']);
      return false;
    }
  }
  
}
