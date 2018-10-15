import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/services/event.service';
import {ToastrService} from '../shared/services/toastr.service';
import {ActivatedRoute} from '@angular/router'
import { IEvent } from '../shared';

declare let toastr

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events:IEvent

  constructor(private eventService:EventService,private toastr:ToastrService,private route:ActivatedRoute) { }

  ngOnInit() {  
   this.events = this.route.snapshot.data['events']
   console.log(this.events)
  }
  handleThumbnailClick(eventName:string){
    //this.toastr.success(eventName)
  }

 

}
