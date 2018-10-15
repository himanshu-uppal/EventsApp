import {Injectable} from '@angular/core'
import {Subject, Observable} from 'rxjs'
import { IEvent } from '../models';

@Injectable()
export class EventService{
    getEvents():Observable<IEvent[]>{
      let subject = new Subject<IEvent[]>()
      setTimeout(()=>{subject.next(EVENTS); subject.complete();},200);
        return subject
    }

    getEvent(id:number):IEvent{
      return EVENTS.find(event => event.id ===id)
    }
}
const EVENTS:IEvent[] = [
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