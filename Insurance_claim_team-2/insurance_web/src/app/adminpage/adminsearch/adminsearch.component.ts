import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertBoxComponent } from '../../alert-box/alert-box.component';
import { Search } from '../../Class/search';
import { SearchserviceService } from '../../Service/searchservice.service';
import { StateCityServiceService } from '../../Service/state-city-service.service';
interface Search1{
  search_id :number;
  provider_id : number;
  hospital_clinic : String;
  city :String;
  state:String;
  contact_number:number;
  doctor_id :number;
  doctor_name : String;
  doctor_speciality: String;
  doctor_description: String;  
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
        const doctorIdString = doctor1.doctor_id.toString();
        const providerIdString = doctor1.provider_id.toString();
        const doctorNameLower = doctor1.doctor_name?.toLowerCase();
        const hospitalClinicLower = doctor1.hospital_clinic?.toLowerCase();
        return (
          (doctorIdString.includes(city) || (doctorNameLower && doctorNameLower.includes(city))) &&
          (providerIdString.includes(specialty) || (hospitalClinicLower && hospitalClinicLower.includes(specialty)))
        );
      });
    }
    

}
updatesearch(search_id:number){
  this.router.navigate(['/adminpage/updatesearch',search_id])
  console.log(search_id);

}
private getProvider1(){
  this.statecity.getSearchboth().subscribe(data =>{
    this.search =data;
  })
}
deletesearch(search_id:number){
  this.statecity.deletesearch(search_id).subscribe(data =>{
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

}
