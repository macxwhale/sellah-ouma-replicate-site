
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
      <section className="bg-theme-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Initiatives</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Building a better future through sustainable and impactful community programs.
          </p>
        </div>
      </section>

      {/* Initiatives Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-4">Empowering Our Community</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Hon. Sellah Ouma's office has initiated various programs aimed at addressing key challenges and creating opportunities for all citizens, with a special focus on women, youth, and marginalized communities.
          </p>
          
          {/* Initiative Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Initiative 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-theme-blue/10 flex items-center justify-center">
                <Users className="h-16 w-16 text-theme-blue" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-theme-blue">Women Empowerment Fund</h3>
                <p className="text-gray-600 mb-4">
                  A financial initiative that provides low-interest loans to women entrepreneurs looking to start or expand their businesses.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full border-theme-blue text-theme-blue hover:bg-theme-blue hover:text-white">
                    <Link to="#women-fund" className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Initiative 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-theme-blue/10 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-theme-blue" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-theme-blue">Education Scholarship Program</h3>
                <p className="text-gray-600 mb-4">
                  Scholarships for talented students from disadvantaged backgrounds to pursue secondary and tertiary education.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full border-theme-blue text-theme-blue hover:bg-theme-blue hover:text-white">
                    <Link to="#education" className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Initiative 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-theme-blue/10 flex items-center justify-center">
                <Heart className="h-16 w-16 text-theme-blue" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-theme-blue">Healthcare Improvement Project</h3>
                <p className="text-gray-600 mb-4">
                  Upgrading local health centers with modern equipment and training for healthcare providers to improve maternal and child health services.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full border-theme-blue text-theme-blue hover:bg-theme-blue hover:text-white">
                    <Link to="#healthcare" className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Initiative 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-theme-blue/10 flex items-center justify-center">
                <Home className="h-16 w-16 text-theme-blue" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-theme-blue">Community Housing Project</h3>
                <p className="text-gray-600 mb-4">
                  Affordable housing initiative aimed at improving living conditions for low-income families through subsidized home ownership programs.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full border-theme-blue text-theme-blue hover:bg-theme-blue hover:text-white">
                    <Link to="#housing" className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Initiative 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-theme-blue/10 flex items-center justify-center">
                <ShoppingBag className="h-16 w-16 text-theme-blue" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-theme-blue">Youth Entrepreneurship Program</h3>
                <p className="text-gray-600 mb-4">
                  Training, mentorship, and seed capital for young entrepreneurs to develop sustainable business ventures.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full border-theme-blue text-theme-blue hover:bg-theme-blue hover:text-white">
                    <Link to="#youth" className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Initiative 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-theme-blue/10 flex items-center justify-center">
                <Leaf className="h-16 w-16 text-theme-blue" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-theme-blue">Environmental Conservation</h3>
                <p className="text-gray-600 mb-4">
                  Community-based reforestation and clean-up initiatives to protect natural resources and promote sustainable environmental practices.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full border-theme-blue text-theme-blue hover:bg-theme-blue hover:text-white">
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
      <section id="volunteer" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-6">Volunteer With Us</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-8">
            Join our team of dedicated volunteers working to make a difference in our community. Your skills, time, and passion can contribute to positive change.
          </p>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4 text-theme-blue">Current Volunteer Opportunities</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="bg-theme-blue text-white rounded-full p-1 mr-2 mt-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <p>Community Outreach Coordinators</p>
              </li>
              <li className="flex items-start">
                <span className="bg-theme-blue text-white rounded-full p-1 mr-2 mt-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <p>Educational Mentors for Youth Programs</p>
              </li>
              <li className="flex items-start">
                <span className="bg-theme-blue text-white rounded-full p-1 mr-2 mt-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <p>Environmental Conservation Assistants</p>
              </li>
              <li className="flex items-start">
                <span className="bg-theme-blue text-white rounded-full p-1 mr-2 mt-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <p>Healthcare Support Volunteers</p>
              </li>
              <li className="flex items-start">
                <span className="bg-theme-blue text-white rounded-full p-1 mr-2 mt-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <p>Event Organization and Management</p>
              </li>
            </ul>
            <div className="text-center">
              <Button asChild className="bg-theme-blue hover:bg-theme-darkBlue">
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
