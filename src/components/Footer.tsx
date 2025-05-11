
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-theme-gray text-theme-text border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-4">Hon. Sellah Ouma</h3>
            <p className="text-xs mb-4 text-gray-500">County Woman Representative</p>
            <p className="text-xs mb-4 text-gray-500">Dedicated to serving the community and advocating for progress and development.</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-theme-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-gray-500 hover:text-theme-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-theme-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-xs text-gray-500 hover:text-theme-blue transition-colors">Home</Link>
              <Link to="/about" className="text-xs text-gray-500 hover:text-theme-blue transition-colors">About</Link>
              <Link to="/initiatives" className="text-xs text-gray-500 hover:text-theme-blue transition-colors">Initiatives</Link>
              <Link to="/media" className="text-xs text-gray-500 hover:text-theme-blue transition-colors">Media Gallery</Link>
              <Link to="/news" className="text-xs text-gray-500 hover:text-theme-blue transition-colors">News & Updates</Link>
              <Link to="/contact" className="text-xs text-gray-500 hover:text-theme-blue transition-colors">Contact Us</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Key Initiatives</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/initiatives#women" className="text-xs text-gray-500 hover:text-theme-blue transition-colors">Women Empowerment</Link>
              <Link to="/initiatives#education" className="text-xs text-gray-500 hover:text-theme-blue transition-colors">Education</Link>
              <Link to="/initiatives#healthcare" className="text-xs text-gray-500 hover:text-theme-blue transition-colors">Healthcare</Link>
              <Link to="/initiatives#economic" className="text-xs text-gray-500 hover:text-theme-blue transition-colors">Economic Development</Link>
              <Link to="/initiatives#environment" className="text-xs text-gray-500 hover:text-theme-blue transition-colors">Environmental Conservation</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <p className="flex items-center text-xs text-gray-500">
                <Phone className="h-4 w-4 mr-2 text-gray-400" />
                <span>+254 700 000 000</span>
              </p>
              <p className="flex items-center text-xs text-gray-500">
                <Mail className="h-4 w-4 mr-2 text-gray-400" />
                <span>contact@sellahouma.co.ke</span>
              </p>
              <p className="flex items-start text-xs text-gray-500">
                <MapPin className="h-4 w-4 mr-2 text-gray-400 mt-0.5" />
                <span>County Assembly Building, County HQ, Kenya</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Office of the County Woman Representative. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-xs text-gray-500 hover:text-theme-blue transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-xs text-gray-500 hover:text-theme-blue transition-colors">Terms of Use</Link>
              <Link to="/accessibility" className="text-xs text-gray-500 hover:text-theme-blue transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
