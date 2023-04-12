import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent {
  myRating: number = 3;
  errorMessage: any;
  submit=false;
  hide=true;
  constructor(private fb: FormBuilder,private userService:UserServiceService,private router: Router){ }
    loginForm = this.fb.group({
      gov_id: ['', [Validators.required,Validators.pattern('[0-9]{12}')]],
      password:['',[Validators.required]],
    })

    get AllControls()
    {
      return this.loginForm.controls
    }
    onSubmit(values:any)
    {
      const formValues={
        gov_id:this.loginForm.get('gov_id')?.value,
        password: this.loginForm.get('password')?.value,
        
     }
      const output = JSON.stringify(formValues);
      console.log(output);

      this.userService.signin(output)
      .subscribe(
       response => {
        console.log('Registration successful', response);
        alert("Signed In Successfully");
        setTimeout(() => {
          this.router.navigate(['/mainpage']);
        }, 500);
    },
    (error) => {
      // console.error('Registration failed', error);
      // this.errorMessage = error;
      this.errorMessage= error
      alert("Check the Aadhaar Number and password !!");
        
    },   
    
  );
     
    }
  

}
