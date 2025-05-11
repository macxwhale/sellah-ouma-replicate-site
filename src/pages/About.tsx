
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-theme-gray">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-6 text-theme-text">About Hon. Sellah Ouma</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Dedicated public servant, advocate for women's rights, and champion for community development.
          </p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/3">
              <div className="rounded-3xl overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Hon. Sellah Ouma" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="section-title">Personal Biography</h2>
              <p className="mb-4 text-lg text-gray-500 leading-relaxed">
                Hon. Sellah Ouma is a dedicated public servant currently serving as the Woman Representative for the county. With over 15 years of experience in public service and community development, she has established herself as a transformative leader focused on creating positive change.
              </p>
              <p className="mb-4 text-lg text-gray-500 leading-relaxed">
                Born and raised in the county, Hon. Ouma understands the challenges faced by local communities. Her passion for service was ignited during her early career as a community development officer, where she witnessed firsthand the impact of effective leadership and targeted interventions.
              </p>
              <p className="mb-4 text-lg text-gray-500 leading-relaxed">
                She holds a Master's degree in Public Administration and a Bachelor's degree in Social Sciences. Her academic background, combined with her practical experience, has equipped her with the knowledge and skills needed to develop and implement policies that address the needs of diverse communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-24 bg-theme-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="apple-card p-12">
              <h2 className="text-2xl font-medium text-theme-text mb-6">Vision</h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                A prosperous, equitable, and inclusive county where all residents have access to opportunities, resources, and services that enable them to reach their full potential.
              </p>
            </div>
            <div className="apple-card p-12">
              <h2 className="text-2xl font-medium text-theme-text mb-6">Mission</h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                To advocate for policies and implement programs that promote sustainable development, gender equality, social justice, and economic empowerment for all citizens, with a special focus on women, youth, and marginalized communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="apple-card p-8 flex flex-col items-center text-center">
              <div className="bg-theme-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-medium text-theme-text mb-4">Integrity</h3>
              <p className="text-gray-500">Upholding the highest standards of honesty, transparency, and accountability in all actions and decisions.</p>
            </div>
            
            <div className="apple-card p-8 flex flex-col items-center text-center">
              <div className="bg-theme-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-medium text-theme-text mb-4">Inclusivity</h3>
              <p className="text-gray-500">Ensuring that all voices are heard and all communities are represented in decision-making processes.</p>
            </div>
            
            <div className="apple-card p-8 flex flex-col items-center text-center">
              <div className="bg-theme-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-medium text-theme-text mb-4">Innovation</h3>
              <p className="text-gray-500">Embracing creative solutions and new approaches to address complex social and economic challenges.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education and Career - Apple-style list */}
      <section className="py-24 bg-theme-gray">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">Education & Professional Background</h2>
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h3 className="section-subtitle mb-8">Education</h3>
              <ul className="space-y-4">
                <li className="apple-card p-6 transition-all hover:shadow-md">
                  <p className="font-medium text-lg mb-1">Master's in Public Administration</p>
                  <p className="text-gray-500">University of Nairobi, 2012</p>
                </li>
                <li className="apple-card p-6 transition-all hover:shadow-md">
                  <p className="font-medium text-lg mb-1">Bachelor of Arts in Social Sciences</p>
                  <p className="text-gray-500">Kenyatta University, 2007</p>
                </li>
                <li className="apple-card p-6 transition-all hover:shadow-md">
                  <p className="font-medium text-lg mb-1">Certificate in Gender Studies and Development</p>
                  <p className="text-gray-500">African Institute for Development Studies, 2009</p>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="section-subtitle mb-8">Professional Experience</h3>
              <ul className="space-y-4">
                <li className="apple-card p-6 transition-all hover:shadow-md">
                  <p className="font-medium text-lg mb-1">County Woman Representative</p>
                  <p className="text-gray-500">2022 - Present</p>
                </li>
                <li className="apple-card p-6 transition-all hover:shadow-md">
                  <p className="font-medium text-lg mb-1">Director, Community Development NGO</p>
                  <p className="text-gray-500">2015 - 2022</p>
                </li>
                <li className="apple-card p-6 transition-all hover:shadow-md">
                  <p className="font-medium text-lg mb-1">Program Officer, International Development Agency</p>
                  <p className="text-gray-500">2010 - 2015</p>
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
