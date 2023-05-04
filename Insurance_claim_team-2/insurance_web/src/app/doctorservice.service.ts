import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
//service class for doctor
export class DoctorserviceService {
  private baseUr2 = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
   // ................Doctor CRUD............
   getdoctor():Observable<Doctor[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:4200' // Set the origin header
      }),
      withCredentials: true // Include credentials in the request
    };
    return this.http.get<Doctor[]>(`${this.baseUr2}/signup/doctors`);
  }

//create a doctor
  createdoctor(doctor:Doctor):Observable<Object>{
    return this.http.post(`${this.baseUr2}/signup/doctors`,doctor);
  }

  //get the doctor by id
  getdoctorById(doctor_id:number):Observable<Doctor>{
    return this.http.get<Doctor>(`${this.baseUr2}/signup/doctors/${doctor_id}`);
  }

  //update doctor
  updatedoctor(doctor_id:number,doctor:Doctor):Observable<Object>{
    return this.http.put(`${this.baseUr2}/signup/doctors/${doctor_id}`,doctor);
  }

  //delete doctor
  deletedoctor(doctor_id:number):Observable<Object>{
    return this.http.delete(`${this.baseUr2}/signup/doctors/${doctor_id}`);
  }

  // ................................
  
}
