import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertBoxComponent } from '../alert-box/alert-box.component';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent {
  myRating: number = 3;
  message:any
  submit=false;
  hide=true;
  constructor(private fb: FormBuilder,private userService:UserServiceService,private router: Router,public dialog: MatDialog){ }
    loginForm = this.fb.group({
      phone_no: ['', [Validators.required,Validators.pattern('[0-9]{10}')]],
      password:['',[Validators.required]],
    })

    get AllControls()
    {
      return this.loginForm.controls
    }
    

 

  openDialog():void {
    
   
  }
    onSubmit(values:any)
    {
      const formValues={
        phone_no:this.loginForm.get('phone_no')?.value,
        password: this.loginForm.get('password')?.value,
        
     }
      const output = JSON.stringify(formValues);
      console.log(output);

      this.userService.signin(output)
      .subscribe(
       response => {
        console.log('Registration successful', response);
        console.log(response.body.first_name);
        if (response && response.body.role === 'admin') {
          this.message = "Hello admin !! Signed In Successfully";
        // alert(this.message)
        const dialogRef = this.dialog.open(AlertBoxComponent, {
          width: '250px',
          data:{
            message:this.message
          }
         
        });
      
        dialogRef.afterClosed().subscribe(() => {
         
          
        });
          // alert("Hello admin");
          setTimeout(() => {
            this.router.navigate(['/adminpage']);
          }, 2500);
        } else {
          // alert('Hello '+ response.body.first_name);
          this.message = 'Hello '+ response.body.first_name+ "!!"+" "+ "Signed In Successfully";
        // alert(this.message)
        const dialogRef = this.dialog.open(AlertBoxComponent, {
          width: '250px',
          data:{
            message:this.message
          }
         
        });
      
        dialogRef.afterClosed().subscribe(() => {
         
          
        });
          setTimeout(() => {
            this.router.navigate(['/mainform']);
          }, 2500);
        }
        
        
    },
    (error) => {
      
      if (error.status === 400) {
        this.message = 'Invalid phone_number or password.';
      } else if (error.status === 500) {
        this.message = 'Internal Server Error! Try again';
      } if (error.status === 401) {
        this.message = 'Incorrect  Password!';
      }
      else {
        this.message = 'Login Failed!! Invalid phone_number and password';
      }
      // alert(this.message);
      const dialogRef = this.dialog.open(AlertBoxComponent, {
        width: '350px',
        data:{
          message:this.message
        }
       
      });
    
      dialogRef.afterClosed().subscribe(() => {
       
        
      });
    },   
    
  );
   
  
     
    }
  

}
