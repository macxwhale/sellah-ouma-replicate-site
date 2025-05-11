
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
      
      {/* Hero Section - Apple style */}
      <section className="pt-32 pb-20 bg-theme-gray">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-theme-text leading-tight mb-6">
              Hon. Sellah Ouma. <br/>
              <span className="text-theme-blue">Leadership that empowers.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-3xl">
              Dedicated to serving the people through inclusive leadership and sustainable development initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-theme-blue hover:bg-theme-lightBlue text-white rounded-full px-8 py-3">
                <Link to="/initiatives">Explore Initiatives</Link>
              </Button>
              <Button asChild variant="outline" className="border-theme-blue text-theme-blue hover:bg-theme-blue/5 rounded-full px-8 py-3">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Representative Image - Full width */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
          alt="Hon. Sellah Ouma" 
          className="w-full h-full object-cover"
        />
      </section>

      {/* Welcome Section - Clean and minimal */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">A message from Hon. Sellah Ouma</h2>
            <p className="text-xl text-gray-500 mb-8 leading-relaxed">
              I am honored to serve as your County Woman Representative. My commitment is to advocate for policies that promote equality, development, and prosperity for all citizens, with a special focus on empowering women and protecting vulnerable communities.
            </p>
            <Link to="/about" className="apple-link">
              Learn more about my vision <ArrowRight className="ml-1 h-4 w-4 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Focus Areas - Grid layout */}
      <section className="py-24 bg-theme-gray">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">Key Focus Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="apple-card p-8 flex flex-col h-full">
              <div className="bg-theme-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-medium text-theme-text mb-3">Women Empowerment</h3>
              <p className="text-gray-500 mb-6 flex-grow">Creating opportunities for women through education, entrepreneurship, and leadership development programs.</p>
              <Link to="/initiatives#women" className="apple-link mt-auto">
                Learn more <ArrowRight className="ml-1 h-4 w-4 inline" />
              </Link>
            </div>
            
            <div className="apple-card p-8 flex flex-col h-full">
              <div className="bg-theme-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-medium text-theme-text mb-3">Education</h3>
              <p className="text-gray-500 mb-6 flex-grow">Improving access to quality education through scholarships, infrastructure development, and teacher training.</p>
              <Link to="/initiatives#education" className="apple-link mt-auto">
                Learn more <ArrowRight className="ml-1 h-4 w-4 inline" />
              </Link>
            </div>
            
            <div className="apple-card p-8 flex flex-col h-full">
              <div className="bg-theme-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-medium text-theme-text mb-3">Economic Development</h3>
              <p className="text-gray-500 mb-6 flex-grow">Supporting local businesses, creating job opportunities, and promoting sustainable economic growth.</p>
              <Link to="/initiatives#economic" className="apple-link mt-auto">
                Learn more <ArrowRight className="ml-1 h-4 w-4 inline" />
              </Link>
            </div>
            
            <div className="apple-card p-8 flex flex-col h-full">
              <div className="bg-theme-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-medium text-theme-text mb-3">Healthcare</h3>
              <p className="text-gray-500 mb-6 flex-grow">Enhancing healthcare services with a focus on maternal care, child welfare, and accessible medical facilities.</p>
              <Link to="/initiatives#healthcare" className="apple-link mt-auto">
                Learn more <ArrowRight className="ml-1 h-4 w-4 inline" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News - Horizontal cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <h2 className="section-title mb-0">Latest News & Updates</h2>
            <Link to="/news" className="apple-link mt-4 md:mt-0">
              View all news <ArrowRight className="ml-1 h-4 w-4 inline" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="apple-card overflow-hidden flex flex-col">
              <img 
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Community Meeting" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-theme-blue text-sm mb-2">May 8, 2025</p>
                <h3 className="text-lg font-medium mb-3 text-theme-text">Community Development Summit</h3>
                <p className="text-gray-500 mb-4 text-sm flex-grow">Hon. Sellah Ouma leads discussions on community-driven development projects and sustainable growth strategies.</p>
                <Link to="/news/1" className="apple-link mt-auto">
                  Read more <ArrowRight className="ml-1 h-4 w-4 inline" />
                </Link>
              </div>
            </div>
            
            {/* News Item 2 */}
            <div className="apple-card overflow-hidden flex flex-col">
              <img 
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Education Initiative" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-theme-blue text-sm mb-2">May 2, 2025</p>
                <h3 className="text-lg font-medium mb-3 text-theme-text">New Scholarship Program Launched</h3>
                <p className="text-gray-500 mb-4 text-sm flex-grow">100 students to benefit from the newly established scholarship program targeting underprivileged but talented youth.</p>
                <Link to="/news/2" className="apple-link mt-auto">
                  Read more <ArrowRight className="ml-1 h-4 w-4 inline" />
                </Link>
              </div>
            </div>
            
            {/* News Item 3 */}
            <div className="apple-card overflow-hidden flex flex-col">
              <img 
                src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Healthcare Initiative" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-theme-blue text-sm mb-2">April 25, 2025</p>
                <h3 className="text-lg font-medium mb-3 text-theme-text">Healthcare Center Upgraded</h3>
                <p className="text-gray-500 mb-4 text-sm flex-grow">The main county healthcare center received new equipment and facilities to improve maternal and child healthcare services.</p>
                <Link to="/news/3" className="apple-link mt-auto">
                  Read more <ArrowRight className="ml-1 h-4 w-4 inline" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Apple style */}
      <section className="py-24 bg-theme-gray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 text-theme-text">Join Me in Building a Better Future</h2>
          <p className="text-xl text-gray-500 mb-10 max-w-3xl mx-auto">
            Together, we can create positive change and work towards a more inclusive, prosperous, and equitable society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-theme-blue hover:bg-theme-lightBlue text-white rounded-full px-8 py-3">
              <Link to="/contact">Contact My Office</Link>
            </Button>
            <Button asChild variant="outline" className="border-theme-blue text-theme-blue hover:bg-theme-blue/5 rounded-full px-8 py-3">
              <Link to="/initiatives#volunteer">Volunteer Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
