import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertBoxComponent } from 'src/app/alert-box/alert-box.component';
import { Search } from 'src/app/Class/search';
import { SearchserviceService } from 'src/app/Service/searchservice.service';


@Component({

  selector: 'app-createsearch',
  templateUrl: './createsearch.component.html',
  styleUrls: ['./createsearch.component.css']

})
export class CreatesearchComponent {

  search :Search = new Search();
  message!: string;
  constructor(private statecityservice:SearchserviceService,private router:Router,public dialog: MatDialog){}
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
    error=>{
      
      this.message=(error.error.message)|| "Creating  failed"; // log the error message to the console
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
    );
  }
  gotoProvider(){

    this.router.navigate(['/adminpage']);

  }
  onSubmit(){

    console.log(this.search);
    this.saveSearch();
    
  }




}
