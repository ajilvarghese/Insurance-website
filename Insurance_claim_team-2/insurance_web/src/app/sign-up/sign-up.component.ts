import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { StateCityServiceService } from '../state-city-service.service';




/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
interface gender1 {
  value: string;
  viewValue: string;
}

interface City {
  state_id:number;
  city_id: number;
  city_name: string;
}



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent{
  form!: FormGroup;
  state!: any[];
  selectedState!: number;
  cities!: City[];
  
  maxDate: Date;
  minDate: Date;

constructor(private fb: FormBuilder,private formbulder:FormBuilder,private http:HttpClient,private stateCityService:StateCityServiceService) {
  this.form = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required]
  }, {
    validator: this.passwordMatchValidator
  });
  this.maxDate=new Date();
  const currentDate = new Date();
  this.minDate = new Date(currentDate.getFullYear() - 100, currentDate.getMonth(), currentDate.getDate());
}

ngOnInit(): void {
  this.stateCityService.getStates().subscribe((data: any[]) => {
    this.state = data;
  });
  

}

onStateChange() {
  
  this.stateCityService.getCities(this.selectedState).subscribe((data) => {
    this.cities = data;
  });
}

passwordMatchValidator(form: FormGroup) {
  if (form.get('password')?.value !== form.get('confirmPassword')?.value) {
    form.get('confirmPassword')?.setErrors({ mismatch: true });
  } else {
    form.get('confirmPassword')?.setErrors(null);
  }
}



  

  gender: gender1[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'other', viewValue: 'Other'},
  ];
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  
  hide = true;

  firstFormGroup = this.formbulder.group({
    firstCtrl: ['', Validators.required],
    firstCtrl3: ['', Validators.required],
    firstCtrl4: ['', Validators.required],
    firstCtrl5: ['', Validators.required],
    firstCtrl6: ['', Validators.required],
    city : ['', Validators.required],
    state :['', Validators.required],
    firstCtrl2: ['', [Validators.required,Validators.pattern('[0-9]{10}')]],
   
  });
  secondFormGroup = this.formbulder.group({
    secondCtrl: ['', Validators.required],
    secondCtrl2: ['', [Validators.required,Validators.pattern('[0-9]{12}')]],
  });
  thirdFormGroup = this.formbulder.group({
    thirdCtrl: ['', Validators.required],
    
  });
  
  isEditable = false;
  cause: string[] = ['Diabetic', 'Hypertensive'];

  

}

