import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { EventsComponent } from './events/events.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/events',
    pathMatch:'full'
    
  },
  {
    path:'events',
    component:EventsComponent
  },
  {
    path:'special-events',
    component:SpecialEventsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent

  },
  {
    path:'register',
    component:RegisterComponent
  },
  { path: '**', redirectTo: '/events' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
