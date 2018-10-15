import {Injectable} from '@angular/core'

@Injectable()
export class EventService{
    getEvents(){
        return EVENTS
    }

    getEvent(id:number){
      return EVENTS.find(event => event.id ===id)
    }
}
const EVENTS = [
    {
        id:1,
        name:'Fest 1',
        price:599
      },
      {
        id:2,
        name:'Fest 2',
        price:699
      },
      {
        id:3,
        name:'Fest 3',
        price:799
      },
      {
        id:4,
        name:'Fest 4',
        price:899
      }

]