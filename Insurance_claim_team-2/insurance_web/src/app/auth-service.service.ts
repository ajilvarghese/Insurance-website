import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private isAuthenticated = false;

  constructor() { }

  login() {
    // perform login logic here
    this.isAuthenticated = true;
  }

  logout() {
    // perform logout logic here
    this.isAuthenticated = false;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
