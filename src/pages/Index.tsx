
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeHero from '@/components/HomeHero';
import HomeFeatures from '@/components/HomeFeatures';
import HomeCallToAction from '@/components/HomeCallToAction';
import HomeContactInfo from '@/components/HomeContactInfo';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import DonateSection from '@/components/DonateSection';
import FeaturedInitiatives from '@/components/FeaturedInitiatives';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <HomeHero />
      <HomeFeatures />
      
      <FeaturedInitiatives />
      
      <StatsSection 
        title="Our Impact in Numbers"
        description="We're making measurable progress in our community"
        stats={[
          { value: "60+", label: "Community Projects" },
          { value: "₨ 10M+", label: "Funds Raised" },
          { value: "5,000+", label: "Lives Impacted" },
          { value: "24", label: "Partner Organizations" }
        ]}
      />
      
      <TestimonialsSection />
      <HomeCallToAction />
      <DonateSection />
      <HomeContactInfo />
      
      <Footer />
    </div>
  );
};

export default Index;
