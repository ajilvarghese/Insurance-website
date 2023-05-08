import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import { RatingComponent } from './rating/rating.component';
import { HttpClientModule } from '@angular/common/http';
import { StateCityServiceService } from './Service/state-city-service.service';
import { DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainComponent } from './main/main.component';
import {MatDialogModule} from '@angular/material/dialog';
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
import { FooterComponent } from './footer/footer.component';
import { Footer1Component } from './footer1/footer1.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { DepartmentComponent } from './department/department.component';







@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SignInComponent,
    SignUpComponent,
    RatingComponent,
    HomeComponent,
    MainPageComponent,
    MainComponent,
    AlertBoxComponent,
    MainformComponent,
    AdminpageComponent,
    AdmindoctorComponent,
    AdminproviderComponent,
    CreatedoctorComponent,
    UpdatedoctorComponent,
    CreateproviderComponent,
    UpdateproviderComponent,
    AdminsearchComponent,
    CreatesearchComponent,
    UpdatesearchComponent,
    FooterComponent,
    Footer1Component,
    DepartmentComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatStepperModule,
    MatToolbarModule,
    MatChipsModule,
    MatGridListModule,
    HttpClientModule,
    MatCheckboxModule,
    MatDialogModule,
    MatAutocompleteModule,
    FlexLayoutModule,
    
    
    
    
  ],
  providers: [StateCityServiceService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
