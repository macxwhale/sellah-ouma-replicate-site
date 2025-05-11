
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
      <section className="pt-32 pb-16 bg-theme-gray">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-6 text-theme-text">Contact Us</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Get in touch with Hon. Sellah Ouma's office for inquiries, feedback, or assistance.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Contact Information */}
            <div className="md:w-1/3">
              <h2 className="section-subtitle mb-8">Contact Information</h2>
              <div className="apple-card p-8 space-y-8">
                <div>
                  <div className="flex items-start mb-4">
                    <div className="bg-theme-blue/10 p-3 rounded-full flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-theme-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">Phone</h3>
                      <p className="text-gray-500">+254 700 000 000</p>
                      <p className="text-gray-500">+254 720 000 000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <div className="bg-theme-blue/10 p-3 rounded-full flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-theme-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">Email</h3>
                      <p className="text-gray-500">contact@sellahouma.co.ke</p>
                      <p className="text-gray-500">info@sellahouma.co.ke</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-theme-blue/10 p-3 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-theme-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">Office Address</h3>
                      <p className="text-gray-500">County Assembly Building,</p>
                      <p className="text-gray-500">3rd Floor, Room 304</p>
                      <p className="text-gray-500">County HQ, Kenya</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h3 className="font-medium text-lg mb-3">Office Hours</h3>
                  <p className="text-gray-500">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-500">Saturday: 9:00 AM - 12:00 PM</p>
                  <p className="text-gray-500">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:w-2/3 mt-10 md:mt-0">
              <h2 className="section-subtitle mb-8">Send us a Message</h2>
              <div className="apple-card p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-theme-blue focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input 
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-theme-blue focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-theme-blue focus:border-transparent"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-theme-blue focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-theme-blue focus:border-transparent"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button className="w-full bg-theme-blue hover:bg-theme-lightBlue text-white rounded-full py-3">
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
      <section className="py-16 pb-24 bg-theme-gray">
        <div className="container mx-auto px-4">
          <h2 className="section-subtitle text-center mb-10">Find Us</h2>
          <div className="h-96 bg-white rounded-2xl overflow-hidden shadow-sm">
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
