import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';
const ROUTES: Routes = [
  {
    path: 'home',
    component: MenuComponent,
  },
  {
    path: 'signUp',
    component: SignUpComponent,
  },
  {
    path: 'userProfile',
    component: UserProfileComponent,
  },
];
export { ROUTES };
