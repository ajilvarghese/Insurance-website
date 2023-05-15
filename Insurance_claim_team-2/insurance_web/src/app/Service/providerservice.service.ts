import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from '../Class/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderserviceService {
  private baseUr2 = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  
  //   provider.....................
  getprovider():Observable<Provider[]>{
    return this.http.get<Provider[]>(`${this.baseUr2}/signup/providers`);
  }
  createprovider(provider:Provider):Observable<Object>{
    return this.http.post(`${this.baseUr2}/signup/providers`,provider);
  }
  getproviderById(providerId:number):Observable<Provider>{
    return this.http.get<Provider>(`${this.baseUr2}/signup/providers/${providerId}`);
  }
  updateprovider(providerId:number,provider:Provider):Observable<Object>{
    return this.http.put(`${this.baseUr2}/signup/providers/${providerId}`,provider);
  }
  deleteprovider(providerId:number):Observable<Object>{
    return this.http.delete(`${this.baseUr2}/signup/providers/${providerId}`);
  }
  //.............................
}
