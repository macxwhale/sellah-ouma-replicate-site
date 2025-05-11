
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Users, Briefcase, CheckCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-theme-blue to-theme-darkBlue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Empowering Communities, <span className="text-theme-gold">Building Futures</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Dedicated to serving the people of our county through inclusive leadership and sustainable development initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-theme-gold hover:bg-opacity-90 text-white border-0">
                  <Link to="/initiatives">Explore Initiatives</Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-theme-blue">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="aspect-square max-w-md mx-auto rounded-full overflow-hidden border-4 border-theme-gold">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Hon. Sellah Ouma" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Welcome Message</h2>
            <p className="text-lg mb-6">
              I am honored to serve as your County Woman Representative. My commitment is to advocate for policies that promote equality, development, and prosperity for all citizens, with a special focus on empowering women and protecting vulnerable communities.
            </p>
            <p className="text-lg mb-6">
              Together, we will build a more inclusive and progressive society where everyone has access to opportunities and resources needed to thrive.
            </p>
            <div className="mt-8">
              <Button asChild className="bg-theme-blue hover:bg-theme-darkBlue">
                <Link to="/about" className="flex items-center">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Key Focus Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="bg-theme-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-theme-blue" />
              </div>
              <h3 className="text-xl font-bold text-theme-blue mb-2">Women Empowerment</h3>
              <p className="text-gray-600">Creating opportunities for women through education, entrepreneurship, and leadership development programs.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="bg-theme-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Calendar className="h-7 w-7 text-theme-blue" />
              </div>
              <h3 className="text-xl font-bold text-theme-blue mb-2">Education</h3>
              <p className="text-gray-600">Improving access to quality education through scholarships, infrastructure development, and teacher training.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="bg-theme-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Briefcase className="h-7 w-7 text-theme-blue" />
              </div>
              <h3 className="text-xl font-bold text-theme-blue mb-2">Economic Development</h3>
              <p className="text-gray-600">Supporting local businesses, creating job opportunities, and promoting sustainable economic growth.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="bg-theme-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <CheckCircle className="h-7 w-7 text-theme-blue" />
              </div>
              <h3 className="text-xl font-bold text-theme-blue mb-2">Healthcare</h3>
              <p className="text-gray-600">Enhancing healthcare services with a focus on maternal care, child welfare, and accessible medical facilities.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-theme-blue hover:bg-theme-darkBlue">
              <Link to="/initiatives" className="flex items-center">
                View All Initiatives
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-theme-blue to-theme-darkBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Me in Building a Better Future</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Together, we can create positive change and work towards a more inclusive, prosperous, and equitable society. Get involved today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-theme-gold hover:bg-opacity-90 text-white border-0">
              <Link to="/contact">Contact My Office</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-theme-blue">
              <Link to="/initiatives">Volunteer Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
