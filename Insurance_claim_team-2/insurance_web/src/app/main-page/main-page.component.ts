import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor( private router: Router) { }

  searchQuery!: string;
  cities: string[] = ['New York', 'Los Angeles', 'Chicago', 'San Francisco', 'London', 'Paris', 'Tokyo'];
  filteredCities!: string[];

  onSearchInputChange() {
    this.filteredCities = this.cities.filter(city => city.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }
  

}
