import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatTableModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { CanActivateRouteGuard } from './can-activate-route.guard';


import { AuthService } from './domain/auth.service';
import { AuthInterceptor } from './domain/auth-interceptor';
import { HttpClientRoutes } from './domain/http-client-routes.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { LoginComponent } from './login/login.component';
import { ExpertComponent } from './expert/expert.component';
import { AnStoryComponent } from './an-story/an-story.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EquipCalendarComponent } from './equip-calendar/equip-calendar.component';
import { VehicleCalendarComponent } from './vehicle-calendar/vehicle-calendar.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule
  ],
  declarations: [
    VehicleComponent,
    LandingpageComponent,
    NavbarComponent,
    ProfileComponent
  ]
})
export class MaterialModule { }


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
    LoginComponent,
    LandingpageComponent,
    NavbarComponent,
    EquipCalendarComponent,
    VehicleCalendarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule
  ],
  providers: [
    HttpClientRoutes,
    AuthService,
    CanActivateRouteGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})

export class AppModule { }
