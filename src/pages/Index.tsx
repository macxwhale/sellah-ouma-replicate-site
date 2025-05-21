
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
      
      {/* Hero Section - Kalon style */}
      <section className="relative h-[90vh] bg-cover bg-center flex items-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Empowering <span className="text-theme-gold">Communities</span><br/>
              Through Service
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl">
              Dedicated to serving the people through inclusive leadership and sustainable development initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-theme-gold text-theme-darkBlue hover:brightness-95 text-base rounded-md px-8 py-3">
                <Link to="/initiatives">Our Initiatives</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/20 text-base rounded-md px-8 py-3">
                <Link to="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Hon. Sellah Ouma" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-sm text-theme-blue font-medium tracking-wider uppercase mb-2">Welcome Message</h2>
              <h3 className="section-title mb-6">A message from Hon. Sellah Ouma</h3>
              <p className="text-base text-theme-lightText mb-6 leading-relaxed">
                I am honored to serve as your County Woman Representative. My commitment is to advocate for policies that promote equality, development, and prosperity for all citizens, with a special focus on empowering women and protecting vulnerable communities.
              </p>
              <p className="text-base text-theme-lightText mb-6 leading-relaxed">
                Together, we can build a better future for our county. I believe in the power of community-driven development and participatory governance. My office is always open to hear your ideas, concerns, and feedback.
              </p>
              <Link to="/about" className="kalon-link text-base">
                Learn more about my vision <ArrowRight className="ml-1 h-4 w-4 inline" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16 bg-theme-gray">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm text-theme-blue font-medium tracking-wider uppercase mb-2">Our Priorities</h2>
            <h3 className="section-title">Key Focus Areas</h3>
            <p className="text-theme-lightText">Strategic initiatives aimed at creating sustainable positive change in our community.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="kalon-card p-6 flex flex-col h-full bg-white">
              <div className="bg-theme-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-theme-blue" />
              </div>
              <h3 className="text-xl font-medium text-theme-blue mb-3">Women Empowerment</h3>
              <p className="text-theme-lightText mb-6 flex-grow text-sm">Creating opportunities for women through education, entrepreneurship, and leadership development programs.</p>
              <Link to="/initiatives#women" className="kalon-link text-sm mt-auto">
                Learn more <ArrowRight className="ml-1 h-4 w-4 inline" />
              </Link>
            </div>
            
            <div className="kalon-card p-6 flex flex-col h-full bg-white">
              <div className="bg-theme-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-theme-blue" />
              </div>
              <h3 className="text-xl font-medium text-theme-blue mb-3">Education</h3>
              <p className="text-theme-lightText mb-6 flex-grow text-sm">Improving access to quality education through scholarships, infrastructure development, and teacher training.</p>
              <Link to="/initiatives#education" className="kalon-link text-sm mt-auto">
                Learn more <ArrowRight className="ml-1 h-4 w-4 inline" />
              </Link>
            </div>
            
            <div className="kalon-card p-6 flex flex-col h-full bg-white">
              <div className="bg-theme-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-theme-blue" />
              </div>
              <h3 className="text-xl font-medium text-theme-blue mb-3">Economic Development</h3>
              <p className="text-theme-lightText mb-6 flex-grow text-sm">Supporting local businesses, creating job opportunities, and promoting sustainable economic growth.</p>
              <Link to="/initiatives#economic" className="kalon-link text-sm mt-auto">
                Learn more <ArrowRight className="ml-1 h-4 w-4 inline" />
              </Link>
            </div>
            
            <div className="kalon-card p-6 flex flex-col h-full bg-white">
              <div className="bg-theme-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-theme-blue" />
              </div>
              <h3 className="text-xl font-medium text-theme-blue mb-3">Healthcare</h3>
              <p className="text-theme-lightText mb-6 flex-grow text-sm">Enhancing healthcare services with a focus on maternal care, child welfare, and accessible medical facilities.</p>
              <Link to="/initiatives#healthcare" className="kalon-link text-sm mt-auto">
                Learn more <ArrowRight className="ml-1 h-4 w-4 inline" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News - Kalon style */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm text-theme-blue font-medium tracking-wider uppercase mb-2">Stay Informed</h2>
            <h3 className="section-title">Latest News & Updates</h3>
            <p className="text-theme-lightText">Keep up with the latest initiatives, events, and progress from Hon. Sellah Ouma's office.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="kalon-card overflow-hidden flex flex-col">
              <img 
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Community Meeting" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-theme-blue text-xs mb-2 font-medium">May 8, 2025</p>
                <h3 className="text-lg font-medium mb-3 text-theme-blue">Community Development Summit</h3>
                <p className="text-theme-lightText mb-4 text-sm flex-grow">Hon. Sellah Ouma leads discussions on community-driven development projects and sustainable growth strategies.</p>
                <Link to="/news/1" className="kalon-link text-sm mt-auto">
                  Read more <ArrowRight className="ml-1 h-4 w-4 inline" />
                </Link>
              </div>
            </div>
            
            {/* News Item 2 */}
            <div className="kalon-card overflow-hidden flex flex-col">
              <img 
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Education Initiative" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-theme-blue text-xs mb-2 font-medium">May 2, 2025</p>
                <h3 className="text-lg font-medium mb-3 text-theme-blue">New Scholarship Program Launched</h3>
                <p className="text-theme-lightText mb-4 text-sm flex-grow">100 students to benefit from the newly established scholarship program targeting underprivileged but talented youth.</p>
                <Link to="/news/2" className="kalon-link text-sm mt-auto">
                  Read more <ArrowRight className="ml-1 h-4 w-4 inline" />
                </Link>
              </div>
            </div>
            
            {/* News Item 3 */}
            <div className="kalon-card overflow-hidden flex flex-col">
              <img 
                src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Healthcare Initiative" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-theme-blue text-xs mb-2 font-medium">April 25, 2025</p>
                <h3 className="text-lg font-medium mb-3 text-theme-blue">Healthcare Center Upgraded</h3>
                <p className="text-theme-lightText mb-4 text-sm flex-grow">The main county healthcare center received new equipment and facilities to improve maternal and child healthcare services.</p>
                <Link to="/news/3" className="kalon-link text-sm mt-auto">
                  Read more <ArrowRight className="ml-1 h-4 w-4 inline" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild className="bg-theme-blue hover:bg-theme-lightBlue text-white rounded-md px-8">
              <Link to="/news">View All News</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action - Kalon style */}
      <section className="py-20 bg-cover bg-center text-white" style={{ backgroundImage: 'linear-gradient(rgba(3, 88, 140, 0.85), rgba(3, 88, 140, 0.85)), url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-sm text-theme-gold font-medium tracking-wider uppercase mb-2">Join Our Cause</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Building a Better Future Together</h3>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Together, we can create positive change and work towards a more inclusive, prosperous, and equitable society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-theme-gold text-theme-darkBlue hover:brightness-95 text-base rounded-md px-8 py-3">
              <Link to="/contact">Contact My Office</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/20 text-base rounded-md px-8 py-3">
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
