
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-theme-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hon. Sellah Ouma</h3>
            <p className="mb-4">County Woman Representative</p>
            <p className="mb-4">Dedicated to serving the community and advocating for women's rights and development.</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6 hover:text-theme-gold transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6 hover:text-theme-gold transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 hover:text-theme-gold transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-theme-gold transition-colors">Home</Link>
              <Link to="/about" className="hover:text-theme-gold transition-colors">About</Link>
              <Link to="/initiatives" className="hover:text-theme-gold transition-colors">Initiatives</Link>
              <Link to="/media" className="hover:text-theme-gold transition-colors">Media Gallery</Link>
              <Link to="/news" className="hover:text-theme-gold transition-colors">News & Updates</Link>
              <Link to="/contact" className="hover:text-theme-gold transition-colors">Contact Us</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-theme-gold" />
                <span>+254 700 000 000</span>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-theme-gold" />
                <span>contact@sellahouma.co.ke</span>
              </p>
              <p className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-theme-gold mt-1" />
                <span>County Assembly Building, County HQ, Kenya</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Office of the County Woman Representative. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
