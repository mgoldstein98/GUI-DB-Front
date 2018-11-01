import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { HomepageComponent } from './homepage/homepage.component';

import { CalendarComponent } from './calendar/calendar.component';
import { EventComponent } from './event/event.component';
import { RentalComponent } from './rental/rental.component';




@NgModule({
  declarations: [
    AppComponent,
    AccountCreationComponent,
    HomepageComponent,
    CalendarComponent,
    EventComponent,
    RentalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
