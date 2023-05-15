import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from '../Class/search';
import { Search1 } from '../Class/search1';

@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {
  private baseUr2 = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
   //.......search......................
   getsearch():Observable<Search[]>{
    return this.http.get<Search[]>(`${this.baseUr2}/signup/search`);
  }

  //create search
  createsearch(search:Search):Observable<Object>{
    return this.http.post(`${this.baseUr2}/signup/search`,search);
  }
  getsearchById(searchId:number):Observable<Search>{
    return this.http.get<Search>(`${this.baseUr2}/signup/search/${searchId}`);
  }
  updatesearch(searchId:number,search:Search):Observable<Object>{
    return this.http.put(`${this.baseUr2}/signup/search/${searchId}`,search);
  }
  deletesearch(searchId:number):Observable<Object>{
    return this.http.delete(`${this.baseUr2}/signup/search/${searchId}`);
  }
  getSearchboth(): Observable<Search1[]>{
    return this.http.get<Search1[]>(`${this.baseUr2}/signup/search1`);
  }

  //..................................

}
