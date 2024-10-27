import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { CommonModule } from '@angular/common'; // Import CommonModule for standalone component support

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent {
  @Input('trip') trip: Trip | undefined; // Ensure the 'trip' input is typed correctly

  constructor(private router: Router) {}

  public editTrip(trip: Trip): void { // Add 'void' return type
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }
}
