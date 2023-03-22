import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

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
interface city1 {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  gender: gender1[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'other', viewValue: 'Other'},
  ];
  
  city: city1[] = [
    {value: 'Kochi', viewValue: 'Kochi'},
    {value: 'Kozhikode', viewValue: 'Kozhikode'},
    {value: 'Kollam', viewValue: 'Kollam'},
    {value: 'Thrissur', viewValue: 'Thrissur'},
    {value: 'Kannur', viewValue: 'Kannur'},
    {value: 'Alappuzha', viewValue: 'Alappuzha'},
    {value: 'Kottayam', viewValue: 'Kottayam'},
  ];
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  hide = true;

  firstFormGroup = this.formbulder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.formbulder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;
  cause: string[] = ['Diabetes', 'Diabetic', 'Hypertensive', 'hypertension', 'High Blood Pressure'];

  constructor(private formbulder:FormBuilder) {}

}

