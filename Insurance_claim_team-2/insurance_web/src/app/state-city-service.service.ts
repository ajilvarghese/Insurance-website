import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from './provider';
import { Search } from './search';



interface State{
  state_id : number;
  state_name: String;
}
interface Search1{
  search_id :number;
  provider_id : number;
  hospital_clinic : String;
  city :String;
  state:String;
  contact_number:number;
  doctor_id :number;
  doctor_name : String;
  doctor_speciality: String;
  doctor_description: String;  
}
interface Doctor{
  doctor_id : number;
  doctor_name : String;
  doctor_speciality: String;
  doctor_description: String;
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
interface Department {
  department_id: number;
  department_name: string;
  city_id:number;
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
  // ................Doctor CRUD............
  getdoctor():Observable<Doctor[]>{
    return this.http.get<Doctor[]>(`${this.baseUr2}/signup/doctors`);
  }
  createdoctor(doctor:Doctor):Observable<Object>{
    return this.http.post(`${this.baseUr2}/signup/doctors`,doctor);
  }
  getdoctorById(doctor_id:number):Observable<Doctor>{
    return this.http.get<Doctor>(`${this.baseUr2}/signup/doctors/${doctor_id}`);
  }
  updatedoctor(doctor_id:number,doctor:Doctor):Observable<Object>{
    return this.http.put(`${this.baseUr2}/signup/doctors/${doctor_id}`,doctor);
  }
  deletedoctor(doctor_id:number):Observable<Object>{
    return this.http.delete(`${this.baseUr2}/signup/doctors/${doctor_id}`);
  }

  // ................................
  //   provider.....................
  getprovider():Observable<Provider[]>{
    return this.http.get<Provider[]>(`${this.baseUr2}/signup/providers`);
  }
  createprovider(provider:Provider):Observable<Object>{
    return this.http.post(`${this.baseUr2}/signup/providers`,provider);
  }
  getproviderById(provider_id:number):Observable<Provider>{
    return this.http.get<Provider>(`${this.baseUr2}/signup/providers/${provider_id}`);
  }
  updateprovider(provider_id:number,provider:Provider):Observable<Object>{
    return this.http.put(`${this.baseUr2}/signup/providers/${provider_id}`,provider);
  }
  deleteprovider(provider_id:number):Observable<Object>{
    return this.http.delete(`${this.baseUr2}/signup/providers/${provider_id}`);
  }
  //.............................
  //.......search......................
  getsearch():Observable<Search[]>{
    return this.http.get<Search[]>(`${this.baseUr2}/signup/search`);
  }
  createsearch(search:Search):Observable<Object>{
    return this.http.post(`${this.baseUr2}/signup/search`,search);
  }
  getsearchById(search_id:number):Observable<Search>{
    return this.http.get<Search>(`${this.baseUr2}/signup/search/${search_id}`);
  }
  updatesearch(search_id:number,search:Search):Observable<Object>{
    return this.http.put(`${this.baseUr2}/signup/search/${search_id}`,search);
  }
  deletesearch(search_id:number):Observable<Object>{
    return this.http.delete(`${this.baseUr2}/signup/search/${search_id}`);
  }
  getSearchboth(): Observable<Search1[]>{
    return this.http.get<Search1[]>(`${this.baseUr2}/signup/search1`);
  }

  //..................................





  getStates(): Observable<State[]> {
    return this.http.get<State[]>(`${this.baseUrl}/states`);
  }
  // getDoctor(): Observable<Doctor[]> {
  //   return this.http.get<Doctor[]>(`${this.baseUrl}/doctor`);
  // }
  getcity(): Observable<City1[]> {
    return this.http.get<City1[]>(`${this.baseUrl}/city`);
  }

 
  getCities(stateId: number): Observable<City[]> {
    const url = `${this.baseUrl}/cities/${stateId}`;
    return this.http.get<City[]>(url);
  }

  getSearch(): Observable<Search1[]>{
    const url = `${this.baseUrl}/search`;
    return this.http.get<Search1[]>(url);
  }
 
  
}
