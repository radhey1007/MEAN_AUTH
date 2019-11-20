import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {};
  private subscription: Subscription;

  constructor(public auth: AuthService,
    private toast: ToastrService,
    private route: Router) { }

  ngOnInit() {
  }

  registerUser = () => {

      this.subscription = this.auth.registerUser(this.registerUserData).subscribe((res:any) => {
      console.log(res);
      this.toast.success('Success', 'You are registered successfully');
      this.route.navigate(['/login']);
      console.log(res);
    },
      err => {
        console.log(err);
        this.toast.error('Error', err.error);
      })
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
