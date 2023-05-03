import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = 'http://localhost:8080/';
  errorMessage: any;

  constructor(private http: HttpClient) { }

  signup(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
      
    };

    return this.http.post<any>(`${this.baseUrl}signup/create`, data, httpOptions).pipe(
      map((response: any) => {
        // Process the response data if needed
        return response;
      }),
      catchError((error: any) => {
        // Handle errors if needed
        return throwError(error);
      })
    );
}
signin(data: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}signup/authenticateUser`, data, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    responseType: 'json'
  }).pipe(
    map((response: any) => {
      
      return response;
    }),
    
    catchError((error: any) => {
      return this.errorMessage = error.error;
    })
  );
}



}
