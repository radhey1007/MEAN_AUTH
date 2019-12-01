import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  baseUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {

  }

  getEvents = () => {
    return this.http.get<any>(this.baseUrl + 'events');
  }

  getSpecialEvents = () => {
    return this.http.get<any>(this.baseUrl + 'special-events');
  }



  upload = (files: Set<File>) => {
    { progress: Observable }

    const status = {};
    const url = this.baseUrl + 'upload';

    files.forEach(file => {
      const formData: FormData = new FormData();
      formData.append('file',file,file.name);
      const req = new HttpRequest('POST', url , formData , {
        reportProgress:true
      })

      // create a new progress-subject for every file
      const progress  = new Subject<number>();

      // send the http-request and subscribe for progress-updates

      this.http.request(req).subscribe(event=> {
        if(event.type === HttpEventType.UploadProgress) {
          const percentDone  = Math.round(100*event.loaded/ event.total);
          progress.next(percentDone);
        } else if(event instanceof HttpResponse){
          // Close the progrss stream if we get an answer
          progress.complete();
        }
      });

        // Save every progress-observable in a map of all observables

      status[file.name] = {
        progress : progress.asObservable()
      };

    })
    return status;
  }



}
