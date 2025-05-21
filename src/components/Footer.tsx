
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-theme-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Hon. Sellah Ouma</h3>
            <p className="text-sm mb-4 text-gray-300">County Woman Representative</p>
            <p className="text-sm mb-4 text-gray-300">Dedicated to serving the community and advocating for progress and development.</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-white hover:text-theme-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-white hover:text-theme-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-white hover:text-theme-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-gray-300 hover:text-theme-gold transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-gray-300 hover:text-theme-gold transition-colors">About</Link>
              <Link to="/initiatives" className="text-sm text-gray-300 hover:text-theme-gold transition-colors">Initiatives</Link>
              <Link to="/news" className="text-sm text-gray-300 hover:text-theme-gold transition-colors">News & Updates</Link>
              <Link to="/contact" className="text-sm text-gray-300 hover:text-theme-gold transition-colors">Contact Us</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Key Initiatives</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/initiatives#women" className="text-sm text-gray-300 hover:text-theme-gold transition-colors">Women Empowerment</Link>
              <Link to="/initiatives#education" className="text-sm text-gray-300 hover:text-theme-gold transition-colors">Education</Link>
              <Link to="/initiatives#healthcare" className="text-sm text-gray-300 hover:text-theme-gold transition-colors">Healthcare</Link>
              <Link to="/initiatives#economic" className="text-sm text-gray-300 hover:text-theme-gold transition-colors">Economic Development</Link>
              <Link to="/initiatives#environment" className="text-sm text-gray-300 hover:text-theme-gold transition-colors">Environmental Conservation</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <p className="flex items-center text-sm text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-theme-gold" />
                <span>+254 700 000 000</span>
              </p>
              <p className="flex items-center text-sm text-gray-300">
                <Mail className="h-4 w-4 mr-2 text-theme-gold" />
                <span>contact@sellahouma.co.ke</span>
              </p>
              <p className="flex items-start text-sm text-gray-300">
                <MapPin className="h-4 w-4 mr-2 text-theme-gold mt-0.5" />
                <span>County Assembly Building, County HQ, Kenya</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-300">&copy; {new Date().getFullYear()} Office of the County Woman Representative. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-xs text-gray-300 hover:text-theme-gold transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-xs text-gray-300 hover:text-theme-gold transition-colors">Terms of Use</Link>
              <Link to="/accessibility" className="text-xs text-gray-300 hover:text-theme-gold transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
