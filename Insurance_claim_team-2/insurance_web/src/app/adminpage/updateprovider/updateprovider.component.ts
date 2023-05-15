import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  providerId!:number;
  provider :Provider = new Provider();
  loginForm!:FormGroup;
  message!: string;
  constructor(private statecityservice:ProviderserviceService,private route:ActivatedRoute,private router:Router,public dialog: MatDialog,private fb:FormBuilder){
  }
  
  ngOnInit(){
    
    this.providerId=this.route.snapshot.params['providerId'];
    this.statecityservice.getproviderById(this.providerId).subscribe(data =>{
    this.provider=data;
   
    
  },error =>console.log(error));
  
      
  }
  onSubmit(){

    this.statecityservice.updateprovider(this.providerId,this.provider).subscribe(data =>{

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
      
    });
  }
  gotoProvider(){

    this.router.navigate(['/adminpage']);

  }
  
  
  

}
