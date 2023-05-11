import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {  Router } from '@angular/router';
import { AlertBoxComponent } from '../../alert-box/alert-box.component';
import { Doctor } from '../../Class/doctor';
import { DoctorserviceService } from '../../Service/doctorservice.service';
import { StateCityServiceService } from '../../Service/state-city-service.service';

@Component({
  selector: 'app-createdoctor',
  templateUrl: './createdoctor.component.html',
  styleUrls: ['./createdoctor.component.css']
})

export class CreatedoctorComponent implements OnInit {

  doctor: Doctor = new Doctor();
  specialties = ['ENT','Orthopedics','Neurology','Cardiology','Dermatology','Pediatrics','Psychaitry','Urology'];
  message!: string;
  loginForm!:FormGroup;
  constructor(private statecityservice:DoctorserviceService,private router:Router,public dialog: MatDialog,private fb:FormBuilder){}
  ngOnInit(){
    this.createForm();

  }
  createForm(){
    this.loginForm = this.fb.group({
      docname:['',Validators.required],
      phoneno:['',[Validators.required,Validators.pattern(/^[1-9]\d{9}$/)]],
      special:['',Validators.required],
      desc:['',Validators.required]
      
    });
  }
  saveDoctor(){

    this.statecityservice.createdoctor(this.doctor).subscribe(data=>{

      console.log(data);
      this.gotoDoctor();
      this.message = "Created Doctor SuccessFully ";
        // alert(this.message)
        const dialogRef = this.dialog.open(AlertBoxComponent, {
          width: '250px',
          data:
          {
            message:this.message

          }
         
        });
      
        dialogRef.afterClosed().subscribe(() => 
        {
         
          
        });
    },
    error => {
      
      this.message=(error.error.message); // log the error message to the console
      // handle the error in the UI as per your requirement
      
      const dialogRef = this.dialog.open(AlertBoxComponent, {

        width: '300px',
        data:{

          message:this.message

        }
       
      });
    
      dialogRef.afterClosed().subscribe(() => {
       
        
      });
      
    }
  );
  }
  gotoDoctor(){

    this.router.navigate(['/adminpage']);

  }
  onSubmit(){

    console.log(this.doctor);
    this.saveDoctor();

  }
  
}
