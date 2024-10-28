import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {
  public editForm!: FormGroup;
  trip!: Trip;
  submitted = false;
  message: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripDataService: TripDataService
  ) { }

  ngOnInit(): void {
    // Retrieve stashed trip code
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something went wrong, couldn’t find the stashed tripCode!");
      this.router.navigate(['']);
      return;
    }

    console.log('EditTripComponent::ngOnInit');
    console.log('tripCode:', tripCode);

    // Build the form
    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    // Fetch the existing trip data
    this.tripDataService.getTrip(tripCode)
      .subscribe({
        next: (value: any) => {
          this.trip = value;
          if (!value) {
            this.message = 'No Trip Retrieved!';
          } else {
            this.message = 'Trip: ' + tripCode + ' retrieved';
            // Populate the form with retrieved data
            this.editForm.patchValue(value);
          }
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error:', error);
          this.message = 'Error retrieving the trip!';
        }
      });
  }

  // Method to handle form submission
  public onSubmit(): void {
    this.submitted = true;
    if (this.editForm.valid) {
      this.tripDataService.updateTrip(this.editForm.value.code, this.editForm.value)
        .subscribe({
          next: (response: any) => {
            console.log('Trip updated successfully:', response);
            this.router.navigate(['']);
          },
          error: (error: any) => {
            console.log('Error updating trip:', error);
            this.message = 'Failed to update trip!';
          }
        });
    }
  }

  // Getter for easy access to form controls
  get f() { return this.editForm.controls; }
}
