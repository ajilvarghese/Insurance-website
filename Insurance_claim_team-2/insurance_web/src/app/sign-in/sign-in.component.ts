import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
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
