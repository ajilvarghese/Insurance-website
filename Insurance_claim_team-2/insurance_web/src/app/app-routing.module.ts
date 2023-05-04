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
import { AdmindoctorComponent } from './admindoctor/admindoctor.component';
import { AdminproviderComponent } from './adminprovider/adminprovider.component';
import { CreatedoctorComponent } from './createdoctor/createdoctor.component';
import { UpdatedoctorComponent } from './updatedoctor/updatedoctor.component';
import { CreateproviderComponent } from './createprovider/createprovider.component';
import { UpdateproviderComponent } from './updateprovider/updateprovider.component';
import { AdminsearchComponent } from './adminsearch/adminsearch.component';
import { CreatesearchComponent } from './createsearch/createsearch.component';
import { UpdatesearchComponent } from './updatesearch/updatesearch.component';
import { DepartmentComponent } from './department/department.component';


const routes: Routes = [
  
    {path:'signup',component:SignUpComponent},
    {path:'',component:HomeComponent},
    {path:'signin',component:SignInComponent},
    {path:'mainnav',component:MainNavComponent},
    {path:'mainpage',component:MainPageComponent},
    {path:'main',component:MainComponent},
    {path:'alert',component:AlertBoxComponent},
    {path:'mainform',component:MainformComponent},
    {path:'department',component:DepartmentComponent},
    {path:'adminpage',
    component:AdminpageComponent,
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
