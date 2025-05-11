
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
      <section className="bg-theme-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Get in touch with Hon. Sellah Ouma's office for inquiries, feedback, or assistance.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Information */}
            <div className="md:w-1/3">
              <h2 className="section-subtitle">Contact Information</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-theme-blue mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">Phone</h3>
                      <p>+254 700 000 000</p>
                      <p>+254 720 000 000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-theme-blue mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <p>contact@sellahouma.co.ke</p>
                      <p>info@sellahouma.co.ke</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-theme-blue mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">Office Address</h3>
                      <p>County Assembly Building,</p>
                      <p>3rd Floor, Room 304</p>
                      <p>County HQ, Kenya</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-bold text-lg mb-2">Office Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 12:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:w-2/3">
              <h2 className="section-subtitle">Send us a Message</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-theme-blue focus:border-theme-blue"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-theme-blue focus:border-theme-blue"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-theme-blue focus:border-theme-blue"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-theme-blue focus:border-theme-blue"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-theme-blue focus:border-theme-blue"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button className="w-full bg-theme-blue hover:bg-theme-darkBlue">
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
      <section className="py-8 pb-16">
        <div className="container mx-auto px-4">
          <h2 className="section-subtitle text-center mb-8">Find Us</h2>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with an actual map implementation if needed */}
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
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
