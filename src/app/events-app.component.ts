import { Component } from '@angular/core';
import {AuthService} from './user/index'

@Component({
  selector: 'events-app-root',
  templateUrl: './events-app.component.html'
})
export class EventsAppComponent {
  title = 'event-app-angular-demo';
  
  constructor(private authService:AuthService){}


}
