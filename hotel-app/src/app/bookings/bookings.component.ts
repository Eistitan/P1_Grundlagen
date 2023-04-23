import { Component } from '@angular/core';
import { Booking } from '../booking';
import { Bookings } from '../mock-bookings';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {

  bookings = Bookings;
  deleteBooking(booking: Booking): void {
    let index = Bookings.indexOf(booking); //gibt index des gewählten Elements in der Liste aus
    Bookings.splice(index, 1);
  }
}
