
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
      <div className="bg-primary/95 text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
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
              <Button asChild variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10 p-0">
                <Link to="/contact" className="flex items-center">
                  <Heart className="h-4 w-4 mr-1" />
                  <span>Donate Now</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div 
        className={`w-full backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'bg-background/95 shadow-sm border-b border-border/30 py-3' : 'bg-background py-4'
        } sticky top-0 z-50`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-heading text-xl font-bold">SO</span>
                </div>
                <div className="flex flex-col ml-3">
                  <span className="text-lg font-heading font-bold text-foreground">Hon. Sellah Ouma</span>
                  <span className="text-xs text-muted-foreground">County Woman Representative</span>
                </div>
              </div>
            </Link>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About' },
                { path: '/initiatives', label: 'Initiatives' },
                { path: '/news', label: 'News' },
                { path: '/contact', label: 'Contact' }
              ].map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`text-sm font-medium transition-colors relative ${
                    location.pathname === item.path 
                      ? 'text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' 
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild size="sm" className="rounded-lg">
                <Link to="/contact">Donate</Link>
              </Button>
            </nav>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-background rounded-b-xl shadow-lg p-6 animate-slide-up">
            <nav className="flex flex-col space-y-5 py-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About' },
                { path: '/initiatives', label: 'Initiatives' },
                { path: '/news', label: 'News' },
                { path: '/contact', label: 'Contact' }
              ].map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`text-base font-medium transition-colors ${
                    location.pathname === item.path 
                      ? 'text-primary' 
                      : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="w-full rounded-lg mt-2">
                <Link to="/contact">Donate</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
