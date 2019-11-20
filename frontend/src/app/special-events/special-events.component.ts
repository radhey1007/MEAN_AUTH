import { EventsService } from './../services/events.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss']
})
export class SpecialEventsComponent implements OnInit {
 
  specialEvents: any;

  constructor(private eventService:EventsService , public router:Router) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(res=>{
      console.log(res);
      this.specialEvents = res;
    },
    err => {
      if(err instanceof HttpErrorResponse){
        if(err.status ===401) this.router.navigate(['/login']);
      }
      console.log('err in getting events');
    })

  }

}
