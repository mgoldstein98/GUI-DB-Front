import { Routes } from '@angular/router';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatableComponent } from './matable/matable.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AnStoryComponent } from './an-story/an-story.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ExpertComponent } from './expert/expert.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ProfileComponent } from './profile/profile.component';
import { CalendarComponent } from './calendar/calendar.component';

export const APP_ROUTES: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'register', component: AccountCreationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile/:userID', component: ProfileComponent},
  { path: 'home/:userID', component: HomepageComponent },
  { path: 'manageAnchors/:userID', component: MatableComponent },
  { path: 'manageStories/:userID', component: AnStoryComponent },
  { path: 'manageVehicles/:storyID', component: VehicleComponent },
  { path: 'manageEquipment/:storyID', component: EquipmentComponent },
  { path: 'manageExperts/:storyID', component: ExpertComponent },
  { path: 'calendar/:userID', component: CalendarComponent}
];
