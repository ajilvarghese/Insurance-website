import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainComponent } from '../main/main.component';
export interface DialogData {
  message:string
}
@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent {

  @Input()
  message!: string;
  
  constructor(
    public dialogRef: MatDialogRef<AlertBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    ngOnInit(): void {

      // Close the dialog after 5 seconds
      setTimeout(() => {
        
        this.dialogRef.close();
      }, 1500); // 5000 milliseconds = 5 seconds
    }
  // onNoClick(): void {
  //   // setTimeout(() => {
  //   //   this.dialogRef.close();
  //   // }, 5000);
  //   this.dialogRef.close();
  // }
}
