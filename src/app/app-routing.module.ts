import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ShowupComponent } from './showup/showup.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'showup', component: ShowupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
