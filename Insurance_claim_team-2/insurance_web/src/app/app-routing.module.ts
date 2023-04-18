import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainComponent } from './main/main.component';
import { AlertBoxComponent } from './alert-box/alert-box.component';


const routes: Routes = [
  
    {path:'signup',component:SignUpComponent},
    {path:'',component:HomeComponent},
    {path:'signin',component:SignInComponent},
    {path:'mainnav',component:MainNavComponent},
    {path:'mainpage',component:MainPageComponent},
    {path:'main',component:MainComponent},
    {path:'alert',component:AlertBoxComponent}
    
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
