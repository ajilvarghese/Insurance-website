import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  
  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getAllStates():Observable<any[]>{
   return this.http.get<any[]>(`${this.baseUrl}/state-city/states`); 
}

getCities(stateid:number):Observable<any[]>{
  return this.http.get<any[]>(`${this.baseUrl}/state-city/${stateid}/cities`)
}

}
