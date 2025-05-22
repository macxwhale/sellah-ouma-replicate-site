
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Calendar, Users, Heart, ArrowRight, Phone, Mail, Home } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center flex items-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6 animate-fade-in">
              Empowering <span className="text-secondary">Communities</span><br/>
              Through Service
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl animate-fade-in">
              Dedicated to serving the people through inclusive leadership and sustainable development initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base rounded-full px-8 py-6">
                <Link to="/initiatives" className="flex items-center">
                  Our Initiatives
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="white-outline" className="text-white rounded-full px-8 py-6">
                <Link to="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background relative z-10">
        <div className="container mx-auto px-4 -mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature cards */}
            {[
              { title: "Women Empowerment", description: "Providing opportunities and resources for women to thrive in all sectors.", link: "/initiatives#women", icon: <Users className="h-12 w-12" /> },
              { title: "Education Access", description: "Ensuring quality education is accessible to everyone in our community.", link: "/initiatives#education", icon: <Calendar className="h-12 w-12" /> },
              { title: "Healthcare", description: "Improving access to quality healthcare services for all community members.", link: "/initiatives#healthcare", icon: <Heart className="h-12 w-12" /> }
            ].map((feature, index) => (
              <div key={index} className={`bg-${index % 2 === 0 ? 'secondary' : 'primary'} text-white p-8 rounded-lg shadow-lg`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="mb-4">{feature.description}</p>
                    <Link to={feature.link} className="inline-flex items-center text-white hover:underline">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                  {feature.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-cover bg-center text-white" style={{ backgroundImage: 'linear-gradient(rgba(27, 62, 120, 0.85), rgba(27, 62, 120, 0.85)), url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-secondary text-sm font-medium tracking-wider uppercase mb-2">Join Our Cause</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Building a Better Future Together</h3>
            <p className="text-xl text-gray-200 mb-10">
              Together, we can create positive change and work towards a more inclusive, prosperous, and equitable society.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 py-6 text-base">
                <Link to="/contact" className="flex items-center">
                  Contact My Office <Phone className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="white-outline" className="rounded-full px-8 py-6 text-base">
                <Link to="/initiatives#volunteer" className="flex items-center">
                  Volunteer Opportunities <Users className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact info bar */}
      <section className="bg-secondary py-10 text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Phone className="h-10 w-10 mr-4" />, title: "Call Us", content: "+254 700 000 000" },
              { icon: <Mail className="h-10 w-10 mr-4" />, title: "Email Us", content: "contact@sellahouma.co.ke" },
              { icon: <Home className="h-10 w-10 mr-4" />, title: "Visit Us", content: "County Assembly Building, Kenya" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start">
                {item.icon}
                <div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
