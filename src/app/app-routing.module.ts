import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { E404Component } from './error/e404.component';
import { EventRouteActivator } from './event-details/event-route-activator.service';
import { EventListResolver } from './shared/services/event-resolver.service';

const routes: Routes = [
  {path:'events/new',component:CreateEventComponent,canDeactivate:['canDeactivateCreateEvent']},
  {path:'events',component:EventsListComponent,resolve:{events:EventListResolver}},
  {path:'events/:id',component:EventDetailsComponent,canActivate:[EventRouteActivator]},
  {path:'404',component:E404Component},
  {path:'',redirectTo:'events',pathMatch:'full'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
