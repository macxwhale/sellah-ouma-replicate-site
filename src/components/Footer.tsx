
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer>
      {/* Newsletter section */}
      <div className="bg-theme-orange py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-white/90">Stay updated with our latest news and events</p>
            </div>
            <div className="w-full md:w-1/3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-l-full py-3 px-4 w-full focus:outline-none"
                />
                <Button className="rounded-r-full bg-theme-blue hover:bg-theme-darkBlue">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-theme-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-theme-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-heading text-xl font-bold">SO</span>
                </div>
                <div className="flex flex-col ml-3">
                  <span className="text-xl font-heading font-bold text-white">Hon. Sellah Ouma</span>
                  <span className="text-xs text-gray-300">County Woman Representative</span>
                </div>
              </div>
              <p className="text-sm mb-6 text-gray-300">Dedicated to serving the community and advocating for progress and development.</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="bg-white/10 hover:bg-theme-orange p-2 rounded-full transition-colors">
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="bg-white/10 hover:bg-theme-orange p-2 rounded-full transition-colors">
                  <Twitter className="h-5 w-5 text-white" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="bg-white/10 hover:bg-theme-orange p-2 rounded-full transition-colors">
                  <Instagram className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                Quick Links
                <span className="block w-1/2 h-1 bg-theme-orange mt-2"></span>
              </h3>
              <nav className="flex flex-col space-y-3">
                {['Home', 'About', 'Initiatives', 'News & Updates', 'Contact Us'].map((item, index) => (
                  <Link 
                    key={index} 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' & updates', '').replace(' us', '')}`} 
                    className="text-gray-300 hover:text-theme-orange transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 text-theme-orange" />
                    <span>{item}</span>
                  </Link>
                ))}
              </nav>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                Key Initiatives
                <span className="block w-1/2 h-1 bg-theme-orange mt-2"></span>
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
                    className="text-gray-300 hover:text-theme-orange transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 text-theme-orange" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                Contact Information
                <span className="block w-1/2 h-1 bg-theme-orange mt-2"></span>
              </h3>
              <div className="space-y-4">
                <p className="flex items-center text-sm text-gray-300">
                  <Phone className="h-4 w-4 mr-3 text-theme-orange" />
                  <span>+254 700 000 000</span>
                </p>
                <p className="flex items-center text-sm text-gray-300">
                  <Mail className="h-4 w-4 mr-3 text-theme-orange" />
                  <span>contact@sellahouma.co.ke</span>
                </p>
                <p className="flex items-start text-sm text-gray-300">
                  <MapPin className="h-4 w-4 mr-3 text-theme-orange mt-1" />
                  <span>County Assembly Building, County HQ, Kenya</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
      <div className="bg-theme-darkBlue py-4 text-center text-white/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs">&copy; {new Date().getFullYear()} Office of the County Woman Representative. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link to="/privacy" className="text-xs hover:text-theme-orange transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-xs hover:text-theme-orange transition-colors">Terms of Use</Link>
              <Link to="/accessibility" className="text-xs hover:text-theme-orange transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
