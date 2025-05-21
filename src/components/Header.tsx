
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Heart } from 'lucide-react';
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
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-theme-blue text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+254 700 000 000</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>contact@sellahouma.co.ke</span>
            </div>
          </div>
          <div>
            <Button asChild variant="ghost" size="sm" className="text-white hover:text-theme-orange p-0">
              <Link to="/contact" className="flex items-center">
                <Heart className="h-4 w-4 mr-1" />
                <span>Donate Now</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div 
        className={`w-full transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-theme-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-heading text-xl font-bold">SO</span>
                </div>
                <div className="flex flex-col ml-3">
                  <span className="text-xl font-heading font-bold text-theme-blue">Hon. Sellah Ouma</span>
                  <span className="text-xs text-theme-lightText">County Woman Representative</span>
                </div>
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
            <nav className="hidden md:flex items-center space-x-6">
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
                      ? 'text-theme-orange' 
                      : 'text-theme-text hover:text-theme-orange'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-theme-orange hover:bg-theme-darkOrange text-white rounded-full">
                <Link to="/contact">DONATE</Link>
              </Button>
            </nav>
          </div>
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
                      ? 'text-theme-orange' 
                      : 'text-theme-text hover:text-theme-orange'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-theme-orange hover:bg-theme-darkOrange text-white w-full rounded-full">
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
