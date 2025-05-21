
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(3, 88, 140, 0.85), rgba(3, 88, 140, 0.85)), url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-sm text-theme-gold font-medium tracking-wider uppercase mb-2">Reach Out</h2>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get in touch with Hon. Sellah Ouma's office for inquiries, feedback, or assistance.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Information */}
            <div className="md:w-1/3">
              <h2 className="text-sm text-theme-blue font-medium tracking-wider uppercase mb-2">Our Details</h2>
              <h3 className="section-title mb-6">Contact Information</h3>
              <div className="kalon-card p-8 space-y-8 bg-white">
                <div>
                  <div className="flex items-start mb-6">
                    <div className="bg-theme-blue/10 p-3 rounded-full flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-theme-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-theme-blue">Phone</h3>
                      <p className="text-theme-lightText text-sm">+254 700 000 000</p>
                      <p className="text-theme-lightText text-sm">+254 720 000 000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-theme-blue/10 p-3 rounded-full flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-theme-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-theme-blue">Email</h3>
                      <p className="text-theme-lightText text-sm">contact@sellahouma.co.ke</p>
                      <p className="text-theme-lightText text-sm">info@sellahouma.co.ke</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-theme-blue/10 p-3 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-theme-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-theme-blue">Office Address</h3>
                      <p className="text-theme-lightText text-sm">County Assembly Building,</p>
                      <p className="text-theme-lightText text-sm">3rd Floor, Room 304</p>
                      <p className="text-theme-lightText text-sm">County HQ, Kenya</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h3 className="font-medium text-lg mb-3 text-theme-blue">Office Hours</h3>
                  <p className="text-theme-lightText text-sm">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-theme-lightText text-sm">Saturday: 9:00 AM - 12:00 PM</p>
                  <p className="text-theme-lightText text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:w-2/3 mt-10 md:mt-0">
              <h2 className="text-sm text-theme-blue font-medium tracking-wider uppercase mb-2">Get In Touch</h2>
              <h3 className="section-title mb-6">Send us a Message</h3>
              <div className="kalon-card p-8 bg-white">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-theme-text mb-2">Full Name</label>
                      <input 
                        type="text"
                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-theme-blue focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-theme-text mb-2">Email</label>
                      <input 
                        type="email"
                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-theme-blue focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-theme-text mb-2">Phone Number</label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-theme-blue focus:border-transparent"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-theme-text mb-2">Subject</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-theme-blue focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-theme-text mb-2">Message</label>
                    <textarea 
                      rows={6}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-theme-blue focus:border-transparent"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button className="w-full bg-theme-blue hover:bg-theme-lightBlue text-white rounded-md py-3">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 pb-16 bg-theme-gray">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm text-theme-blue font-medium tracking-wider uppercase mb-2">Our Location</h2>
            <h3 className="section-title">Find Us</h3>
            <p className="text-theme-lightText">Visit our office for in-person consultations and assistance.</p>
          </div>
          
          <div className="h-96 bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
            {/* Replace with an actual map implementation if needed */}
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <p className="text-gray-600 text-lg font-medium">Map Location</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
