import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertBoxComponent } from '../alert-box/alert-box.component';
import { Doctor } from '../Class/doctor';
import { StateCityServiceService } from '../Service/state-city-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  doctors: Doctor[] = [];
  constructor(private http:HttpClient,private router: Router,private doctorDataService: StateCityServiceService) {}
  

  onCardClick(title: string) {
    this.http.get<Doctor[]>(`http://localhost:3000/doctors/${title}`).subscribe(
      data => {
        this.doctors = data;
        this.doctorDataService.setDoctorsData(this.doctors);
        console.log(data);
        this.goto();
        // process the data here...
      },
      error => {
        console.log(error);
      }
    );
  }
  goto(){
    this.router.navigate(['/department'])
  }
  

}
