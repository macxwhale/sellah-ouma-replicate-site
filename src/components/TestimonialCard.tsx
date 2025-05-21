
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { QuoteIcon } from './icons/QuoteIcon';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

const TestimonialCard = ({ quote, author, role, image }: TestimonialCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-8 flex flex-col flex-grow">
        <QuoteIcon className="h-8 w-8 text-primary/20 mb-4" />
        
        <p className="text-foreground mb-6 flex-grow">
          "{quote}"
        </p>
        
        <div className="flex items-center">
          {image && (
            <div className="flex-shrink-0 mr-4">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <img src={image} alt={author} className="h-full w-full object-cover" />
              </div>
            </div>
          )}
          <div>
            <h4 className="font-medium">{author}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
