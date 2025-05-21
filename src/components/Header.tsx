
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-theme-blue rounded-full flex items-center justify-center">
              <span className="text-white font-heading text-xl font-bold">SO</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-theme-blue">Hon. Sellah Ouma</span>
              <span className="text-xs text-theme-lightText">County Woman Representative</span>
            </div>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-theme-blue"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { path: '/', label: 'HOME' },
              { path: '/about', label: 'ABOUT' },
              { path: '/initiatives', label: 'INITIATIVES' },
              { path: '/news', label: 'NEWS' },
              { path: '/contact', label: 'CONTACT' }
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path 
                    ? 'text-theme-blue border-b-2 border-theme-gold pb-1' 
                    : 'text-theme-text hover:text-theme-blue'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-theme-blue hover:bg-theme-lightBlue text-white rounded-md">
              <Link to="/contact">DONATE</Link>
            </Button>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 py-2">
              {[
                { path: '/', label: 'HOME' },
                { path: '/about', label: 'ABOUT' },
                { path: '/initiatives', label: 'INITIATIVES' },
                { path: '/news', label: 'NEWS' },
                { path: '/contact', label: 'CONTACT' }
              ].map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.path 
                      ? 'text-theme-blue' 
                      : 'text-theme-text hover:text-theme-blue'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-theme-blue hover:bg-theme-lightBlue text-white w-full rounded-md">
                <Link to="/contact">DONATE</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
