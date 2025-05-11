
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-theme-blue">Hon. Sellah Ouma</span>
              <span className="text-sm text-theme-gold">County Woman Representative</span>
            </div>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-theme-blue hover:text-theme-lightBlue font-medium">Home</Link>
            <Link to="/about" className="text-theme-blue hover:text-theme-lightBlue font-medium">About</Link>
            <Link to="/initiatives" className="text-theme-blue hover:text-theme-lightBlue font-medium">Initiatives</Link>
            <Link to="/media" className="text-theme-blue hover:text-theme-lightBlue font-medium">Media</Link>
            <Link to="/news" className="text-theme-blue hover:text-theme-lightBlue font-medium">News</Link>
            <Link to="/contact" className="text-theme-blue hover:text-theme-lightBlue font-medium">Contact</Link>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 py-4">
              <Link to="/" className="text-theme-blue hover:text-theme-lightBlue font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-theme-blue hover:text-theme-lightBlue font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/initiatives" className="text-theme-blue hover:text-theme-lightBlue font-medium" onClick={() => setIsMenuOpen(false)}>Initiatives</Link>
              <Link to="/media" className="text-theme-blue hover:text-theme-lightBlue font-medium" onClick={() => setIsMenuOpen(false)}>Media</Link>
              <Link to="/news" className="text-theme-blue hover:text-theme-lightBlue font-medium" onClick={() => setIsMenuOpen(false)}>News</Link>
              <Link to="/contact" className="text-theme-blue hover:text-theme-lightBlue font-medium" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
