import {Injectable} from '@angular/core'
import {CanActivate,Router,ActivatedRouteSnapshot} from '@angular/router'
import {EventService} from '../shared/services/event.service'

@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private eventService:EventService,private router:Router){

    }

    canActivate(route:ActivatedRouteSnapshot){
        const EventExists = !!this.eventService.getEvent(+route.params['id'])

        if(!EventExists){
            this.router.navigate(['/404'])
        }
        return EventExists

    }



}