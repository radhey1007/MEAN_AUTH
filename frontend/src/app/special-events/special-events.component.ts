import { EventsService } from './../services/events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss']
})
export class SpecialEventsComponent implements OnInit {
 
  specialEvents: any;

  constructor(private eventService:EventsService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(res=>{
      console.log(res);
      this.specialEvents = res;
    },
    err => {
      console.log('err in getting events');
    })
  }

}
