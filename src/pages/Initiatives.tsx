
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, BookOpen, Heart, Home, ShoppingBag, Leaf, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Initiatives = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(27, 62, 120, 0.85), rgba(27, 62, 120, 0.85)), url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-sm text-theme-orange font-medium tracking-wider uppercase mb-2">Our Work</h2>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Initiatives</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Building a better future through sustainable and impactful community programs.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-4 -mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-theme-orange text-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Community Support</h3>
                  <p className="mb-4">Creating sustainable programs that address local needs and empower communities.</p>
                  <Link to="#community" className="inline-flex items-center text-white hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <Users className="h-12 w-12" />
              </div>
            </div>
            
            <div className="bg-theme-blue text-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Volunteer Programs</h3>
                  <p className="mb-4">Join our dedicated team of volunteers making a real difference in our community.</p>
                  <Link to="#volunteer" className="inline-flex items-center text-white hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <Users className="h-12 w-12" />
              </div>
            </div>
            
            <div className="bg-theme-orange text-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Donate</h3>
                  <p className="mb-4">Support our initiatives with financial contributions to help us expand our impact.</p>
                  <Link to="/contact" className="inline-flex items-center text-white hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <Heart className="h-12 w-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="charifund-title-center">
              <h2 className="text-sm text-theme-orange font-medium tracking-wider uppercase mb-2">How We Serve</h2>
              <h3 className="section-title">Empowering Our Community</h3>
            </div>
            <p className="text-theme-lightText max-w-3xl mx-auto">
              Hon. Sellah Ouma's office has initiated various programs aimed at addressing key challenges and creating opportunities for all citizens, with a special focus on women, youth, and marginalized communities.
            </p>
          </div>
          
          {/* Initiative Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Initiative 1 */}
            <div id="women-fund" className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Women Empowerment Fund" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="mb-2">
                      <span className="bg-theme-orange text-white text-sm py-1 px-3 rounded-full">Featured</span>
                    </div>
                    <div className="flex justify-between text-sm text-white mb-1">
                      <span className="font-medium">Raised: $12,500</span>
                      <span>Goal: $20,000</span>
                    </div>
                    <div className="donation-progress">
                      <div className="donation-progress-bar" style={{width: '62.5%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-theme-blue group-hover:text-theme-orange transition-colors">Women Empowerment Fund</h3>
                <p className="text-theme-lightText mb-6 text-sm">
                  A financial initiative that provides low-interest loans to women entrepreneurs looking to start or expand their businesses.
                </p>
                <Button asChild className="w-full bg-theme-orange hover:bg-theme-darkOrange text-white rounded-full">
                  <Link to="/contact" className="flex items-center justify-center">
                    Donate Now <Heart className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Initiative 2 */}
            <div id="education" className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Education Scholarship Program" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between text-sm text-white mb-1">
                      <span className="font-medium">Raised: $18,000</span>
                      <span>Goal: $25,000</span>
                    </div>
                    <div className="donation-progress">
                      <div className="donation-progress-bar" style={{width: '72%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-theme-blue group-hover:text-theme-orange transition-colors">Education Scholarship Program</h3>
                <p className="text-theme-lightText mb-6 text-sm">
                  Scholarships for talented students from disadvantaged backgrounds to pursue secondary and tertiary education.
                </p>
                <Button asChild className="w-full bg-theme-orange hover:bg-theme-darkOrange text-white rounded-full">
                  <Link to="/contact" className="flex items-center justify-center">
                    Donate Now <Heart className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Initiative 3 */}
            <div id="healthcare" className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Healthcare Improvement Project" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between text-sm text-white mb-1">
                      <span className="font-medium">Raised: $15,800</span>
                      <span>Goal: $30,000</span>
                    </div>
                    <div className="donation-progress">
                      <div className="donation-progress-bar" style={{width: '52.6%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-theme-blue group-hover:text-theme-orange transition-colors">Healthcare Improvement Project</h3>
                <p className="text-theme-lightText mb-6 text-sm">
                  Upgrading local health centers with modern equipment and training for healthcare providers to improve maternal and child health services.
                </p>
                <Button asChild className="w-full bg-theme-orange hover:bg-theme-darkOrange text-white rounded-full">
                  <Link to="/contact" className="flex items-center justify-center">
                    Donate Now <Heart className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Initiative 4 */}
            <div id="housing" className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Community Housing Project" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between text-sm text-white mb-1">
                      <span className="font-medium">Raised: $20,500</span>
                      <span>Goal: $50,000</span>
                    </div>
                    <div className="donation-progress">
                      <div className="donation-progress-bar" style={{width: '41%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-theme-blue group-hover:text-theme-orange transition-colors">Community Housing Project</h3>
                <p className="text-theme-lightText mb-6 text-sm">
                  Affordable housing initiative aimed at improving living conditions for low-income families through subsidized home ownership programs.
                </p>
                <Button asChild className="w-full bg-theme-orange hover:bg-theme-darkOrange text-white rounded-full">
                  <Link to="/contact" className="flex items-center justify-center">
                    Donate Now <Heart className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Initiative 5 */}
            <div id="youth" className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Youth Entrepreneurship Program" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between text-sm text-white mb-1">
                      <span className="font-medium">Raised: $8,200</span>
                      <span>Goal: $15,000</span>
                    </div>
                    <div className="donation-progress">
                      <div className="donation-progress-bar" style={{width: '54.6%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-theme-blue group-hover:text-theme-orange transition-colors">Youth Entrepreneurship Program</h3>
                <p className="text-theme-lightText mb-6 text-sm">
                  Training, mentorship, and seed capital for young entrepreneurs to develop sustainable business ventures.
                </p>
                <Button asChild className="w-full bg-theme-orange hover:bg-theme-darkOrange text-white rounded-full">
                  <Link to="/contact" className="flex items-center justify-center">
                    Donate Now <Heart className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Initiative 6 */}
            <div id="environment" className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Environmental Conservation" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between text-sm text-white mb-1">
                      <span className="font-medium">Raised: $5,800</span>
                      <span>Goal: $12,000</span>
                    </div>
                    <div className="donation-progress">
                      <div className="donation-progress-bar" style={{width: '48.3%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-theme-blue group-hover:text-theme-orange transition-colors">Environmental Conservation</h3>
                <p className="text-theme-lightText mb-6 text-sm">
                  Community-based reforestation and clean-up initiatives to protect natural resources and promote sustainable environmental practices.
                </p>
                <Button asChild className="w-full bg-theme-orange hover:bg-theme-darkOrange text-white rounded-full">
                  <Link to="/contact" className="flex items-center justify-center">
                    Donate Now <Heart className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-cover bg-center text-white" style={{ backgroundImage: 'linear-gradient(rgba(242, 124, 33, 0.9), rgba(242, 124, 33, 0.9)), url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm text-white font-medium tracking-wider uppercase mb-2">Making A Difference</h2>
            <h3 className="text-4xl font-bold mb-6">Our Impact</h3>
            <p className="text-white/90 max-w-3xl mx-auto">
              Together, we've made significant progress in addressing community needs and creating lasting change.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
              <p className="text-xl">Women Empowered</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1,200+</div>
              <p className="text-xl">Scholarships Awarded</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <p className="text-xl">Health Centers Improved</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">300+</div>
              <p className="text-xl">Youth Businesses Funded</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="charifund-title-center">
              <h2 className="text-sm text-theme-orange font-medium tracking-wider uppercase mb-2">Join Us</h2>
              <h3 className="section-title">Volunteer With Us</h3>
            </div>
            <p className="text-theme-lightText max-w-3xl mx-auto">
              Join our team of dedicated volunteers working to make a difference in our community. Your skills, time, and passion can contribute to positive change.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Volunteer" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold mb-6 text-theme-blue">Current Volunteer Opportunities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="mt-1">
                    <CheckCircle className="h-5 w-5 text-theme-orange" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg mb-2 text-theme-blue">Community Outreach</h4>
                    <p className="text-theme-lightText text-sm">Help us connect with community members and spread awareness about our initiatives.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1">
                    <CheckCircle className="h-5 w-5 text-theme-orange" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg mb-2 text-theme-blue">Educational Mentors</h4>
                    <p className="text-theme-lightText text-sm">Provide guidance and support to students in our educational programs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1">
                    <CheckCircle className="h-5 w-5 text-theme-orange" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg mb-2 text-theme-blue">Environmental Projects</h4>
                    <p className="text-theme-lightText text-sm">Participate in reforestation and environmental conservation activities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1">
                    <CheckCircle className="h-5 w-5 text-theme-orange" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg mb-2 text-theme-blue">Healthcare Support</h4>
                    <p className="text-theme-lightText text-sm">Assist in organizing health camps and awareness programs in the community.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-theme-orange hover:bg-theme-darkOrange text-white rounded-full">
                  <Link to="/contact?subject=Volunteer" className="flex items-center">
                    Apply to Volunteer
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Initiatives;
