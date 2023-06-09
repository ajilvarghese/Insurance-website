import { Component, HostListener} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StateCityServiceService } from '../../Service/state-city-service.service';
import { Provider } from '../../Class/provider';
import { AlertBoxComponent } from '../../alert-box/alert-box.component';
import { ProviderserviceService } from '../../Service/providerservice.service';

@Component({
  selector: 'app-adminprovider',
  templateUrl: './adminprovider.component.html',
  styleUrls: ['./adminprovider.component.css']
})
export class AdminproviderComponent {

  provider:Provider[]=[];
  filterProvider:Provider[]=[];
  selectedProvider= new FormControl('');
  selectedState= new FormControl('');
  message!: string;
  isFixed = false;
  constructor(private statecity:ProviderserviceService,private router :Router,public dialog: MatDialog){}

  ngOnInit(): void {
    this.statecity.getprovider().subscribe((data: any[]) => {

      this.provider = data;

    });
    this.getProvider1();
    this.filterProvider=this.provider

   }

   onStateChange() {
    
    const city = this.selectedProvider.value?.toLowerCase() || '';
    const specialty = this.selectedState.value?.toLowerCase() || '';
    if((city && city.split('').length >=1) || (specialty && specialty.split('').length >=2) ){
     this.filterProvider = this.provider.filter(doctor1 =>((doctor1.hospitalClinic.toLowerCase().includes(city))||doctor1.providerId.toString().toLowerCase().includes(city)) &&
     (doctor1.state.toLowerCase().includes(specialty)||(doctor1.city.toLowerCase().includes(specialty)))
   );

    }

}
updateprovider(provider_id:number){

  this.router.navigate(['/adminpage/updateprovider',provider_id])

}
private getProvider1(){

  this.statecity.getprovider().subscribe(data =>{

    this.provider =data;

  })

}
deleteprovider(providerId:number){

  this.statecity.deleteprovider(providerId).subscribe(data =>{

    this.getProvider1();
    this.message = "Deleted Provider SuccessFully  ";
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
