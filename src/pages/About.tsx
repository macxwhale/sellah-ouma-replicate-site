
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(3, 88, 140, 0.85), rgba(3, 88, 140, 0.85)), url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-sm text-theme-gold font-medium tracking-wider uppercase mb-2">About Us</h2>
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
              <div className="rounded-lg overflow-hidden shadow-md border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Hon. Sellah Ouma" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-sm text-theme-blue font-medium tracking-wider uppercase mb-2">Personal Biography</h2>
              <h3 className="section-title mb-6">Leadership Journey</h3>
              <p className="mb-4 text-base text-theme-lightText leading-relaxed">
                Hon. Sellah Ouma is a dedicated public servant currently serving as the Woman Representative for the county. With over 15 years of experience in public service and community development, she has established herself as a transformative leader focused on creating positive change.
              </p>
              <p className="mb-4 text-base text-theme-lightText leading-relaxed">
                Born and raised in the county, Hon. Ouma understands the challenges faced by local communities. Her passion for service was ignited during her early career as a community development officer, where she witnessed firsthand the impact of effective leadership and targeted interventions.
              </p>
              <p className="mb-4 text-base text-theme-lightText leading-relaxed">
                She holds a Master's degree in Public Administration and a Bachelor's degree in Social Sciences. Her academic background, combined with her practical experience, has equipped her with the knowledge and skills needed to develop and implement policies that address the needs of diverse communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 bg-theme-gray">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm text-theme-blue font-medium tracking-wider uppercase mb-2">Our Purpose</h2>
            <h3 className="section-title">Vision and Mission</h3>
            <p className="text-theme-lightText">Guiding principles that drive our commitment to service and community development.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="kalon-card p-8 bg-white">
              <h2 className="text-2xl font-heading font-bold text-theme-blue mb-4">Vision</h2>
              <p className="text-base text-theme-lightText leading-relaxed">
                A prosperous, equitable, and inclusive county where all residents have access to opportunities, resources, and services that enable them to reach their full potential.
              </p>
            </div>
            <div className="kalon-card p-8 bg-white">
              <h2 className="text-2xl font-heading font-bold text-theme-blue mb-4">Mission</h2>
              <p className="text-base text-theme-lightText leading-relaxed">
                To advocate for policies and implement programs that promote sustainable development, gender equality, social justice, and economic empowerment for all citizens, with a special focus on women, youth, and marginalized communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm text-theme-blue font-medium tracking-wider uppercase mb-2">What We Stand For</h2>
            <h3 className="section-title">Core Values</h3>
            <p className="text-theme-lightText">The principles that guide our actions and decisions in service to the community.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="kalon-card p-8 flex flex-col items-center text-center bg-white">
              <div className="bg-theme-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-theme-blue" />
              </div>
              <h3 className="text-xl font-medium text-theme-blue mb-4">Integrity</h3>
              <p className="text-theme-lightText text-sm">Upholding the highest standards of honesty, transparency, and accountability in all actions and decisions.</p>
            </div>
            
            <div className="kalon-card p-8 flex flex-col items-center text-center bg-white">
              <div className="bg-theme-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-theme-blue" />
              </div>
              <h3 className="text-xl font-medium text-theme-blue mb-4">Inclusivity</h3>
              <p className="text-theme-lightText text-sm">Ensuring that all voices are heard and all communities are represented in decision-making processes.</p>
            </div>
            
            <div className="kalon-card p-8 flex flex-col items-center text-center bg-white">
              <div className="bg-theme-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-theme-blue" />
              </div>
              <h3 className="text-xl font-medium text-theme-blue mb-4">Innovation</h3>
              <p className="text-theme-lightText text-sm">Embracing creative solutions and new approaches to address complex social and economic challenges.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education and Career - Kalon-style list */}
      <section className="py-16 bg-theme-gray">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm text-theme-blue font-medium tracking-wider uppercase mb-2">Professional Background</h2>
            <h3 className="section-title">Education & Experience</h3>
            <p className="text-theme-lightText">Academic and professional qualifications that have shaped leadership journey.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl font-heading font-bold text-theme-blue mb-6">Education</h3>
              <ul className="space-y-4">
                <li className="kalon-card p-6 transition-all hover:shadow-lg bg-white">
                  <p className="font-medium text-lg mb-1 text-theme-blue">Master's in Public Administration</p>
                  <p className="text-theme-lightText text-sm">University of Nairobi, 2012</p>
                </li>
                <li className="kalon-card p-6 transition-all hover:shadow-lg bg-white">
                  <p className="font-medium text-lg mb-1 text-theme-blue">Bachelor of Arts in Social Sciences</p>
                  <p className="text-theme-lightText text-sm">Kenyatta University, 2007</p>
                </li>
                <li className="kalon-card p-6 transition-all hover:shadow-lg bg-white">
                  <p className="font-medium text-lg mb-1 text-theme-blue">Certificate in Gender Studies and Development</p>
                  <p className="text-theme-lightText text-sm">African Institute for Development Studies, 2009</p>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-heading font-bold text-theme-blue mb-6">Professional Experience</h3>
              <ul className="space-y-4">
                <li className="kalon-card p-6 transition-all hover:shadow-lg bg-white">
                  <p className="font-medium text-lg mb-1 text-theme-blue">County Woman Representative</p>
                  <p className="text-theme-lightText text-sm">2022 - Present</p>
                </li>
                <li className="kalon-card p-6 transition-all hover:shadow-lg bg-white">
                  <p className="font-medium text-lg mb-1 text-theme-blue">Director, Community Development NGO</p>
                  <p className="text-theme-lightText text-sm">2015 - 2022</p>
                </li>
                <li className="kalon-card p-6 transition-all hover:shadow-lg bg-white">
                  <p className="font-medium text-lg mb-1 text-theme-blue">Program Officer, International Development Agency</p>
                  <p className="text-theme-lightText text-sm">2010 - 2015</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
