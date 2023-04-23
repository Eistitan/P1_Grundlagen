import { Component } from '@angular/core';
import { Booking } from '../booking';
import { Bookings } from '../mock-bookings';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { } //gibt dem Konstruktor das Router-Objekt

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
      let bookingById = Bookings.find(x => x.id == id)!;//! none null operator
      this.booking = bookingById;
    }
  }

  save(): void {
    let bookingById = Bookings.find(x => x.id == this.booking.id);
    if (bookingById == null || bookingById == undefined)
      Bookings.push(this.booking); //neuer Eintrag in die MockListe
    else
      bookingById = this.booking;

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
