import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainComponent } from './main/main.component';
import { AlertBoxComponent } from './alert-box/alert-box.component';
import { MainformComponent } from './mainform/mainform.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdmindoctorComponent } from './adminpage/admindoctor/admindoctor.component';
import { AdminproviderComponent } from './adminpage/adminprovider/adminprovider.component';
import { CreatedoctorComponent } from './adminpage/createdoctor/createdoctor.component';
import { UpdatedoctorComponent } from './adminpage/updatedoctor/updatedoctor.component';
import { CreateproviderComponent } from './adminpage/createprovider/createprovider.component';
import { UpdateproviderComponent } from './adminpage/updateprovider/updateprovider.component';
import { AdminsearchComponent } from './adminpage/adminsearch/adminsearch.component';
import { CreatesearchComponent } from './adminpage/createsearch/createsearch.component';
import { UpdatesearchComponent } from './adminpage/updatesearch/updatesearch.component';
import { DepartmentComponent } from './department/department.component';
import { AuthServiceGuard } from './auth-service.guard';


const routes: Routes = [
  
    
    {path:'',component:HomeComponent },
    {path:'signin',component:SignInComponent},
    {path:'signup',component:SignUpComponent},
    {path:'mainnav',component:MainNavComponent},
    {path:'mainpage',component:MainPageComponent},
    {path:'main',component:MainComponent},
    {path:'alert',component:AlertBoxComponent},
    {path:'mainform',component:MainformComponent ,canActivate:[AuthServiceGuard]},
    {path:'department',component:DepartmentComponent},
    {path:'adminpage',
    component:AdminpageComponent,canActivate:[AuthServiceGuard],
    children:[
      {path:'adminsearch',component:AdminsearchComponent},
      {path:'admindoctor',component:AdmindoctorComponent},
      {path:'createdoctor',component:CreatedoctorComponent},
      {path:'createprovider',component:CreateproviderComponent},
      {path:'createsearch',component:CreatesearchComponent},
      {path:'updatesearch/:search_id',component:UpdatesearchComponent},
      {path:'updatedoctor/:doctor_id',component:UpdatedoctorComponent},
      {path:'updateprovider/:provider_id',component:UpdateproviderComponent},
      {path:'adminprovider',component:AdminproviderComponent}
    ]
  }
    
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
