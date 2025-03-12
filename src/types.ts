export interface Train {
  id: string;
  name: string;
  number: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  status: 'On Time' | 'Delayed' | 'Departed';
  price: number;
  availableSeats: number;
}

export interface PNRStatus {
  pnrNumber: string;
  trainNumber: string;
  trainName: string;
  journeyDate: string;
  from: string;
  to: string;
  status: 'Confirmed' | 'Waitlist' | 'RAC';
  passengers: {
    name: string;
    age: number;
    gender: string;
    seatNumber?: string;
    status: string;
  }[];
}

export interface Ticket {
  ticketNumber: string;
  pnrNumber: string;
  trainDetails: Train;
  passengers: {
    name: string;
    age: number;
    gender: string;
    seatNumber: string;
  }[];
  journeyDate: string;
  bookingDate: string;
  totalFare: number;
}