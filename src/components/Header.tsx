import React from 'react';
import { Link } from 'react-router-dom';
import { Train, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-white p-2 rounded-lg shadow-md group-hover:shadow-xl transition-all">
              <Train size={32} className="text-indigo-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Masum Mitra</h1>
              <p className="text-xs text-white/80">Rail Booking System</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-yellow-300 font-medium transition-colors">
              Home
            </Link>
            <Link to="/pnr-status" className="text-white hover:text-yellow-300 font-medium transition-colors">
              PNR Status
            </Link>
            <Link to="/trains" className="text-white hover:text-yellow-300 font-medium transition-colors">
              All Trains
            </Link>
            <Link to="/bookings" className="text-white hover:text-yellow-300 font-medium transition-colors">
              My Bookings
            </Link>
          </nav>

          {/* Book Now Button */}
          <Link 
            to="/book" 
            className="hidden md:block bg-yellow-400 hover:bg-yellow-500 text-indigo-900 px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link to="/" className="block text-white hover:text-yellow-300 font-medium py-2">
              Home
            </Link>
            <Link to="/pnr-status" className="block text-white hover:text-yellow-300 font-medium py-2">
              PNR Status
            </Link>
            <Link to="/trains" className="block text-white hover:text-yellow-300 font-medium py-2">
              All Trains
            </Link>
            <Link to="/bookings" className="block text-white hover:text-yellow-300 font-medium py-2">
              My Bookings
            </Link>
            <Link to="/book" className="block bg-yellow-400 text-indigo-900 px-6 py-2.5 rounded-full font-bold text-center">
              Book Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
