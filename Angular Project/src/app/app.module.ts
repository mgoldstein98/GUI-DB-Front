import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientRoutes } from './domain/http-client-routes.service';
import { HttpClientModule } from '@angular/common/http';

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
import { MatableComponent } from './matable/matable.component';
import { ExpertComponent } from './expert/expert.component';
<<<<<<< HEAD
=======
import { AnStoryComponent } from './an-story/an-story.component';
>>>>>>> 2157bae12f2f74b45b1e9adf4a4386c2713f37c7


@NgModule({
  declarations: [
    AppComponent,
    AccountCreationComponent,
    AnStoryComponent,
    HomepageComponent,
    CalendarComponent,
    EventComponent,
    ExpertComponent,
    EquipmentComponent,
    VehicleComponent,
    StoryComponent,
    AnchorComponent,
    ManagerComponent,
    MatableComponent,
<<<<<<< HEAD
    ExpertComponent
=======
    AnStoryComponent
>>>>>>> 2157bae12f2f74b45b1e9adf4a4386c2713f37c7
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
   HttpClientRoutes
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
