import { Injectable , Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './services/auth.service';
AuthService

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private inject : Injector) { }

  intercept(req,next){
    let authService = this.inject.get(AuthService);
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization : `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
