// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripListingComponent } from './trip-listing/trip-listing.component'; // Import the component

@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent // Add TripListingComponent to declarations, not imports
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
