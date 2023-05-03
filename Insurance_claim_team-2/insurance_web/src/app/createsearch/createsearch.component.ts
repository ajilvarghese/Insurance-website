import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertBoxComponent } from '../alert-box/alert-box.component';
import { Search } from '../search';
import { StateCityServiceService } from '../state-city-service.service';

@Component({
  selector: 'app-createsearch',
  templateUrl: './createsearch.component.html',
  styleUrls: ['./createsearch.component.css']
})
export class CreatesearchComponent {
  search :Search = new Search();
  message!: string;
  constructor(private statecityservice:StateCityServiceService,private router:Router,public dialog: MatDialog){}
  ngOnInit():void{

  }
  saveSearch(){
    this.statecityservice.createsearch(this.search).subscribe(data=>{
      console.log(data);
      this.gotoProvider();
      this.message = "Created SuccessFully ";
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
    this.message = "Creating Failed !!";
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
    console.log(this.search);
    this.saveSearch();
  }




}
