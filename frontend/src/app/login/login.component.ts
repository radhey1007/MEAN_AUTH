import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {};
  private subscription: Subscription;
  constructor(private auth:AuthService ,
              private toast:ToastrService,
              private route:Router) {  
   }

  ngOnInit() {
  }

  login = () => {
    this.subscription = this.auth.login(this.loginUserData).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem('token',res.token);
      this.route.navigate(['/special-events']);
      this.toast.success('Success','You are login successfully');
    },
    err=>{
      console.log(err);
      this.toast.error('Error', err.error);
    })
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
