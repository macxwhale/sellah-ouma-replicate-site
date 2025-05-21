
import React from 'react';
import TestimonialCard from './TestimonialCard';

interface TestimonialsSectionProps {
  className?: string;
}

const testimonials = [
  {
    quote: "The educational support program has transformed our school and given our students hope for a better future.",
    author: "Mary Wangari",
    role: "Headteacher, Zawadi Primary School"
  },
  {
    quote: "The women's empowerment initiative helped me start my business and support my family. I'm now financially independent.",
    author: "Jane Muthoni",
    role: "Small Business Owner"
  },
  {
    quote: "The healthcare outreach program brought essential medical services to our village for the first time in years.",
    author: "James Omondi",
    role: "Community Leader"
  }
];

const TestimonialsSection = ({ className = "" }: TestimonialsSectionProps) => {
  return (
    <section className={`py-16 md:py-24 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h4 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Testimonials</h4>
          <h2 className="text-3xl font-bold mb-4">What People Say</h2>
          <p className="text-muted-foreground">
            Hear from the community members whose lives have been impacted by our initiatives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
