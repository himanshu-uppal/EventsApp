import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  EventDetailsComponent,
  EventRouteActivator
} from './event-details/index'
import {EventListResolver} from './shared/index'
import {E404Component} from './error/index'

import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { CreateEventComponent } from './create-event/create-event.component';


const routes: Routes = [
  {path:'events/new',component:CreateEventComponent,canDeactivate:['canDeactivateCreateEvent']},
  {path:'events',component:EventsListComponent,resolve:{events:EventListResolver}},
  {path:'events/:id',component:EventDetailsComponent,canActivate:[EventRouteActivator]},
  {path:'404',component:E404Component},
  {path:'',redirectTo:'events',pathMatch:'full'},
  {path:'user',loadChildren:'./user/user.module#UserModule'}
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
