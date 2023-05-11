import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertBoxComponent } from 'src/app/alert-box/alert-box.component';
import { Provider } from 'src/app/Class/provider';
// import { Provider } from 'src/app/provider';

import { ProviderserviceService } from 'src/app/Service/providerservice.service';




@Component({
  selector: 'app-createprovider',
  templateUrl: './createprovider.component.html',
  styleUrls: ['./createprovider.component.css']
})
export class CreateproviderComponent {

  provider :Provider = new Provider();
  message!: string;
  constructor(private statecityservice:ProviderserviceService,private router:Router,public dialog: MatDialog){}
  ngOnInit():void{

  }
  saveProvider(){

    this.statecityservice.createprovider(this.provider).subscribe(data=>{

      console.log(data);
      this.gotoProvider();
      this.message = "Created Provider SuccessFully ";
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
      
    });
  }
  gotoProvider(){

    this.router.navigate(['/adminpage']);

  }
  onSubmit(){

    console.log(this.provider);
    this.saveProvider();
    
  }


}
