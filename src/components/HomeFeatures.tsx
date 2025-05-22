
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, Heart } from 'lucide-react';

const HomeFeatures = () => {
  return (
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
  );
};

export default HomeFeatures;
