import { Component } from '@angular/core';
import { Booking } from '../booking';
//import { Bookings } from '../mock-bookings';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService) { } //gibt dem Konstruktor das Router-Objekt

  booking: Booking = {
    id: 0,
    name: "",
    roomNumber: 0,
    startDate: new Date(),
    endDate: new Date()
  }

  ngOnInit(): void {   //Methode die beimStart ausgeführt wird
    if (this.router.url != '/create') {
      let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      let bookingById = this.bookingService.getBookingById(id);
      this.booking = bookingById;
    }
  }

  save(): void {
    let bookingById = this.bookingService.getBookingById(this.booking.id); //existiert ID?

    if (bookingById == null || bookingById == undefined)
      this.bookingService.addBooking(this.booking); //neuer Eintrag wird hinzugefügt
    else
      this.bookingService.updateBooking(this.booking);
    console.log("SAVED");
    this.router.navigate(['bookings']); //Navigiert den User zur Übersicht
  }

  dateChanged(event: Event, isStart: boolean): void {
    let val = (event.target as HTMLInputElement).value; //Value des Datepicker-Events
    if (isStart)
      this.booking.startDate = new Date(val);
    else
      this.booking.endDate = new Date(val);
  }

}
