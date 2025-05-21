
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(27, 62, 120, 0.85), rgba(27, 62, 120, 0.85)), url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-sm text-theme-orange font-medium tracking-wider uppercase mb-2">Reach Out</h2>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get in touch with Hon. Sellah Ouma's office for inquiries, feedback, or assistance.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="bg-theme-orange rounded-full p-4 inline-flex items-center justify-center mb-6 text-white">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-theme-blue">Call Us</h3>
              <p className="text-theme-lightText mb-3">We're available on business days</p>
              <p className="text-theme-blue font-bold">+254 700 000 000</p>
              <p className="text-theme-blue font-bold">+254 720 000 000</p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="bg-theme-orange rounded-full p-4 inline-flex items-center justify-center mb-6 text-white">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-theme-blue">Email Us</h3>
              <p className="text-theme-lightText mb-3">We'll respond as soon as possible</p>
              <p className="text-theme-blue font-bold">contact@sellahouma.co.ke</p>
              <p className="text-theme-blue font-bold">info@sellahouma.co.ke</p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="bg-theme-orange rounded-full p-4 inline-flex items-center justify-center mb-6 text-white">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-theme-blue">Visit Us</h3>
              <p className="text-theme-lightText mb-3">Our doors are always open</p>
              <p className="text-theme-blue font-bold">County Assembly Building</p>
              <p className="text-theme-blue font-bold">County HQ, Kenya</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-theme-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-8">
              <div className="charifund-title mb-6">
                <h2 className="text-sm text-theme-orange font-medium tracking-wider uppercase mb-2">Get In Touch</h2>
                <h3 className="text-3xl font-bold text-theme-blue">Send us a Message</h3>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-theme-text mb-2">Full Name*</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-theme-orange focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-theme-text mb-2">Email*</label>
                    <input 
                      type="email"
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-theme-orange focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-theme-text mb-2">Phone Number</label>
                  <input 
                    type="tel"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-theme-orange focus:border-transparent"
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-theme-text mb-2">Subject*</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-theme-orange focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-theme-text mb-2">Message*</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-theme-orange focus:border-transparent"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                
                <div>
                  <Button className="w-full bg-theme-orange hover:bg-theme-darkOrange text-white rounded-full flex items-center justify-center">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Office Hours and Map */}
            <div>
              {/* Office Hours */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md p-8 mb-8">
                <div className="charifund-title mb-6">
                  <h2 className="text-sm text-theme-orange font-medium tracking-wider uppercase mb-2">Our Schedule</h2>
                  <h3 className="text-3xl font-bold text-theme-blue">Office Hours</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-theme-orange" />
                      <span className="font-medium">Monday - Friday</span>
                    </div>
                    <span className="text-theme-lightText">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-theme-orange" />
                      <span className="font-medium">Saturday</span>
                    </div>
                    <span className="text-theme-lightText">9:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between pb-3">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-theme-orange" />
                      <span className="font-medium">Sunday</span>
                    </div>
                    <span className="text-theme-lightText">Closed</span>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="h-80 bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                {/* Replace with an actual map implementation if needed */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <p className="text-gray-600 text-lg font-medium">Map Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
