import React, { useState } from 'react';
import { getPNRStatus } from '../data/mockData';
import { PNRStatus as PNRStatusType } from '../types';
import { Search } from 'lucide-react';

const PNRStatus: React.FC = () => {
  const [pnrNumber, setPnrNumber] = useState('');
  const [status, setStatus] = useState<PNRStatusType | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = getPNRStatus(pnrNumber);
    setStatus(result);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">PNR Status Enquiry</h2>
        
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={pnrNumber}
              onChange={(e) => setPnrNumber(e.target.value)}
              placeholder="Enter 10-digit PNR number"
              className="flex-1 border rounded-md p-2"
              pattern="[0-9]{10}"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"
            >
              <Search size={20} />
              Get Status
            </button>
          </div>
        </form>

        {status && (
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b">
              <h3 className="text-lg font-semibold">PNR: {status.pnrNumber}</h3>
            </div>
            
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Train Number/Name</p>
                  <p className="font-medium">{status.trainNumber} - {status.trainName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Journey Date</p>
                  <p className="font-medium">{status.journeyDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">From</p>
                  <p className="font-medium">{status.from}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">To</p>
                  <p className="font-medium">{status.to}</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Passenger Details</h4>
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Passenger</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Seat</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {status.passengers.map((passenger, index) => (
                      <tr key={index} className="border-t">
                        <td className="px-4 py-2">
                          <div className="text-sm">{passenger.name}</div>
                          <div className="text-xs text-gray-500">
                            {passenger.age} yrs, {passenger.gender}
                          </div>
                        </td>
                        <td className="px-4 py-2 text-sm">{passenger.seatNumber || '-'}</td>
                        <td className="px-4 py-2">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            status.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                            status.status === 'Waitlist' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {passenger.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PNRStatus;