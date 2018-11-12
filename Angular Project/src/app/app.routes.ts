import { Routes } from '@angular/router';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatableComponent } from './matable/matable.component';

// import { LoginComponent } from './login/login.component';
// import { VehicleComponent } from './vehicle/vehicle.component';
// import { ExpertComponent } from './expert/expert.component';
// import { EquipmentComponent } from './equipment/equipment.component';
// import { MatableComponent } from './matable/matable.component.ts';
// import { AnstoryComponent } from './anstory/anstory.component.ts';



export const APP_ROUTES: Routes = [
 // { path: '/', component: Login},
  { path: '/register', component: AccountCreationComponent },
  { path: '/login', component: LoginComponent },
  { path: '/home', component: HomepageComponent },
  { path: '/manageAnchors', component: MatableComponent }
 // { path: '/manageStories, component: AnstoryComponent }
 // { path: '/manageVehicles', component: VehicleComponent },
 // { path: '/manageEquipment', component: EquipmentComponent },
 // { path: '/manageExperts', component: ExpertComponent },
];
