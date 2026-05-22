import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { restaurantInfo } from '../mock';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-[#FF6B35]">Fusion</span>
              <span className="text-[#FFD166]"> Flavors</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {restaurantInfo.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FF6B35]/20 flex items-center justify-center hover:bg-[#FF6B35] transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FF6B35]/20 flex items-center justify-center hover:bg-[#FF6B35] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FF6B35]/20 flex items-center justify-center hover:bg-[#FF6B35] transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFD166]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="footer-link text-sm">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="footer-link text-sm">Menu</Link>
              </li>
              <li>
                <Link to="/order" className="footer-link text-sm">Order Online</Link>
              </li>
              <li>
                <Link to="/reservations" className="footer-link text-sm">Reservations</Link>
              </li>
              <li>
                <Link to="/gallery" className="footer-link text-sm">Gallery</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link text-sm">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFD166]">Opening Hours</h4>
            <div className="space-y-2 text-sm">
              <div>
                <p className="text-gray-400">Monday - Friday</p>
                <p className="text-white">{restaurantInfo.hours.weekdays}</p>
              </div>
              <div>
                <p className="text-gray-400">Saturday - Sunday</p>
                <p className="text-white">{restaurantInfo.hours.weekends}</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFD166]">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">{restaurantInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FF6B35] flex-shrink-0" />
                <a href={`tel:${restaurantInfo.phone}`} className="footer-link text-sm">
                  {restaurantInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FF6B35] flex-shrink-0" />
                <a href={`mailto:${restaurantInfo.email}`} className="footer-link text-sm">
                  {restaurantInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Fusion Flavors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;