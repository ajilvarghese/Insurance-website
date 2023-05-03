import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { StateCityServiceService } from '../state-city-service.service';
import { FormControl } from '@angular/forms';
interface Search{
  search_id :number;
  provider_id : number;
  hospital_clinic : String;
  city :String;
  state:String;
  contact_number:number;
  doctor_id :number;
  doctor_name : String;
  doctor_speciality: String;
  doctor_description: String;  
}
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isEditable = true;
  // doctors: Doctor[]=[];
  // filteredDoctors:Doctor[]=[];
  state!: any[];
  city1!:any[];
  selectedState!: any;
  selectedcity= new FormControl('');
  selectedSpeciality= new FormControl('');
  selectedDoctor= new FormControl('');
  filteredStates!: any;
  filteredCity = this.city1;
  latitude!: number;
  longitude!: number;
  search: Search[]=[];
  filterSearch:Search[]=[];
  constructor(private formBuilder: FormBuilder,private stateCityService:StateCityServiceService) {}
 
  
   
  
  ngOnInit(): void {
    this.stateCityService.getStates().subscribe((data: any[]) => {
      this.state = data;
    });
    this.stateCityService.getcity().subscribe((data: any[]) => {
      this.city1 = data;
    });
    // this.stateCityService.getDoctor().subscribe((data: any[]) => {
    //   this.doctors = data;
    // });
    this.stateCityService.getSearch().subscribe((data: any[]) => {
      this.search = data;
    });
    this.firstFormGroup = this.formBuilder.group({
       city_id : ['',],
        state_id :[''],
  });
  this.secondFormGroup = this.formBuilder.group({
     gender : [''],
    // state_id :['', Validators.required],
});
this.filterSearch=this.search
   }
   onStateChange() {
    
  
    const city = this.selectedcity.value?.toLowerCase() || '';
    const specialty = this.selectedSpeciality.value?.toLowerCase() || '';
    if((city && city.split('').length >=3) || (specialty && specialty.split('').length >=2) ){
     this.filterSearch = this.search.filter(doctor =>(doctor.state.toLowerCase().includes(city) || doctor.city.toLowerCase().includes(city)) &&
     doctor.doctor_speciality.toLowerCase().includes(specialty)
   );
    }
  }
  onStateChange1() {
    this.filterSearch = this.search.filter(doctor =>doctor.doctor_name.toLowerCase().includes(this.selectedDoctor.value?.toLowerCase() || '') 
  );}

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.selectedcity.setValue(''); // Reset selected city
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.loadDoctors(); // Load doctors based on current location
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }
  loadDoctors() {
    // Example implementation using a hypothetical doctorService
    
    
  }
}
