// src/app/trip-listing/trip-listing.component.ts

import { Component, OnInit } from '@angular/core';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css']
})
export class TripListingComponent implements OnInit {
  public trips: Trip[] = [];

  constructor(private tripDataService: TripDataService) { }

  ngOnInit(): void {
    this.getTrips();
  }

  private getTrips(): void {
    this.tripDataService.getTrips().subscribe({
      next: (data: Trip[]) => this.trips = data,
      error: (err: any) => console.error('Error fetching trips:', err)
    });
  }

  public addTrip(): void {
    // Implement the logic for adding a new trip, e.g., navigate to a new trip form page
    console.log('Add Trip button clicked');
  }
}
