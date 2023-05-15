// import { Component } from '@angular/core';
import {Component, OnInit,HostListener} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { UserServiceService } from '../Service/user-service.service';
import { Search1 } from '../Class/search1';
import { SearchserviceService } from '../Service/searchservice.service';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
interface City {
  state_id:number;
  city_id: number;
  city_name: string;
}
 interface Department{
  department_id:number;
  city_id: number;
  department_name: string;

 }



@Component({
  selector: 'app-mainform',
  templateUrl: './mainform.component.html',
  styleUrls: ['./mainform.component.css']
})
export class MainformComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isFixed = false;
  isEditable = true;
  // doctors: Doctor[]=[];
  // filteredDoctors:Doctor[]=[];
  state!: any[];
  city1!:any[];
  selectedState!: any;
  selectedcity= new FormControl('');
  selectedSpeciality= new FormControl('');
  selectedDoctor= new FormControl('');
  cities!: City[];
  filteredStates!: any;
  filteredCity = this.city1;
  department!: Department[];
  latitude!: number;
  longitude!: number;
  search: Search1[]=[];
  filterSearch:Search1[]=[];
  firstName!:String;
  private _authService: AuthServiceService;
  constructor(private formBuilder: FormBuilder,private stateCityService:SearchserviceService,private userService:UserServiceService,private authService: AuthServiceService, private router: Router ) {
    this._authService = authService;
  }
  
  public get authservice(): AuthServiceService {
    return this._authService;
  }
  
   
  
  ngOnInit(): void {
    this.stateCityService.getSearchboth().subscribe((data: any[]) => {
      this.search = data;
    });
this.filterSearch=this.search
   }
   onStateChange() {
    
  
    const city = this.selectedcity.value?.toLowerCase() || '';
    const specialty = this.selectedSpeciality.value?.toLowerCase() || '';
    if((city && city.split('').length >=3) || (specialty && specialty.split('').length >=2) ){
     this.filterSearch = this.search.filter(doctor =>(doctor.state.toLowerCase().includes(city) || doctor.city.toLowerCase().includes(city)) &&
     (doctor.doctorSpeciality.toLowerCase().includes(specialty)||doctor.doctorName.toLowerCase().includes(specialty))
   );
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/signin']);
  }

  //.............nav for search..................
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 50) {
      this.isFixed = true;
    } else if (this.isFixed && window.pageYOffset < 50) {
      this.isFixed = false;
    }
  }
  
 
}

