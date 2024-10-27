import { Routes } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component'; // Import the EditTripComponent

export const routes: Routes = [
  { path: '', component: TripListingComponent }, // Home route
  { path: 'add-trip', component: AddTripComponent }, // Add Trip route
  { path: 'edit-trip', component: EditTripComponent }, // Edit Trip route
  { path: '**', redirectTo: '' } // Redirect unknown paths to home
];
