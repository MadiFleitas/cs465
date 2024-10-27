import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];
  message: string = '';

  constructor(private tripDataService: TripDataService, private router: Router) {
    console.log('trip-listing constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.loadTrips();
  }

  private loadTrips(): void {
    this.tripDataService.getTrips().subscribe({
      next: (trips: Trip[]) => {
        this.trips = trips;
        this.message = trips.length > 0 ? `There are ${trips.length} trips available.` : 'There were no trips retrieved from the database.';
        console.log(this.message);
      },
      error: (error: any) => {
        console.error('Error fetching trips:', error);
        this.message = 'An error occurred while fetching trips.';
      }
    });
  }

  public addTrip(): void {
    this.router.navigate(['/add-trip']);
  }
}

