import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  event ={
    id:1,
    name:'Fest',
    price:599
  }

  constructor() { }

  ngOnInit() {
  }

  handleEventClicked(data){
    console.log(`recieved ${data}`)
  }

}
