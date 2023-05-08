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
}
