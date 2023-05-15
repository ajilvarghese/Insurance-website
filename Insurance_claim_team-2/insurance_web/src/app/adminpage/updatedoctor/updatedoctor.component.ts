import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertBoxComponent } from '../../alert-box/alert-box.component';
import { Doctor } from '../../Class/doctor';
import { DoctorserviceService } from '../../Service/doctorservice.service';

@Component({
  selector: 'app-updatedoctor',
  templateUrl: './updatedoctor.component.html',
  styleUrls: ['./updatedoctor.component.css']
})
export class UpdatedoctorComponent implements OnInit {

  doctorId!:number;
  doctor: Doctor = new Doctor();
  specialties = ['ENT','Orthopedics','Neurology','Cardiologist'];
  message!: string;
  
  onSubmit(){

    this.statecityservice.updatedoctor(this.doctorId,this.doctor).subscribe(data =>{

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
    },error => {
      
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
  
  constructor(private statecityservice:DoctorserviceService,private route:ActivatedRoute,private router:Router,public dialog: MatDialog){
  }
  ngOnInit(): void {
    
    this.doctorId=this.route.snapshot.params['doctorId'];
    console.log(this.doctorId);
    this.statecityservice.getdoctorById(this.doctorId).subscribe(data =>{
      this.doctor=data;
      
    },error =>console.log(error));
      
  }
  
}