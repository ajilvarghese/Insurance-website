import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  // templateUrl: './rating.component.html',
  template: `
  <button *ngFor="let icon of icons"
          mat-icon-button
          (click)="setRating(icon.value)"
          [color]="rating >= icon.value ? 'primary' : 'basic'">
    <mat-icon>{{icon.icon}}</mat-icon>
  </button>
`
  // styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  @Input()
  rating!: number;
  @Output() ratingChange = new EventEmitter<number>();

  icons = [
    { icon: 'star', value: 1 },
    { icon: 'star', value: 2 },
    { icon: 'star', value: 3 },
    { icon: 'star', value: 4 },
    { icon: 'star', value: 5 },
  ];

  setRating(value: number) {
    this.rating = value;
    this.ratingChange.emit(value);
  }
}
