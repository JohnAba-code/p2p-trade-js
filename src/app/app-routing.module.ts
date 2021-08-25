import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from '../app/login-user/login-user.component'

const routes: Routes = [
  { path: '', redirectTo: '/user-login', pathMatch: 'full'},
  { path: 'user-login', component: LoginUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
