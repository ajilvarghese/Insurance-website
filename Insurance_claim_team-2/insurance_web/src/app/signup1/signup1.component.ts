import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.css']
})
export class Signup1Component {

  
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
