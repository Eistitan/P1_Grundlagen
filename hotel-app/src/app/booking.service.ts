import { Injectable } from '@angular/core'; //dadurch wird der Service einbindbar
import { Bookings } from './mock-bookings';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root' //rootLevel,globale Ebene.
})
export class BookingService {

  constructor() { }

  getBookings(): Booking[] {
    return Bookings;
  }

  deleteBooking(booking: Booking): void {
    let index = Bookings.indexOf(booking); //gibt index des gewählten Elements in der Liste aus
    Bookings.splice(index, 1);
  }

  getBookingById(id: number): Booking {
    let bookingById = Bookings.find(x => x.id == id)!;//! none null operator
    return bookingById;
  }

  addBooking(booking: Booking): void {
    Bookings.push(booking); //neuer Eintrag in die MockListe
  }
  updateBooking(booking: Booking): void {
    let currentBooking = this.getBookingById(booking.id);
    currentBooking = booking;
  }
}
