import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertBoxComponent } from '../alert-box/alert-box.component';
import { Doctor } from '../doctor';
import { StateCityServiceService } from '../state-city-service.service';

@Component({
  selector: 'app-updatedoctor',
  templateUrl: './updatedoctor.component.html',
  styleUrls: ['./updatedoctor.component.css']
})
export class UpdatedoctorComponent implements OnInit {
  doctor_id!:number;
  doctor: Doctor = new Doctor();
  specialties = ['ENT','Orthopedics','Neurology','Cardiologist'];
  message!: string;
  onSubmit(){
    this.statecityservice.updatedoctor(this.doctor_id,this.doctor).subscribe(data =>{
       this.gotoDoctor();
       this.message = "Updated Doctor SuccessFully  ";
        // alert(this.message)
        const dialogRef = this.dialog.open(AlertBoxComponent, {
          width: '250px',
          data:{
            message:this.message
          }
         
        });
      
        dialogRef.afterClosed().subscribe(() => {
         
          
        });
    },error =>console.log(error));
      this.message = "Updating Doctor Failed !!!  ";
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
  
  constructor(private statecityservice:StateCityServiceService,private route:ActivatedRoute,private router:Router,public dialog: MatDialog){
  }
  ngOnInit(): void {
    this.doctor_id=this.route.snapshot.params['doctor_id'];
    this.statecityservice.getdoctorById(this.doctor_id).subscribe(data =>{
      this.doctor=data;
      
    },error =>console.log(error));
      
  }
  

}
