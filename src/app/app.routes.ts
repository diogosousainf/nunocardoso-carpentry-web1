import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DoorsComponent} from './pages/doors/doors.component';
import {KitchensComponent} from './pages/kitchens/kitchens.component';
import {WardrobesComponent} from './pages/wardrobes/wardrobes.component';
import {GeneralCarpentryComponent} from './pages/general-carpentry/general-carpentry.component';
import {ContactComponent} from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'doors', component: DoorsComponent },
  { path: 'kitchens', component: KitchensComponent },
  { path: 'wardrobes', component: WardrobesComponent },
  { path: 'general-carpentry', component: GeneralCarpentryComponent },
  { path: 'contact', component: ContactComponent },
];
