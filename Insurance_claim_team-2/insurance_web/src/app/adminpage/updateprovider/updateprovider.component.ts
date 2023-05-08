import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertBoxComponent } from 'src/app/alert-box/alert-box.component';
import { Provider } from 'src/app/Class/provider';
import { ProviderserviceService } from 'src/app/Service/providerservice.service';



@Component({
  selector: 'app-updateprovider',
  templateUrl: './updateprovider.component.html',
  styleUrls: ['./updateprovider.component.css']
})
export class UpdateproviderComponent {

  provider_id!:number;
  provider :Provider = new Provider();
  
  message!: string;
  onSubmit(){

    this.statecityservice.updateprovider(this.provider_id,this.provider).subscribe(data =>{

       this.gotoProvider();
       this.message = "Updated Provider SuccessFully  ";
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
      this.message = "Updating Provider Failed !!!  ";
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
  gotoProvider(){

    this.router.navigate(['/adminpage']);

  }
  
  constructor(private statecityservice:ProviderserviceService,private route:ActivatedRoute,private router:Router,public dialog: MatDialog){
  }
  ngOnInit(): void {
    
    this.provider_id=this.route.snapshot.params['provider_id'];
    this.statecityservice.getproviderById(this.provider_id).subscribe(data =>{
    this.provider=data;
    
  },error =>console.log(error));
      
  }
  

}
