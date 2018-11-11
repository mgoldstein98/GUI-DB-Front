import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientRoutes } from './domain/http-client-routes.service';
import { AppComponent } from './app.component';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventComponent } from './event/event.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { StoryComponent } from './story/story.component';
import { AnchorComponent } from './anchor/anchor.component';
import { ManagerComponent } from './manager/manager.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountCreationComponent,
    HomepageComponent,
    CalendarComponent,
    EventComponent,
    EquipmentComponent,
    VehicleComponent,
    StoryComponent,
    AnchorComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppModule
  ],
  providers: [
   HttpClientRoutes
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
