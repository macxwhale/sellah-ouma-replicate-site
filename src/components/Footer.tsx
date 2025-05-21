
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer>
      {/* Newsletter section */}
      <div className="bg-accent text-accent-foreground py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold text-foreground mb-3">Subscribe to Our Newsletter</h3>
              <p className="text-muted-foreground">Stay updated with our latest news and initiatives. We respect your privacy and will never share your information.</p>
            </div>
            <div className="w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-lg flex-1"
                />
                <Button className="rounded-lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white font-heading text-xl font-bold">SO</span>
                </div>
                <div className="flex flex-col ml-3">
                  <span className="text-lg font-heading font-bold text-white">Hon. Sellah Ouma</span>
                  <span className="text-xs text-primary-foreground/70">County Woman Representative</span>
                </div>
              </div>
              <p className="text-sm mb-6 text-primary-foreground/80">Dedicated to serving the community and advocating for progress and development across all sectors.</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-lg transition-colors">
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-lg transition-colors">
                  <Twitter className="h-5 w-5 text-white" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-lg transition-colors">
                  <Instagram className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                Quick Links
                <span className="block w-1/2 h-0.5 bg-secondary mt-2"></span>
              </h3>
              <nav className="flex flex-col space-y-3">
                {['Home', 'About', 'Initiatives', 'News & Updates', 'Contact Us'].map((item, index) => (
                  <Link 
                    key={index} 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' & updates', '').replace(' us', '')}`} 
                    className="text-primary-foreground/80 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 text-secondary" />
                    <span>{item}</span>
                  </Link>
                ))}
              </nav>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                Key Initiatives
                <span className="block w-1/2 h-0.5 bg-secondary mt-2"></span>
              </h3>
              <nav className="flex flex-col space-y-3">
                {[
                  {name: 'Women Empowerment', link: '/initiatives#women'},
                  {name: 'Education', link: '/initiatives#education'},
                  {name: 'Healthcare', link: '/initiatives#healthcare'},
                  {name: 'Economic Development', link: '/initiatives#economic'},
                  {name: 'Environmental Conservation', link: '/initiatives#environment'}
                ].map((item, index) => (
                  <Link 
                    key={index} 
                    to={item.link} 
                    className="text-primary-foreground/80 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 text-secondary" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                Contact Information
                <span className="block w-1/2 h-0.5 bg-secondary mt-2"></span>
              </h3>
              <div className="space-y-4">
                <p className="flex items-center text-sm text-primary-foreground/80 group hover:text-white transition-colors">
                  <Phone className="h-4 w-4 mr-3 text-secondary group-hover:text-white transition-colors" />
                  <span>+254 700 000 000</span>
                </p>
                <p className="flex items-center text-sm text-primary-foreground/80 group hover:text-white transition-colors">
                  <Mail className="h-4 w-4 mr-3 text-secondary group-hover:text-white transition-colors" />
                  <span>contact@sellahouma.co.ke</span>
                </p>
                <p className="flex items-start text-sm text-primary-foreground/80 group hover:text-white transition-colors">
                  <MapPin className="h-4 w-4 mr-3 text-secondary group-hover:text-white transition-colors mt-1" />
                  <span>County Assembly Building, County HQ, Kenya</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
      <div className="bg-primary-foreground/10 backdrop-blur-md py-4 text-center text-primary-foreground/80 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs">&copy; {new Date().getFullYear()} Office of the County Woman Representative. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-3 md:mt-0">
              <Link to="/privacy" className="text-xs hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-xs hover:text-white transition-colors">Terms of Use</Link>
              <Link to="/accessibility" className="text-xs hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
