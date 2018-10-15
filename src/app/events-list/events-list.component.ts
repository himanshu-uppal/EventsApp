import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/services/event.service';
import {ToastrService} from '../shared/services/toastr.service';
import {ActivatedRoute} from '@angular/router'

declare let toastr

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events:any

  constructor(private eventService:EventService,private toastr:ToastrService,private route:ActivatedRoute) { }

  ngOnInit() {
    console.log('fetched events')
   this.events = this.route.snapshot.data['events']
  }
  handleThumbnailClick(eventName:string){
    //this.toastr.success(eventName)
  }

 

}
