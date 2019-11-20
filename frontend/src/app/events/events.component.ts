import { EventsService } from './../services/events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events=[];
  constructor(private eventService:EventsService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(res=>{
      console.log(res);
      this.events = res;
    },
    err => {
      console.log('err in getting events');
    })
  }

}
