import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertBoxComponent } from '../alert-box/alert-box.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  message="do it your self"

  constructor(public dialog: MatDialog) {}

  openDialog():void {
    
    const dialogRef = this.dialog.open(AlertBoxComponent, {
      width: '250px',
      data:{
        message:this.message
      }
     
    });

    dialogRef.afterClosed().subscribe(() => {
     
      
    });
  }
  

}
