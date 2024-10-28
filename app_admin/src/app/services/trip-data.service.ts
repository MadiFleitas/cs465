// src/app/services/trip-data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiBaseUrl = 'http://localhost:3000/api'; // Update with your actual API base URL

  constructor(private http: HttpClient) { }

  // Method to get a list of trips
  public getTrips(): Observable<Trip[]> {
    const url = `${this.apiBaseUrl}/trips`;
    return this.http.get<Trip[]>(url);
  }

  // Method to add a new trip
  public addTrip(tripData: Trip): Observable<Trip> {
    const url = `${this.apiBaseUrl}/trips`;
    return this.http.post<Trip>(url, tripData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Method to get a specific trip by its code
  public getTrip(tripCode: string): Observable<Trip> {
    const url = `${this.apiBaseUrl}/trips/${tripCode}`;
    return this.http.get<Trip>(url);
  }

  // Method to update an existing trip
  public updateTrip(tripCode: string, tripData: Trip): Observable<Trip> {
    const url = `${this.apiBaseUrl}/trips/${tripCode}`;
    return this.http.put<Trip>(url, tripData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Method to delete a trip by its code
  public deleteTrip(tripCode: string): Observable<any> {
    const url = `${this.apiBaseUrl}/trips/${tripCode}`;
    return this.http.delete(url, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
