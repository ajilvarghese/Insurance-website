import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Doctor } from '../Class/doctor';
import { StateCityServiceService } from '../Service/state-city-service.service';



@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  doctors: Doctor[] = [];
  
  
  constructor(private doctorDataService: StateCityServiceService) { }


ngOnInit() {
  this.doctorDataService.getDoctorsData().subscribe(
    doctors => {
      this.doctors = doctors;
      // use the doctors data here
    }
  );
}

}
