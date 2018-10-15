import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import {EventService} from './shared/services/event.service'
import {ToastrService} from './shared/services/toastr.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventService,ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
