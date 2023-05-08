import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertBoxComponent } from '../../alert-box/alert-box.component';
import { Doctor } from '../../Class/doctor';
import { DoctorserviceService } from '../../Service/doctorservice.service';
import { StateCityServiceService } from '../../Service/state-city-service.service';

@Component({
  selector: 'app-admindoctor',
  templateUrl: './admindoctor.component.html',
  styleUrls: ['./admindoctor.component.css']
})
export class AdmindoctorComponent {
  
  doctors: Doctor[]=[];
  filterDoctor:Doctor[]=[];
  selectedDoctor= new FormControl('');
  selectedSpeciality= new FormControl('');
  message!: string;

  constructor(private statecity:DoctorserviceService,private router :Router,public dialog: MatDialog){}
  ngOnInit(): void {
    this.statecity.getdoctor().subscribe((data: any[]) => {

      this.doctors = data;

    });
    this.getDoctor1();
    this.filterDoctor=this.doctors

   }

   onStateChange() {
    
    const city = this.selectedDoctor.value?.toLowerCase() || '';
    const specialty = this.selectedSpeciality.value?.toLowerCase() || '';
    if((city && city.split('').length >=1) || (specialty && specialty.split('').length >=2) ){
     this.filterDoctor = this.doctors.filter(doctor1 =>((doctor1.doctor_name.toLowerCase().includes(city))||doctor1.doctor_id.toString().toLowerCase().includes(city)) &&
     (doctor1.doctor_speciality.toLowerCase().includes(specialty))
   );

    }

                  }
updatedoctor(doctor_id:number){

  this.router.navigate(['/adminpage/updatedoctor',doctor_id])

}
private getDoctor1(){

    this.statecity.getdoctor().subscribe(data =>{
    this.doctors =data;
  })

}
deletedoctor(doctor_id:number){

  this.statecity.deletedoctor(doctor_id).subscribe(data =>{

    this.getDoctor1();
    this.message = "Deleted Doctor SuccessFully  ";
        // alert(this.message)
    const dialogRef = this.dialog.open(AlertBoxComponent, {

      width: '250px',
      data:{

          message:this.message

          }
         
        });
      
    dialogRef.afterClosed().subscribe(() => {
         
          
        });

  })
  
}

}
