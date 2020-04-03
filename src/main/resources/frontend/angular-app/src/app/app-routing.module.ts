import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { LoginComponent} from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ForgetPassComponent} from "./forget-pass/forget-pass.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: LoginComponent},
  {path: 'sign-up' , component: SignUpComponent},
  {path: 'forget-pass', component: ForgetPassComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
