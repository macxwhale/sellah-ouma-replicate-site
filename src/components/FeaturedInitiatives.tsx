
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InitiativeCard from './InitiativeCard';

// Sample initiative data
const initiatives = [
  {
    id: 1,
    title: "Women Empowerment",
    description: "Supporting women through education, entrepreneurship, and leadership development.",
    image: "https://images.unsplash.com/photo-1607748851687-ba9a10438621",
    progress: 65,
    raised: "KES 650,000",
    goal: "KES 1,000,000",
    slug: "women-empowerment"
  },
  {
    id: 2,
    title: "Education for All",
    description: "Enhancing access to quality education through scholarships and infrastructure.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    progress: 80,
    raised: "KES 800,000",
    goal: "KES 1,000,000",
    slug: "education-for-all"
  },
  {
    id: 3,
    title: "Healthcare Initiative",
    description: "Improving healthcare access and quality in underserved communities.",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f",
    progress: 40,
    raised: "KES 400,000",
    goal: "KES 1,000,000",
    slug: "healthcare-initiative"
  }
];

interface FeaturedInitiativesProps {
  className?: string;
}

const FeaturedInitiatives = ({ className = "" }: FeaturedInitiativesProps) => {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <h4 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Our Programs</h4>
            <h2 className="text-3xl font-bold">Featured Initiatives</h2>
          </div>
          
          <Button asChild variant="ghost" className="mt-4 md:mt-0 group">
            <Link to="/initiatives" className="flex items-center">
              <span>View All Initiatives</span>
              <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((initiative) => (
            <InitiativeCard
              key={initiative.id}
              title={initiative.title}
              description={initiative.description}
              image={initiative.image}
              progress={initiative.progress}
              raised={initiative.raised}
              goal={initiative.goal}
              slug={initiative.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInitiatives;
