import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertBoxComponent } from '../alert-box/alert-box.component';
import { Provider } from '../provider';
import { StateCityServiceService } from '../state-city-service.service';

@Component({
  selector: 'app-createprovider',
  templateUrl: './createprovider.component.html',
  styleUrls: ['./createprovider.component.css']
})
export class CreateproviderComponent {
  provider :Provider = new Provider();
  message!: string;
  constructor(private statecityservice:StateCityServiceService,private router:Router,public dialog: MatDialog){}
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
    error=>console.log(error));
    this.message = "Creating Provider Failed !!";
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
  onSubmit(){
    console.log(this.provider);
    this.saveProvider();
  }


}
