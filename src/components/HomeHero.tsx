
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HomeHero = () => {
  return (
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
  );
};

export default HomeHero;
