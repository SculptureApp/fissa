import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/auth.guard';

import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
	{ path: '',
	  component: AuthComponent,
	  children: [
	  	{ path: 'signin', component: SigninComponent },
	  	{ path: 'signup', component: SignupComponent },
	  	{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
	  	{ path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard] }
	  ]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
