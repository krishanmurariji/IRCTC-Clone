import React, { useState } from 'react';
import { ArrowRightLeft, Calendar } from 'lucide-react';

const TrainSearch: React.FC = () => {
  const [tripType, setTripType] = useState<'roundtrip' | 'oneway'>('roundtrip');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [adults, setAdults] = useState(3);
  const [children, setChildren] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        {/* Hero Content */}
        <div className="text-center mb-12">
          {/* Train Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-lg">
                {/* Train illustration */}
                <rect x="30" y="40" width="60" height="45" rx="8" fill="#E8F4FA" />
                <rect x="30" y="40" width="60" height="15" rx="8" fill="#B8D8E8" />
                <rect x="38" y="50" width="18" height="18" rx="2" fill="#7CB8D8" />
                <rect x="64" y="50" width="18" height="18" rx="2" fill="#7CB8D8" />
                <circle cx="45" cy="87" r="5" fill="#F9D71C" />
                <circle cx="75" cy="87" r="5" fill="#F9D71C" />
                <path d="M 30 85 L 25 95 L 35 95 Z" fill="#7CB8D8" />
                <path d="M 90 85 L 95 95 L 85 95 Z" fill="#7CB8D8" />
              </svg>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Book Your Next <span className="text-yellow-300">Train Trip</span>
            <br />in Minutes.
          </h1>
          <p className="text-xl text-white/90 font-light">
            Fast, safe and comfortable train travel across and beyond
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
          {/* Trip Type Toggle */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setTripType('roundtrip')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                tripType === 'roundtrip'
                  ? 'bg-blue-50 text-blue-600 border-2 border-blue-600'
                  : 'bg-gray-50 text-gray-600 border-2 border-transparent hover:bg-gray-100'
              }`}
            >
              <ArrowRightLeft size={20} />
              Round trip
            </button>
            <button
              onClick={() => setTripType('oneway')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                tripType === 'oneway'
                  ? 'bg-blue-50 text-blue-600 border-2 border-blue-600'
                  : 'bg-gray-50 text-gray-600 border-2 border-transparent hover:bg-gray-100'
              }`}
            >
              →
              One way
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* From Station */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">From</label>
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              >
                <option value="">Enter train station</option>
                <option value="Mumbai">Mumbai Central</option>
                <option value="Delhi">New Delhi</option>
                <option value="Bangalore">Bangalore City</option>
                <option value="Chennai">Chennai Central</option>
                <option value="Kolkata">Howrah Junction</option>
              </select>
            </div>

            {/* To Station */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">To</label>
              <select
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              >
                <option value="">Enter destination</option>
                <option value="Mumbai">Mumbai Central</option>
                <option value="Delhi">New Delhi</option>
                <option value="Bangalore">Bangalore City</option>
                <option value="Chennai">Chennai Central</option>
                <option value="Kolkata">Howrah Junction</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
              <div className="relative">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                />
                <Calendar className="absolute right-3 top-3.5 text-gray-400" size={20} />
              </div>
            </div>
          </div>

          {/* Travellers Section */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Travellers</label>
            <div className="flex gap-8">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors text-xl font-bold"
                >
                  −
                </button>
                <span className="text-lg font-medium">{adults} Adults</span>
                <button
                  onClick={() => setAdults(adults + 1)}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors text-xl font-bold"
                >
                  +
                </button>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors text-xl font-bold"
                >
                  −
                </button>
                <span className="text-lg font-medium">{children} Children</span>
                <button
                  onClick={() => setChildren(children + 1)}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors text-xl font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Get Tickets Button */}
          <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg">
            Get Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainSearch;
