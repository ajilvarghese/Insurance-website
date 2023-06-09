import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatSelectionListChange } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DropdownService } from '../dropdown.service';
import { StateCityServiceService } from '../Service/state-city-service.service';
import { UserServiceService } from '../Service/user-service.service';





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
  isEditable = true;
  illnesses!: any[];
  showAlert!: boolean;
  form!: FormGroup;
  state!: any[];
  selectedState!: number;
  cities!: any[];
  maxDate: Date;
  minDate: Date;
  firstName!: string;
  lastName!:string;
  emailId!:any;
  phoneNo!:string;
  gender!:string;
  dob!:string;
  postalCode!:string;
  address!:string;
  govId!:string;
  isTobaccoUser!:string;
  password!:string;
  errorAlert!:boolean;
  states!: any[];

constructor(private fb: FormBuilder,private formbulder:FormBuilder,private http:HttpClient,private stateCityService:StateCityServiceService,private userService:UserServiceService,private datePipe: DatePipe,private router: Router,private Statecitydropdown: DropdownService) {
  this.form1 = this.fb.group({
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
  this.stateCityService.getilllness().subscribe((data:any[]) =>{
    this.illnesses=data;
  });
  this.Statecitydropdown.getAllStates().subscribe(
   states=>{
    this.states=states;
   }
  );
  

  
  
  

}


submitForm() {
  this.secondFormGroup.get('selected')?.valueChanges.subscribe((selected: any) => {
    console.log('Selected illnesses:', selected);
    // Call your service method here to save the selected illnesses to the database
  });
  
  const {confirmPassword, ...FormData}= this.form1.value;
  const form1Data = FormData;
  const valueform1={
    firstName:this.firstFormGroup.get('firstName')?.value,
    lastName: this.firstFormGroup.get('lastName')?.value,
    phoneNo: this.firstFormGroup.get('phoneNo')?.value,
    emailId: this.firstFormGroup.get('emailId')?.value,
    gender: this.firstFormGroup.get('gender')?.value,
    dob: this.datePipe.transform(this.firstFormGroup.get('dob')?.value ?? new Date(), 'yyyy-MM-dd'),
    cityId :this.firstFormGroup.get('cityId')?.value,
    stateId :this.firstFormGroup.get('stateId')?.value,
    postalCode :this.firstFormGroup.get('postalCode')?.value,
    
 } 
 const valueform2={
    address:this.secondFormGroup.get('address')?.value,
    govId: this.secondFormGroup.get('govId')?.value,
    isTobaccoUser: this.secondFormGroup.get('isTobaccoUser')?.value
    
 }
 const medicalHistory =  this.secondFormGroup.get('selected')?.value.join(',');
 
  const formValues ={
    ...valueform1,
    medicalHistory,...valueform2,
    // ...this.secondFormGroup.value,
    ...form1Data
  }
  const output = JSON.stringify(formValues);
  console.log(output);
  
  this.userService.signup(output)
  .subscribe(
    response => {
      console.log('Registration successful', response);
      alert("Signup successful");
      setTimeout(() => {
        this.router.navigate(['/signin']);
      }, 2000);
    },
    error => {
      console.error('Registration failed', error);
      alert('Signup failed');
        
    },   
    
  );
}




// onStateChange() {
  
//   this.stateCityService.getCities(this.selectedState).subscribe((data) => {
//     this.cities = data;
//   });
// }

onStateChange() {
  
  this.Statecitydropdown.getCities(this.selectedState).subscribe((data) => {
    

    this.cities = data;
    
  });
}

passwordMatchValidator(form1: FormGroup) {
  if (form1.get('password')?.value !== form1.get('confirmPassword')?.value) {
    form1.get('confirmPassword')?.setErrors({ mismatch: true });
  } else {
    form1.get('confirmPassword')?.setErrors(null);
  }
}

  

  gender2: gender1[] = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
    {value: 'Other', viewValue: 'Other'},
  ];
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  
  hide = true;

  onChange(email: string, isChecked: boolean) {
    const emailFormArray = <FormArray>this.secondFormGroup.controls.selected;

    if (isChecked) {
      emailFormArray.push(new FormControl(email));
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value == email)
      emailFormArray.removeAt(index);
    }
  }

  firstFormGroup = this.formbulder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNo: ['', [Validators.required,Validators.pattern('[0-9]{10}')]],
    emailId: ['', [Validators.required,Validators.email,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]],
    gender: ['', Validators.required],
    dob: ['', [Validators.required,]],
    cityId : ['', Validators.required],
    stateId :['', Validators.required],
    postalCode :['', Validators.required],
    
   
   
  });
  secondFormGroup = this.formbulder.group({
    address: ['', Validators.required],
    govId: ['', [Validators.required,Validators.pattern('[0-9]{12}')]],
    selected:this.fb.array([]),
    isTobaccoUser:['', Validators.required],
    
  });
  form1 = this.formbulder.group({
    password:['', Validators.required],
    confirmPassword:['', Validators.required]
    

  });
  
}

