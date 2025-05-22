
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Users } from 'lucide-react';

const HomeCallToAction = () => {
  return (
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
  );
};

export default HomeCallToAction;
