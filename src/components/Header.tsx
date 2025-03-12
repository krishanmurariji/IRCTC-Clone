import React from 'react';
import { Link } from 'react-router-dom';
import { Train } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Train size={24} />
            <span className="text-xl font-bold">IRCTC Clone</span>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
              <li><Link to="/pnr-status" className="hover:text-blue-200">PNR Status</Link></li>
              <li><Link to="/trains" className="hover:text-blue-200">Trains</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;