import React, { useState } from 'react';
import { stations } from '../data/stations';
import { generateTrains } from '../data/mockData';
import { Train } from '../types';
import Modal from './Modal'; // Assume you have a Modal component
import jsPDF from 'jspdf'; // Import jsPDF
import "jspdf-autotable";

const TrainSearch: React.FC = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [searchResults, setSearchResults] = useState<Train[]>([]);
  const [selectedTrain, setSelectedTrain] = useState<Train | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passengers, setPassengers] = useState<{ name: string; email: string; age: string; gender: string }[]>([{ name: '', email: '', age: '', gender: '' }]);
  const [confirmationPopupVisible, setConfirmationPopupVisible] = useState(false); // State for confirmation popup
  const [errorMessages, setErrorMessages] = useState<string[]>([]); // State for error messages

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trains = generateTrains(from, to);
    setSearchResults(trains);
  };

  const handleBookClick = (train: Train) => {
    setSelectedTrain(train);
    setIsModalOpen(true);
  };

  const handleAddPassenger = () => {
    setPassengers([...passengers, { name: '', email: '', age: '', gender: '' }]);
  };

  const handleRemovePassenger = (index: number) => {
    const newPassengers = passengers.filter((_, i) => i !== index);
    setPassengers(newPassengers);
  };

  const handlePassengerChange = (index: number, field: string, value: string) => {
    const newPassengers = [...passengers];
    newPassengers[index][field] = value;
    setPassengers(newPassengers);
  };

  const handleConfirmBooking = () => {
    const errors: string[] = [];

    passengers.forEach((passenger, index) => {
      if (!/^[a-zA-Z\s]+$/.test(passenger.name)) {
        errors.push(`Passenger ${index + 1}: Name is invalid.`);
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(passenger.email)) {
        errors.push(`Passenger ${index + 1}: Email is invalid.`);
      }
      if (!/^\d+$/.test(passenger.age)) {
        errors.push(`Passenger ${index + 1}: Age is invalid.`);
      }
      if (!passenger.gender) {
        errors.push(`Passenger ${index + 1}: Gender is required.`);
      }
    });

    if (errors.length > 0) {
      setErrorMessages(errors);
    } else {
      setConfirmationPopupVisible(true); // Show confirmation popup
      setIsModalOpen(false); // Hide modal
    }
  };

  const handleDownloadTicket = () => {
    if (!selectedTrain) return;

    const pnrNumber = Math.floor(1000000000 + Math.random() * 9000000000);
    const transactionId = `TXN${Math.floor(100000 + Math.random() * 900000)}`;
    const bookingStatus = "Confirmed (CNF)";
    const classOfTravel = "AC 3-Tier (3A)";
    const seatNumber = `B2-${Math.floor(1 + Math.random() * 72)}`;

    const ticketDetails = `
    Train Ticket

    Passenger Details:
    ${passengers.map(p => `Passenger Name: ${p.name}, Age: ${p.age}, Gender: ${p.gender}`).join('\n')}

    Ticket Details:
    PNR Number: ${pnrNumber}
    Transaction ID: ${transactionId}
    Booking Status: ${bookingStatus}
    Class of Travel: ${classOfTravel}
    Coach & Seat Number: ${seatNumber}

    Train Details:
    Train Number & Name: ${selectedTrain.id} - ${selectedTrain.name}
    From: ${from} ➝ To: ${to}
    Boarding Station: ${from} | Departure Time: ${selectedTrain.departureTime}
    Date of Journey: ${date}
    Quota: General

    Fare & Payment Details:
    Ticket Price: ₹${selectedTrain.price}
    Service Charges: ₹10
    Total Fare Paid: ₹${(selectedTrain.price + 10) * passengers.length}

    Additional Information:
    Journey Duration: ${selectedTrain.duration}
    Booking Date: ${new Date().toLocaleDateString()}
    Train Running Status: On Time ✅

    IRCTC Terms & Conditions Apply.
    Cancellation & Refund Policy: Check official IRCTC website.
    `;

    const doc = new jsPDF();
    const margin = 10;
    const lineHeight = 10;
    const lines = doc.splitTextToSize(ticketDetails, 190);

    doc.setFontSize(16);
    doc.text("Train Ticket", margin, margin);
    doc.setFontSize(12);
    lines.forEach((line, index) => {
      doc.text(line, margin, margin + (index + 2) * lineHeight);
    });

    doc.save(`Train_Ticket_${pnrNumber}.pdf`);
  };

  return (

    <div className="max-w-4xl mx-auto p-4">

      <form onSubmit={handleSearch} className="bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">From Station</label>
            <select value={from} onChange={(e) => setFrom(e.target.value)} className="w-full border rounded-md p-2" required>
              <option value="">Select Station</option>
              {Object.values(stations).flat().map((station) => (
                <option key={station} value={station}>{station}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">To Station</label>
            <select value={to} onChange={(e) => setTo(e.target.value)} className="w-full border rounded-md p-2" required>
              <option value="">Select Station</option>
              {Object.values(stations).flat().map((station) => (
                <option key={station} value={station}>{station}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full border rounded-md p-2" required />
          </div>
        </div>
        <button type="submit" className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Search Trains
        </button>
      </form>

      {searchResults.length > 0 && (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Train</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Departure</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Arrival</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {searchResults.map((train) => (
                  <tr key={train.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">{train.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{train.departureTime}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{train.arrivalTime}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{train.duration}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">₹{train.price}</td>
                    <td className="px-6 py-4">
                      <button className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-700" onClick={() => handleBookClick(train)}>
                        Book
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {isModalOpen && selectedTrain && (
        <Modal 
          onClose={() => setIsModalOpen(false)} 
          onAddPassenger={handleAddPassenger} 
          canRemovePassenger={passengers.length > 1}
          selectedTrain={selectedTrain} // Pass selectedTrain to Modal
          passengers={passengers} // Pass passengers to Modal
          handlePassengerChange={handlePassengerChange} // Pass handlePassengerChange to Modal
          handleRemovePassenger={handleRemovePassenger} // Pass handleRemovePassenger to Modal
          handleConfirmBooking={handleConfirmBooking} // Pass handleConfirmBooking to Modal
          errorMessages={errorMessages} // Pass errorMessages to Modal
        />
      )}

      {confirmationPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-bold">Ticket booked successfully {passengers.map(p => p.name).join(', ')}!</p>
           <div className="flex space-x-4"> 
  <button onClick={handleDownloadTicket} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md">
    Download Ticket
  </button>
  <button onClick={() => setConfirmationPopupVisible(false)} className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md">
    Close
  </button>
</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainSearch;