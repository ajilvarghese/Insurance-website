import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent {
  myRating: number = 3;
  
  submit=false;
  hide=true;
  constructor(private fb: FormBuilder){ }
    loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
    })

    get AllControls()
    {
      return this.loginForm.controls
    }
    onSubmit(values:any)
    {
      this.submit=true
    }
  

}
