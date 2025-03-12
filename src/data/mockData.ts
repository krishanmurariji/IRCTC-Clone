import { format, addMinutes } from 'date-fns';
import { Train, PNRStatus } from '../types';

const generateRandomTrainNumber = () => {
  return Math.floor(10000 + Math.random() * 90000).toString();
};

const generateRandomTime = () => {
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

export const generateTrains = (from: string, to: string): Train[] => {
 const trainNames = [
    'Rajdhani Express', 'Shatabdi Express', 'Duronto Express', 'Garib Rath', 'Sampark Kranti', 
    'Humsafar Express', 'Tejas Express', 'Vande Bharat Express', 'Jan Shatabdi Express', 'Mahamana Express',
    'Antyodaya Express', 'Kavi Guru Express', 'Gatimaan Express', 'Uday Express', 'Intercity Express',
    'Deccan Queen', 'Mysore Express', 'Chennai Mail', 'Jammu Tawi Express', 'Goa Express',
    'Punjab Mail', 'Kolkata Mail', 'Bhopal Express', 'Mandovi Express', 'Netravati Express',
    'Andaman Express', 'Jhelum Express', 'Dakshin Express', 'Brahmaputra Mail', 'Kashi Vishwanath Express',
    'Gorakhpur Express', 'Avadh Assam Express', 'Gitanjali Express', 'Padatik Express', 'Howrah Express'
];


  return Array.from({ length: 5 }, (_, i) => {
    const departureTime = generateRandomTime();
    const durationMinutes = 120 + Math.floor(Math.random() * 480);
    const arrivalTime = format(
      addMinutes(new Date().setHours(parseInt(departureTime.split(':')[0]), parseInt(departureTime.split(':')[1])), 
      durationMinutes),
      'HH:mm'
    );

    return {
      id: `train-${i}`,
      name: `${trainNames[Math.floor(Math.random() * trainNames.length)]}`,
      number: generateRandomTrainNumber(),
      from,
      to,
      departureTime,
      arrivalTime,
      duration: `${Math.floor(durationMinutes / 60)}h ${durationMinutes % 60}m`,
      status: ['On Time', 'Delayed', 'Departed'][Math.floor(Math.random() * 3)] as Train['status'],
      price: Math.floor(500 + Math.random() * 2000),
      availableSeats: Math.floor(Math.random() * 100)
    };
  });
};

export const getPNRStatus = (pnrNumber: string): PNRStatus => {
  return {
    pnrNumber,
    trainNumber: generateRandomTrainNumber(),
    trainName: 'Rajdhani Express',
    journeyDate: format(new Date(), 'yyyy-MM-dd'),
    from: 'Mumbai CST',
    to: 'New Delhi',
    status: ['Confirmed', 'Waitlist', 'RAC'][Math.floor(Math.random() * 3)] as PNRStatus['status'],
    passengers: [
      {
        name: 'John Doe',
        age: 30,
        gender: 'Male',
        seatNumber: 'B1-23',
        status: 'CNF'
      }
    ]
  };
};