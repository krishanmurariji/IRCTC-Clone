import React, { useState } from 'react';
import { Search, Calendar, Users, ArrowRightLeft } from 'lucide-react';
import ImageSlider from './ImageSlider';

const Home: React.FC = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
              Your Journey Begins Here
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-light">
              Book train tickets across India with ease and comfort
            </p>
          </div>

          {/* Search Card */}
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSearch}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {/* From Station */}
                <div className="relative">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    From Station
                  </label>
                  <select
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 bg-gray-50 appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select Station</option>
                    <option value="Mumbai">Mumbai Central</option>
                    <option value="Delhi">New Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Chennai">Chennai Central</option>
                    <option value="Kolkata">Howrah Junction</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Pune">Pune Junction</option>
                  </select>
                </div>

                {/* To Station */}
                <div className="relative">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    To Station
                  </label>
                  <select
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 bg-gray-50 appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select Destination</option>
                    <option value="Mumbai">Mumbai Central</option>
                    <option value="Delhi">New Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Chennai">Chennai Central</option>
                    <option value="Kolkata">Howrah Junction</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Pune">Pune Junction</option>
                  </select>
                </div>

                {/* Date */}
                <div className="relative">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Journey Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 bg-gray-50"
                      required
                    />
                    <Calendar className="absolute right-4 top-4 text-gray-400 pointer-events-none" size={20} />
                  </div>
                </div>

                {/* Passengers */}
                <div className="relative">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Passengers
                  </label>
                  <div className="relative">
                    <select
                      value={passengers}
                      onChange={(e) => setPassengers(Number(e.target.value))}
                      className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 bg-gray-50 appearance-none cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                      ))}
                    </select>
                    <Users className="absolute right-4 top-4 text-gray-400 pointer-events-none" size={20} />
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                <Search size={24} />
                Search Trains
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Experience India by Rail
            </h2>
            <p className="text-lg text-gray-600">
              Discover the beauty of train travel across incredible destinations
            </p>
          </div>
          <ImageSlider />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Search className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Easy Booking</h3>
              <p className="text-gray-600">
                Search and book train tickets in just a few clicks with our intuitive interface
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Calendar className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Real-time Updates</h3>
              <p className="text-gray-600">
                Get instant PNR status, train schedules, and live tracking information
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-pink-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated support team is always ready to assist you with your journey
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
