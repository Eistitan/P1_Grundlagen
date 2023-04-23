//Interface for booking
//Interface - alle Felder und Methoden sind pflicht

export interface Booking{
    id:number;
    name:string;
    roomNumber:number;
    startDate:Date;
    endDate:Date;
}