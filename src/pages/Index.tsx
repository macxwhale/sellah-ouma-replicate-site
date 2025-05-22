
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Users, Briefcase, Heart, CheckCircle, Home, Phone, Mail } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Charifund style */}
      <section className="relative h-[80vh] bg-cover bg-center flex items-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6 animate-fade-in">
              Empowering <span className="text-theme-orange">Communities</span><br/>
              Through Service
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl animate-fade-in">
              Dedicated to serving the people through inclusive leadership and sustainable development initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button asChild className="bg-theme-orange text-white hover:bg-theme-darkOrange text-base rounded-full px-8 py-6">
                <Link to="/initiatives" className="flex items-center">
                  Our Initiatives
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/20 text-base rounded-full px-8 py-6">
                <Link to="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-4 -mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-theme-orange text-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Women Empowerment</h3>
                  <p className="mb-4">Providing opportunities and resources for women to thrive in all sectors.</p>
                  <Link to="/initiatives#women" className="inline-flex items-center text-white hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <Users className="h-12 w-12" />
              </div>
            </div>
            
            <div className="bg-theme-blue text-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Education Access</h3>
                  <p className="mb-4">Ensuring quality education is accessible to everyone in our community.</p>
                  <Link to="/initiatives#education" className="inline-flex items-center text-white hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <Calendar className="h-12 w-12" />
              </div>
            </div>
            
            <div className="bg-theme-orange text-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Healthcare</h3>
                  <p className="mb-4">Improving access to quality healthcare services for all community members.</p>
                  <Link to="/initiatives#healthcare" className="inline-flex items-center text-white hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <Heart className="h-12 w-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-theme-gray">
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
              <div className="charifund-title">
                <h2 className="text-sm text-theme-orange font-medium tracking-wider uppercase mb-2">Welcome Message</h2>
                <h3 className="section-title">A message from Hon. Sellah Ouma</h3>
              </div>
              <p className="text-base text-theme-lightText mb-6 leading-relaxed">
                I am honored to serve as your County Woman Representative. My commitment is to advocate for policies that promote equality, development, and prosperity for all citizens, with a special focus on empowering women and protecting vulnerable communities.
              </p>
              <p className="text-base text-theme-lightText mb-6 leading-relaxed">
                Together, we can build a better future for our county. I believe in the power of community-driven development and participatory governance. My office is always open to hear your ideas, concerns, and feedback.
              </p>
              <Link to="/about" className="charifund-link text-base group">
                Learn more about my vision <ArrowRight className="ml-1 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="border-l-4 border-theme-orange pl-4">
                  <h4 className="text-4xl font-bold text-theme-blue mb-1">150+</h4>
                  <p className="text-sm text-theme-lightText">Projects Completed</p>
                </div>
                <div className="border-l-4 border-theme-orange pl-4">
                  <h4 className="text-4xl font-bold text-theme-blue mb-1">50K+</h4>
                  <p className="text-sm text-theme-lightText">People Impacted</p>
                </div>
                <div className="border-l-4 border-theme-orange pl-4">
                  <h4 className="text-4xl font-bold text-theme-blue mb-1">25+</h4>
                  <p className="text-sm text-theme-lightText">Ongoing Initiatives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="charifund-title-center">
              <h2 className="text-sm text-theme-orange font-medium tracking-wider uppercase mb-2">Our Priorities</h2>
              <h3 className="section-title">Key Focus Areas</h3>
            </div>
            <p className="text-theme-lightText max-w-3xl mx-auto">Strategic initiatives aimed at creating sustainable positive change in our community.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cause 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-transform hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Women Empowerment" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-theme-blue">Women Empowerment</h3>
                <p className="text-theme-lightText mb-4 text-sm">
                  Creating opportunities for women through education, entrepreneurship, and leadership development programs.
                </p>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Raised: $12,500</span>
                    <span className="text-theme-orange">Goal: $20,000</span>
                  </div>
                  <div className="donation-progress">
                    <div className="donation-progress-bar" style={{width: '62.5%'}}></div>
                  </div>
                </div>
                
                <Button asChild className="w-full bg-theme-orange hover:bg-theme-darkOrange text-white rounded-full">
                  <Link to="/initiatives#women" className="flex items-center justify-center">
                    Donate Now <Heart className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Cause 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-transform hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Education" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-theme-blue">Education</h3>
                <p className="text-theme-lightText mb-4 text-sm">
                  Improving access to quality education through scholarships, infrastructure development, and teacher training.
                </p>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Raised: $18,000</span>
                    <span className="text-theme-orange">Goal: $25,000</span>
                  </div>
                  <div className="donation-progress">
                    <div className="donation-progress-bar" style={{width: '72%'}}></div>
                  </div>
                </div>
                
                <Button asChild className="w-full bg-theme-orange hover:bg-theme-darkOrange text-white rounded-full">
                  <Link to="/initiatives#education" className="flex items-center justify-center">
                    Donate Now <Heart className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Cause 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-transform hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Healthcare" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-theme-blue">Healthcare</h3>
                <p className="text-theme-lightText mb-4 text-sm">
                  Enhancing healthcare services with a focus on maternal care, child welfare, and accessible medical facilities.
                </p>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Raised: $15,800</span>
                    <span className="text-theme-orange">Goal: $30,000</span>
                  </div>
                  <div className="donation-progress">
                    <div className="donation-progress-bar" style={{width: '52.6%'}}></div>
                  </div>
                </div>
                
                <Button asChild className="w-full bg-theme-orange hover:bg-theme-darkOrange text-white rounded-full">
                  <Link to="/initiatives#healthcare" className="flex items-center justify-center">
                    Donate Now <Heart className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-theme-blue hover:bg-theme-darkBlue text-white rounded-full px-8">
              <Link to="/initiatives">View All Causes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News - Charifund style */}
      <section className="py-16 bg-theme-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="charifund-title-center">
              <h2 className="text-sm text-theme-orange font-medium tracking-wider uppercase mb-2">Stay Informed</h2>
              <h3 className="section-title">Latest News & Updates</h3>
            </div>
            <p className="text-theme-lightText max-w-3xl mx-auto">Keep up with the latest initiatives, events, and progress from Hon. Sellah Ouma's office.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Community Meeting" 
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-theme-orange text-white text-sm py-1 px-3 rounded-full">
                  May 8, 2025
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3 text-theme-blue group-hover:text-theme-orange transition-colors">Community Development Summit</h3>
                <p className="text-theme-lightText mb-4 text-sm">Hon. Sellah Ouma leads discussions on community-driven development projects and sustainable growth strategies.</p>
                <Link to="/news/1" className="charifund-link text-sm flex items-center">
                  Read more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* News Item 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Education Initiative" 
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-theme-orange text-white text-sm py-1 px-3 rounded-full">
                  May 2, 2025
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3 text-theme-blue group-hover:text-theme-orange transition-colors">New Scholarship Program Launched</h3>
                <p className="text-theme-lightText mb-4 text-sm">100 students to benefit from the newly established scholarship program targeting underprivileged but talented youth.</p>
                <Link to="/news/2" className="charifund-link text-sm flex items-center">
                  Read more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* News Item 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Healthcare Initiative" 
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-theme-orange text-white text-sm py-1 px-3 rounded-full">
                  April 25, 2025
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3 text-theme-blue group-hover:text-theme-orange transition-colors">Healthcare Center Upgraded</h3>
                <p className="text-theme-lightText mb-4 text-sm">The main county healthcare center received new equipment and facilities to improve maternal and child healthcare services.</p>
                <Link to="/news/3" className="charifund-link text-sm flex items-center">
                  Read more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-theme-blue hover:bg-theme-darkBlue text-white rounded-full px-8">
              <Link to="/news">View All News</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-cover bg-center text-white" style={{ backgroundImage: 'linear-gradient(rgba(27, 62, 120, 0.85), rgba(27, 62, 120, 0.85)), url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-sm text-theme-orange font-medium tracking-wider uppercase mb-2">Join Our Cause</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Building a Better Future Together</h3>
            <p className="text-xl text-gray-200 mb-10">
              Together, we can create positive change and work towards a more inclusive, prosperous, and equitable society.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-theme-orange hover:bg-theme-darkOrange text-white rounded-full px-8 py-6 text-base">
                <Link to="/contact" className="flex items-center">
                  Contact My Office <Phone className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/20 rounded-full px-8 py-6 text-base">
                <Link to="/initiatives#volunteer" className="flex items-center">
                  Volunteer Opportunities <Users className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact info bar */}
      <section className="bg-theme-orange py-10 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center md:justify-start">
              <Phone className="h-10 w-10 mr-4" />
              <div>
                <h4 className="font-bold text-lg">Call Us</h4>
                <p>+254 700 000 000</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-10 w-10 mr-4" />
              <div>
                <h4 className="font-bold text-lg">Email Us</h4>
                <p>contact@sellahouma.co.ke</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <Home className="h-10 w-10 mr-4" />
              <div>
                <h4 className="font-bold text-lg">Visit Us</h4>
                <p>County Assembly Building, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
