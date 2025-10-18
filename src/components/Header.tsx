import React from 'react';
import { Link } from 'react-router-dom';
import { Train } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Train size={28} className="text-white" />
            <span className="text-2xl font-bold">Trabook</span>
          </Link>
          <nav>
            <ul className="flex space-x-8 text-base">
              <li><Link to="/" className="hover:text-gray-200 transition-colors">Home</Link></li>
              <li><Link to="/bookings" className="hover:text-gray-200 transition-colors">Bookings</Link></li>
              <li><Link to="/terminals" className="hover:text-gray-200 transition-colors">Terminals</Link></li>
            </ul>
          </nav>
          <Link 
            to="/book-train" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
          >
            Book a Train
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
