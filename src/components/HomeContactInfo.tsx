
import React from 'react';
import { Phone, Mail, Home } from 'lucide-react';

const HomeContactInfo = () => {
  return (
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
  );
};

export default HomeContactInfo;
