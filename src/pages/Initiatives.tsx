
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, BookOpen, Heart, Home, ShoppingBag, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Initiatives = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(3, 88, 140, 0.85), rgba(3, 88, 140, 0.85)), url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-sm text-theme-gold font-medium tracking-wider uppercase mb-2">Our Work</h2>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Initiatives</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Building a better future through sustainable and impactful community programs.
          </p>
        </div>
      </section>

      {/* Initiatives Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm text-theme-blue font-medium tracking-wider uppercase mb-2">How We Serve</h2>
            <h3 className="section-title">Empowering Our Community</h3>
            <p className="text-theme-lightText">
              Hon. Sellah Ouma's office has initiated various programs aimed at addressing key challenges and creating opportunities for all citizens, with a special focus on women, youth, and marginalized communities.
            </p>
          </div>
          
          {/* Initiative Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Initiative 1 */}
            <div className="kalon-card overflow-hidden bg-white">
              <div className="h-48 bg-theme-blue/10 flex items-center justify-center">
                <Users className="h-16 w-16 text-theme-blue" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3 text-theme-blue">Women Empowerment Fund</h3>
                <p className="text-theme-lightText mb-6 text-sm">
                  A financial initiative that provides low-interest loans to women entrepreneurs looking to start or expand their businesses.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full border-theme-blue text-theme-blue hover:bg-theme-blue hover:text-white rounded-md">
                    <Link to="#women-fund" className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Initiative 2 */}
            <div className="kalon-card overflow-hidden bg-white">
              <div className="h-48 bg-theme-blue/10 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-theme-blue" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3 text-theme-blue">Education Scholarship Program</h3>
                <p className="text-theme-lightText mb-6 text-sm">
                  Scholarships for talented students from disadvantaged backgrounds to pursue secondary and tertiary education.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full border-theme-blue text-theme-blue hover:bg-theme-blue hover:text-white rounded-md">
                    <Link to="#education" className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Initiative 3 */}
            <div className="kalon-card overflow-hidden bg-white">
              <div className="h-48 bg-theme-blue/10 flex items-center justify-center">
                <Heart className="h-16 w-16 text-theme-blue" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3 text-theme-blue">Healthcare Improvement Project</h3>
                <p className="text-theme-lightText mb-6 text-sm">
                  Upgrading local health centers with modern equipment and training for healthcare providers to improve maternal and child health services.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full border-theme-blue text-theme-blue hover:bg-theme-blue hover:text-white rounded-md">
                    <Link to="#healthcare" className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Initiative 4 */}
            <div className="kalon-card overflow-hidden bg-white">
              <div className="h-48 bg-theme-blue/10 flex items-center justify-center">
                <Home className="h-16 w-16 text-theme-blue" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3 text-theme-blue">Community Housing Project</h3>
                <p className="text-theme-lightText mb-6 text-sm">
                  Affordable housing initiative aimed at improving living conditions for low-income families through subsidized home ownership programs.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full border-theme-blue text-theme-blue hover:bg-theme-blue hover:text-white rounded-md">
                    <Link to="#housing" className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Initiative 5 */}
            <div className="kalon-card overflow-hidden bg-white">
              <div className="h-48 bg-theme-blue/10 flex items-center justify-center">
                <ShoppingBag className="h-16 w-16 text-theme-blue" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3 text-theme-blue">Youth Entrepreneurship Program</h3>
                <p className="text-theme-lightText mb-6 text-sm">
                  Training, mentorship, and seed capital for young entrepreneurs to develop sustainable business ventures.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full border-theme-blue text-theme-blue hover:bg-theme-blue hover:text-white rounded-md">
                    <Link to="#youth" className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Initiative 6 */}
            <div className="kalon-card overflow-hidden bg-white">
              <div className="h-48 bg-theme-blue/10 flex items-center justify-center">
                <Leaf className="h-16 w-16 text-theme-blue" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3 text-theme-blue">Environmental Conservation</h3>
                <p className="text-theme-lightText mb-6 text-sm">
                  Community-based reforestation and clean-up initiatives to protect natural resources and promote sustainable environmental practices.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full border-theme-blue text-theme-blue hover:bg-theme-blue hover:text-white rounded-md">
                    <Link to="#environment" className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-16 bg-theme-gray">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm text-theme-blue font-medium tracking-wider uppercase mb-2">Join Us</h2>
            <h3 className="section-title">Volunteer With Us</h3>
            <p className="text-theme-lightText">
              Join our team of dedicated volunteers working to make a difference in our community. Your skills, time, and passion can contribute to positive change.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto kalon-card p-8 bg-white">
            <h3 className="text-xl font-medium mb-6 text-theme-blue">Current Volunteer Opportunities</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="bg-theme-blue text-white rounded-full p-1 mr-2 mt-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <p className="text-theme-lightText text-sm">Community Outreach Coordinators</p>
              </li>
              <li className="flex items-start">
                <span className="bg-theme-blue text-white rounded-full p-1 mr-2 mt-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <p className="text-theme-lightText text-sm">Educational Mentors for Youth Programs</p>
              </li>
              <li className="flex items-start">
                <span className="bg-theme-blue text-white rounded-full p-1 mr-2 mt-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <p className="text-theme-lightText text-sm">Environmental Conservation Assistants</p>
              </li>
              <li className="flex items-start">
                <span className="bg-theme-blue text-white rounded-full p-1 mr-2 mt-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <p className="text-theme-lightText text-sm">Healthcare Support Volunteers</p>
              </li>
              <li className="flex items-start">
                <span className="bg-theme-blue text-white rounded-full p-1 mr-2 mt-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <p className="text-theme-lightText text-sm">Event Organization and Management</p>
              </li>
            </ul>
            <div className="text-center mt-8">
              <Button asChild className="bg-theme-blue hover:bg-theme-lightBlue text-white rounded-md">
                <Link to="/contact?subject=Volunteer">Apply to Volunteer</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Initiatives;
