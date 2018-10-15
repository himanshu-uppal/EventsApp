import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/services/event.service';
import {ToastrService} from '../shared/services/toastr.service';

declare let toastr

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events:any[]

  constructor(private eventService:EventService,private toastr:ToastrService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents()
  }
  handleThumbnailClick(eventName:string){
    this.toastr.success(eventName)
  }

 

}
