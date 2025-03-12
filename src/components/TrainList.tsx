import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { generateTrains } from '../data/mockData'; // Adjust the import based on your project structure

const TrainList: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const from = queryParams.get('from') || 'Mumbai';
  const to = queryParams.get('to') || 'Delhi';

  const allTrains = generateTrains(from, to);
  
  // Search state
  const [searchTerm, setSearchTerm] = useState('');

  // Filtered Trains
  const filteredTrains = allTrains.filter(train =>
    train.number.toString().includes(searchTerm) || 
    train.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Available Trains</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by Train Number or Name..."
        className="w-full p-2 mb-4 border rounded shadow-sm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Train Number</th>
            <th className="border p-2">Train Name</th>
            <th className="border p-2">From</th>
            <th className="border p-2">To</th>
            <th className="border p-2">Departure Time</th>
            <th className="border p-2">Arrival Time</th>
            <th className="border p-2">Duration</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Seats Available</th>
          </tr>
        </thead>
        <tbody>
          {filteredTrains.length > 0 ? (
            filteredTrains.map((train, index) => (
              <tr key={`${train.number}-${index}`} className="text-center border hover:bg-gray-100">
                <td className="border p-2">{train.number}</td>
                <td className="border p-2">{train.name}</td>
                <td className="border p-2">{train.from}</td>
                <td className="border p-2">{train.to}</td>
                <td className="border p-2">{train.departureTime}</td>
                <td className="border p-2">{train.arrivalTime}</td>
                <td className="border p-2">{train.duration}</td>
                <td className={`border p-2 ${train.status === 'On Time' ? 'text-green-600' : 'text-red-600'}`}>
                  {train.status}
                </td>
                <td className="border p-2">₹{train.price}</td>
                <td className="border p-2">{train.availableSeats}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={10} className="border p-4 text-center text-gray-500">
                No matching trains found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TrainList;
