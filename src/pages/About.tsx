
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-theme-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Hon. Sellah Ouma</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Dedicated public servant, advocate for women's rights, and champion for community development.
          </p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Hon. Sellah Ouma" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="section-title">Personal Biography</h2>
              <p className="mb-4 text-lg">
                Hon. Sellah Ouma is a dedicated public servant currently serving as the Woman Representative for the county. With over 15 years of experience in public service and community development, she has established herself as a transformative leader focused on creating positive change.
              </p>
              <p className="mb-4 text-lg">
                Born and raised in the county, Hon. Ouma understands the challenges faced by local communities. Her passion for service was ignited during her early career as a community development officer, where she witnessed firsthand the impact of effective leadership and targeted interventions.
              </p>
              <p className="mb-4 text-lg">
                She holds a Master's degree in Public Administration and a Bachelor's degree in Social Sciences. Her academic background, combined with her practical experience, has equipped her with the knowledge and skills needed to develop and implement policies that address the needs of diverse communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-theme-blue mb-4">Vision</h2>
              <p className="text-lg">
                A prosperous, equitable, and inclusive county where all residents have access to opportunities, resources, and services that enable them to reach their full potential.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-theme-blue mb-4">Mission</h2>
              <p className="text-lg">
                To advocate for policies and implement programs that promote sustainable development, gender equality, social justice, and economic empowerment for all citizens, with a special focus on women, youth, and marginalized communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-theme-blue/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-bold text-theme-blue mb-3">Integrity</h3>
              <p>Upholding the highest standards of honesty, transparency, and accountability in all actions and decisions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-theme-blue/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-bold text-theme-blue mb-3">Inclusivity</h3>
              <p>Ensuring that all voices are heard and all communities are represented in decision-making processes.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-theme-blue/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-theme-blue" />
              </div>
              <h3 className="text-xl font-bold text-theme-blue mb-3">Innovation</h3>
              <p>Embracing creative solutions and new approaches to address complex social and economic challenges.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
