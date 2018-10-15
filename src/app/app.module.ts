import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventListResolver,
  EventService,
  ToastrService} from './shared/index'
import {} from './user/index'
import {
  EventDetailsComponent,
  EventRouteActivator
} from './event-details'
import {E404Component} from './error'

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateEventComponent } from './create-event/create-event.component';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    E404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    {
      provide:'canDeactivateCreateEvent',
      useValue:checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
  return window.confirm('You have not saved the data, Do you really want to cancel?')
  return true
}
