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
interface City1 {
  city_id: number;
  city_name: string;
  state_id:number;
}

interface Illness{
  illness_id: number;
  illness_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class StateCityServiceService {
  private baseUrl = 'http://localhost:3000';
  private baseUr2 = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    
  }
  getilllness():Observable<Illness[]>{
    return this.http.get<Illness[]>(`${this.baseUr2}/signup/illnesses`);
  }

  getStates(): Observable<State[]> {
    return this.http.get<State[]>(`${this.baseUrl}/states`);
  }
  getcity(): Observable<City1[]> {
    return this.http.get<City1[]>(`${this.baseUrl}/city`);
  }

 
  getCities(stateId: number): Observable<City[]> {
    const url = `${this.baseUrl}/cities/${stateId}`;
    return this.http.get<City[]>(url);
  }
 
  
}
