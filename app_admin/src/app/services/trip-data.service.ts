// trip-data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip'; // Import Trip model

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiUrl = 'http://localhost:3000/api/trips'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  // Method to get the list of trips
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }

  // Method to add a new trip
  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.apiUrl, trip);
  }

  // Method to get a single trip by its code
  getTrip(tripCode: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.apiUrl}/${tripCode}`);
  }

  // Method to update an existing trip
  updateTrip(tripCode: string, tripData: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.apiUrl}/${tripCode}`, tripData);
  }
}
