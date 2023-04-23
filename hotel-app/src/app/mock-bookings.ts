import { Booking } from "./booking";

export const Bookings : Booking[] =[
    {
        id :1,
        name : "Hans Peter",
        roomNumber : 66,
        startDate : new Date(), //heute
        endDate : new Date("2023-07-15")
      },
      {
        id :2,
        name : "Lisa Stein",
        roomNumber : 12,
        startDate : new Date(), //heute
        endDate : new Date("2023-06-11")
      },
      {
        id :3,
        name : "Albert Stein",
        roomNumber : 13,
        startDate : new Date(), //heute
        endDate : new Date("2023-06-11")
      },
      {
        id :4,
        name : "Hannah Grills",
        roomNumber : 8,
        startDate : new Date("2023-06-08"), 
        endDate : new Date("2023-08-08")
      }
]