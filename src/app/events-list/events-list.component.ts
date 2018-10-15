import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/services/event-services';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events:any[]

  constructor(private eventService:EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents()
  }

 

}
