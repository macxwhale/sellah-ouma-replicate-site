
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Users, Award, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(27, 62, 120, 0.85), rgba(27, 62, 120, 0.85)), url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-sm text-theme-orange font-medium tracking-wider uppercase mb-2">About Us</h2>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">About Hon. Sellah Ouma</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Dedicated public servant, advocate for women's rights, and champion for community development.
          </p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-lg relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Hon. Sellah Ouma" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-theme-orange py-4 px-6 text-center">
                  <h3 className="text-2xl font-bold text-white">Hon. Sellah Ouma</h3>
                  <p className="text-white/90">County Woman Representative</p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="charifund-title">
                <h2 className="text-sm text-theme-orange font-medium tracking-wider uppercase mb-2">Personal Biography</h2>
                <h3 className="section-title">Leadership Journey</h3>
              </div>
              <p className="mb-4 text-base text-theme-lightText leading-relaxed">
                Hon. Sellah Ouma is a dedicated public servant currently serving as the Woman Representative for the county. With over 15 years of experience in public service and community development, she has established herself as a transformative leader focused on creating positive change.
              </p>
              <p className="mb-4 text-base text-theme-lightText leading-relaxed">
                Born and raised in the county, Hon. Ouma understands the challenges faced by local communities. Her passion for service was ignited during her early career as a community development officer, where she witnessed firsthand the impact of effective leadership and targeted interventions.
              </p>
              <p className="mb-8 text-base text-theme-lightText leading-relaxed">
                She holds a Master's degree in Public Administration and a Bachelor's degree in Social Sciences. Her academic background, combined with her practical experience, has equipped her with the knowledge and skills needed to develop and implement policies that address the needs of diverse communities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-theme-orange/20 p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-theme-orange" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-theme-blue mb-2">Community-Driven Leadership</h4>
                    <p className="text-theme-lightText text-sm">Creating policies and programs based on community needs and feedback.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-theme-orange/20 p-3 rounded-full mr-4">
                    <Award className="h-6 w-6 text-theme-orange" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-theme-blue mb-2">Award-Winning Advocate</h4>
                    <p className="text-theme-lightText text-sm">Recognized for outstanding contributions to women's empowerment and development.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className="py-16 bg-cover bg-center text-white" style={{ backgroundImage: 'linear-gradient(rgba(242, 124, 33, 0.9), rgba(242, 124, 33, 0.9)), url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <p className="text-xl">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <p className="text-xl">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <p className="text-xl">People Impacted</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <p className="text-xl">Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="charifund-title-center">
              <h2 className="text-sm text-theme-orange font-medium tracking-wider uppercase mb-2">Our Purpose</h2>
              <h3 className="section-title">Vision and Mission</h3>
            </div>
            <p className="text-theme-lightText max-w-3xl mx-auto">Guiding principles that drive our commitment to service and community development.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 relative">
              <div className="absolute top-0 right-0 bg-theme-orange text-white w-16 h-16 flex items-center justify-center -mt-8 -mr-8 rounded-full shadow-lg">
                <Star className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-theme-blue mb-6">Vision</h2>
              <p className="text-base text-theme-lightText leading-relaxed">
                A prosperous, equitable, and inclusive county where all residents have access to opportunities, resources, and services that enable them to reach their full potential.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 relative">
              <div className="absolute top-0 right-0 bg-theme-blue text-white w-16 h-16 flex items-center justify-center -mt-8 -mr-8 rounded-full shadow-lg">
                <Star className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-theme-blue mb-6">Mission</h2>
              <p className="text-base text-theme-lightText leading-relaxed">
                To advocate for policies and implement programs that promote sustainable development, gender equality, social justice, and economic empowerment for all citizens, with a special focus on women, youth, and marginalized communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-theme-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="charifund-title-center">
              <h2 className="text-sm text-theme-orange font-medium tracking-wider uppercase mb-2">What We Stand For</h2>
              <h3 className="section-title">Core Values</h3>
            </div>
            <p className="text-theme-lightText max-w-3xl mx-auto">The principles that guide our actions and decisions in service to the community.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-theme-orange rounded-full p-4 inline-flex items-center justify-center mb-6 text-white">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-theme-blue">Integrity</h3>
              <p className="text-theme-lightText text-sm">Upholding the highest standards of honesty, transparency, and accountability in all actions and decisions.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-theme-orange rounded-full p-4 inline-flex items-center justify-center mb-6 text-white">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-theme-blue">Inclusivity</h3>
              <p className="text-theme-lightText text-sm">Ensuring that all voices are heard and all communities are represented in decision-making processes.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-theme-orange rounded-full p-4 inline-flex items-center justify-center mb-6 text-white">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-theme-blue">Innovation</h3>
              <p className="text-theme-lightText text-sm">Embracing creative solutions and new approaches to address complex social and economic challenges.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education and Career */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="charifund-title-center">
              <h2 className="text-sm text-theme-orange font-medium tracking-wider uppercase mb-2">Professional Background</h2>
              <h3 className="section-title">Education & Experience</h3>
            </div>
            <p className="text-theme-lightText max-w-3xl mx-auto">Academic and professional qualifications that have shaped leadership journey.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-theme-blue mb-6">Education</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-theme-orange">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <p className="font-bold text-lg mb-1 text-theme-blue">Master's in Public Administration</p>
                      <p className="text-theme-lightText text-sm">University of Nairobi</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-theme-orange/20 text-theme-darkOrange py-1 px-3 rounded-full text-xs font-medium">2012</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-theme-orange">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <p className="font-bold text-lg mb-1 text-theme-blue">Bachelor of Arts in Social Sciences</p>
                      <p className="text-theme-lightText text-sm">Kenyatta University</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-theme-orange/20 text-theme-darkOrange py-1 px-3 rounded-full text-xs font-medium">2007</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-theme-orange">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <p className="font-bold text-lg mb-1 text-theme-blue">Certificate in Gender Studies and Development</p>
                      <p className="text-theme-lightText text-sm">African Institute for Development Studies</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-theme-orange/20 text-theme-darkOrange py-1 px-3 rounded-full text-xs font-medium">2009</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-theme-blue mb-6">Professional Experience</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-theme-blue">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <p className="font-bold text-lg mb-1 text-theme-blue">County Woman Representative</p>
                      <p className="text-theme-lightText text-sm">County Government</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-theme-blue/20 text-theme-blue py-1 px-3 rounded-full text-xs font-medium">2022 - Present</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-theme-blue">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <p className="font-bold text-lg mb-1 text-theme-blue">Director, Community Development NGO</p>
                      <p className="text-theme-lightText text-sm">Community Development NGO</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-theme-blue/20 text-theme-blue py-1 px-3 rounded-full text-xs font-medium">2015 - 2022</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-theme-blue">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <p className="font-bold text-lg mb-1 text-theme-blue">Program Officer, International Development Agency</p>
                      <p className="text-theme-lightText text-sm">International Development Agency</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-theme-blue/20 text-theme-blue py-1 px-3 rounded-full text-xs font-medium">2010 - 2015</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
