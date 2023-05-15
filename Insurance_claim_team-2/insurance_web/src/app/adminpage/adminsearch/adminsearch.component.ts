import { Component, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertBoxComponent } from '../../alert-box/alert-box.component';
import { SearchserviceService } from '../../Service/searchservice.service';
interface Search1{
  searchId :number;
  providerId : number;
  hospitalClinic : String;
  city :String;
  state:String;
  contactNumber:number;
  doctorId :number;
  doctorName : String;
  doctorSpeciality: String;
  doctorDescription: String;

}

@Component({

  selector: 'app-adminsearch',
  templateUrl: './adminsearch.component.html',
  styleUrls: ['./adminsearch.component.css']

})
export class AdminsearchComponent {

  search:Search1[]=[];
  filtersearch:Search1[]=[];
  selectedProvider= new FormControl('');
  selectedState= new FormControl('');
  message!: string;
  isFixed = false;
  constructor(private statecity:SearchserviceService,private router :Router,public dialog: MatDialog){}

  ngOnInit(): void {

    this.statecity.getsearch().subscribe((data: any[]) => {

      this.search = data;

    });
    this.getProvider1();
    this.filtersearch=this.search

   }
   
   onStateChange() {
    
    const city = this.selectedProvider.value || '';
    const specialty = this.selectedState.value || '';
    if ((city && city.split('')) || (specialty && specialty.split(''))) {

      this.filtersearch = this.search.filter(doctor1 => {
        const doctorIdString = doctor1.doctorId.toString();
        const providerIdString = doctor1.providerId.toString();
        const doctorNameLower = doctor1.doctorName?.toLowerCase();
        const hospitalClinicLower = doctor1.hospitalClinic?.toLowerCase();
        return (
          (doctorIdString.includes(city) || (doctorNameLower && doctorNameLower.includes(city))) &&
          (providerIdString.includes(specialty) || (hospitalClinicLower && hospitalClinicLower.includes(specialty)))
        );
      
      });
    }
    

}
updatesearch(searchId:number){
  this.router.navigate(['/adminpage/updatesearch',searchId])
  console.log(searchId);

}
private getProvider1(){
  this.statecity.getSearchboth().subscribe(data =>{
    this.search =data;
  })
}
deletesearch(searchId:number){
  this.statecity.deletesearch(searchId).subscribe(data =>{
    this.getProvider1();
    this.message = "Deleted SuccessFully  ";
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

@HostListener('window:scroll', [])
onWindowScroll() {
  if (window.pageYOffset > 50) {
    this.isFixed = true;
  } else if (this.isFixed && window.pageYOffset < 50) {
    this.isFixed = false;
  }
}

}
