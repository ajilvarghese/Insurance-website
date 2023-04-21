// import { Component } from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { StateCityServiceService } from '../state-city-service.service';
interface City {
  state_id:number;
  city_id: number;
  city_name: string;
}

@Component({
  selector: 'app-mainform',
  templateUrl: './mainform.component.html',
  styleUrls: ['./mainform.component.css']
})
export class MainformComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isEditable = true;
  state!: any[];
  city1!:any[];
  selectedState!: any;
  cities!: City[];
  filteredStates!: any;
  filteredCity = this.city1;

  constructor(private formBuilder: FormBuilder,private stateCityService:StateCityServiceService) {}
 
  
   
  
  ngOnInit(): void {
    this.stateCityService.getStates().subscribe((data: any[]) => {
      this.state = data;
    });
    this.stateCityService.getcity().subscribe((data: any[]) => {
      this.city1 = data;
    });
    this.firstFormGroup = this.formBuilder.group({
       city_id : ['',],
        state_id :[''],
  });
  this.secondFormGroup = this.formBuilder.group({
     gender : [''],
    // state_id :['', Validators.required],
});
   }
   onStateChange() {
  
    this.stateCityService.getCities(this.selectedState).subscribe((data) => {
      this.cities = data;
    });
   
  }
  onSearchInputChange(){
    this.filteredCity = this.city1.filter(state =>
      state.city_name.toLowerCase().includes(this.selectedState.toLowerCase())
    );
  }
  // onSearch(searchValue: string) {
  //   // Filter doctors based on search input
  //   this.filteredCity = this.city1.filter(doctor =>
  //     doctor.city_name.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  // }
}
