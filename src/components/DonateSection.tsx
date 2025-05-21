
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface DonateSectionProps {
  className?: string;
}

const DonateSection = ({ className = "" }: DonateSectionProps) => {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl bg-primary py-16 px-8 md:p-16 text-center">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/20"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/20"></div>
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center bg-white/10 rounded-full py-2 px-4 mb-6">
              <Heart className="w-4 h-4 text-secondary mr-2" />
              <span className="text-sm font-medium text-primary-foreground">Make a Difference Today</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Your Support Can Change Lives
            </h2>
            
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join us in making a difference in the lives of those who need it most. 
              Your donation, no matter how small, contributes to creating meaningful impact in our communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="font-medium">
                <Link to="/contact">Donate Now</Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
                <Link to="/initiatives">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
