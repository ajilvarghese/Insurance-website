import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertBoxComponent } from '../../alert-box/alert-box.component';
import { Search } from '../../Class/search';
import { SearchserviceService } from '../../Service/searchservice.service';


@Component({
  selector: 'app-updatesearch',
  templateUrl: './updatesearch.component.html',
  styleUrls: ['./updatesearch.component.css']
})
export class UpdatesearchComponent {
  searchId!:number;
  search :Search = new Search();
  message!: string;

  constructor(private statecityservice:SearchserviceService,private route:ActivatedRoute,private router:Router,public dialog: MatDialog){}
  
  onSubmit(){

    this.statecityservice.updatesearch(this.searchId,this.search).subscribe(data=>{

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
  ngOnInit(): void {
    
    this.searchId=this.route.snapshot.params['searchId'];
    this.statecityservice.getsearchById(this.searchId).subscribe(data =>{
    this.search=data;
    
  },error =>console.log(error));
      
  }

}
