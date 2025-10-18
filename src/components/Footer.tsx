import React from 'react';
import { Train, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg">
                <Train size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Masum Mitra</h3>
                <p className="text-sm text-gray-400">Rail Booking System</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for seamless train ticket booking across India. Experience comfort, convenience, and reliability.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-indigo-600 p-3 rounded-full transition-all transform hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-400 p-3 rounded-full transition-all transform hover:scale-110"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-pink-600 p-3 rounded-full transition-all transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-700 p-3 rounded-full transition-all transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-red-600 p-3 rounded-full transition-all transform hover:scale-110"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  → Home
                </Link>
              </li>
              <li>
                <Link to="/trains" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  → All Trains
                </Link>
              </li>
              <li>
                <Link to="/pnr-status" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  → PNR Status
                </Link>
              </li>
              <li>
                <Link to="/bookings" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  → My Bookings
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  → About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                → Train Ticket Booking
              </li>
              <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                → PNR Enquiry
              </li>
              <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                → Live Train Status
              </li>
              <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                → Seat Availability
              </li>
              <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                → Cancellation & Refund
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-indigo-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Railway Station Road,<br />
                  New Delhi - 110001, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-indigo-400 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-gray-400 hover:text-white transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-indigo-400 flex-shrink-0" />
                <a href="mailto:info@masummitra.com" className="text-gray-400 hover:text-white transition-colors">
                  info@masummitra.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Subscribe to Newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 focus:outline-none focus:border-indigo-500 text-white placeholder-gray-400"
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-r-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Masum Mitra Rail Booking System. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/refund" className="text-gray-400 hover:text-white transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
