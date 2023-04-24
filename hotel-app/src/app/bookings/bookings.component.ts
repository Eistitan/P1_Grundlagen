import { Component } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
//import { Bookings } from '../mock-bookings';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  constructor(private bookingService: BookingService) { }//dependency Injection

  bookings: Booking[] = []; //Arrayinitialisierung

  ngOnInit(): void {
    this.bookings = this.bookingService.getBookings();
  }

  deleteBooking(booking: Booking): void {
    this.bookingService.deleteBooking(booking);
  }
}
