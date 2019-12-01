import { AuthGuard } from './auth.guard';
import { EventsService } from './services/events.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatDialogModule, MatProgressBarModule } from  '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { TokenInterceptorService } from './token-interceptor.service';
import { AddEventsComponent } from './add-events/add-events.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component'


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    AddEventsComponent,
    UploadDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatProgressBarModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ToastrModule.forRoot(),
    FlexLayoutModule
  ],
  entryComponents: [UploadDialogComponent],
  providers: [AuthService ,AuthGuard , EventsService, 
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],  
  bootstrap: [AppComponent]
})
export class AppModule { }
