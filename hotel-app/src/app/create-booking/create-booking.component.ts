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
    if (this.router.url != '/create'){
      let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      let bookingById = Bookings.find(x => x.id == id)!;//! none null operator
      this.booking = bookingById;
    }
  }

  save(): void {
    Bookings.push(this.booking); //neuer Eintrag in die MockListe
    console.log("SAVED");
    this.router.navigate(['bookings']); //Navigiert den User zur Übersicht
  }
}
