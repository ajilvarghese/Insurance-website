import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {  Router } from '@angular/router';
import { AlertBoxComponent } from '../alert-box/alert-box.component';
import { Doctor } from '../doctor';
import { DoctorserviceService } from '../doctorservice.service';
import { StateCityServiceService } from '../state-city-service.service';

@Component({
  selector: 'app-createdoctor',
  templateUrl: './createdoctor.component.html',
  styleUrls: ['./createdoctor.component.css']
})

export class CreatedoctorComponent implements OnInit {
  doctor: Doctor = new Doctor();
  specialties = ['ENT','Orthopedics','Neurology','Cardiology','Dermatology','Pediatrics','Psychaitry','Urology'];
  message!: string;
  constructor(private statecityservice:DoctorserviceService,private router:Router,public dialog: MatDialog){}
  ngOnInit():void{

  }
  saveDoctor(){
    this.statecityservice.createdoctor(this.doctor).subscribe(data=>{
      console.log(data);
      this.gotoDoctor();
      this.message = "Created Doctor SuccessFully ";
        // alert(this.message)
        const dialogRef = this.dialog.open(AlertBoxComponent, {
          width: '250px',
          data:{
            message:this.message
          }
         
        });
      
        dialogRef.afterClosed().subscribe(() => {
         
          
        });
    },
    error=>console.log(error));
    this.message = "Creating Doctor Failed !!";
        // alert(this.message)
        const dialogRef = this.dialog.open(AlertBoxComponent, {
          width: '250px',
          data:{
            message:this.message
          }
         
        });
      
        dialogRef.afterClosed().subscribe(() => {
         
          
        });
  }
  gotoDoctor(){
    this.router.navigate(['/adminpage']);
  }
  onSubmit(){
    console.log(this.doctor);
    this.saveDoctor();
  }
}
