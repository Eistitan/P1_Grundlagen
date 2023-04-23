import { Component } from '@angular/core';
import { Booking } from '../booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {

  booking : Booking = {
    id :1,
    name : "Hans Peter",
    roomNumber : 66,
    startDate : new Date(), //heute
    endDate : new Date("2023-07-15")
  }

}
