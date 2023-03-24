import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Signup1Component } from './signup1/signup1.component';

const routes: Routes = [
  
    {path:'signup',component:SignUpComponent},
    {path:'',component:Signup1Component},
    {path:'mainnav',component:MainNavComponent},
    
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
