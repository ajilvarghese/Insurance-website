import { Component, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertBoxComponent } from '../../alert-box/alert-box.component';
import { Doctor } from '../../Class/doctor';
import { DoctorserviceService } from '../../Service/doctorservice.service';

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
  isFixed = false;

  

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
     this.filterDoctor = this.doctors.filter(doctor1 =>((doctor1.doctorName.toLowerCase().includes(city))||doctor1.doctorId.toString().toLowerCase().includes(city)) &&
     (doctor1.doctorSpeciality.toLowerCase().includes(specialty))
   );

    }

                  }
updatedoctor(doctorId:number){

  this.router.navigate(['/adminpage/updatedoctor',doctorId])

}
private getDoctor1(){

    this.statecity.getdoctor().subscribe(data =>{
    this.doctors =data;
  })

}
deletedoctor(doctorId:number){

  this.statecity.deletedoctor(doctorId).subscribe(data =>{
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
  )
  
}

@HostListener('window:scroll', [])
onWindowScroll() {
  if (window.pageYOffset > 50) {
    this.isFixed = true;
  } else if (this.isFixed && window.pageYOffset < 50) {
    this.isFixed = false;
  }
}

}
