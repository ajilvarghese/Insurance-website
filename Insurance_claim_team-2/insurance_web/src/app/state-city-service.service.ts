import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface State{
  state_id : number;
  state_name: String;
}

interface City {
  city_id: number;
  city_name: string;
  state_id:number;
}

@Injectable({
  providedIn: 'root'
})
export class StateCityServiceService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    
  }

  getStates(): Observable<State[]> {
    return this.http.get<State[]>(`${this.baseUrl}/states`);
  }

 
  getCities(stateId: number): Observable<City[]> {
    const url = `${this.baseUrl}/cities/${stateId}`;
    return this.http.get<City[]>(url);
  }
 
  
}
