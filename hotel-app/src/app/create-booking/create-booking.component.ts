import { Component } from '@angular/core';
import { Booking } from '../booking';
import { Bookings } from '../mock-bookings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent {

  constructor(private router: Router) {} //gibt dem Konstruktor das Router-Objekt

  booking: Booking = {
    id: 0,
    name: "",
    roomNumber: 0,
    startDate: new Date(),
    endDate: new Date()
  }

  save(): void {
    Bookings.push(this.booking); //neuer Eintrag in die MockListe
    console.log("SAVED");
    this.router.navigate(['bookings']); //Navigiert den User zur Übersicht
  }
}
