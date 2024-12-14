import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DoorsComponent} from './pages/doors/doors.component';
import {KitchensComponent} from './pages/kitchens/kitchens.component';
import {WardrobesComponent} from './pages/wardrobes/wardrobes.component';
import {GeneralCarpentryComponent} from './pages/general-carpentry/general-carpentry.component';
import {PrivacyPolicyComponent} from './components/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'doors', component: DoorsComponent },
  { path: 'kitchens', component: KitchensComponent },
  { path: 'wardrobes', component: WardrobesComponent },
  { path: 'general-carpentry', component: GeneralCarpentryComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];
