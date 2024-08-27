import React from 'react';
import { User, Users, Zap, Brain } from 'lucide-react';

const AkaConsultingWebsite = () => {
  return (
    <div className="min-h-screen bg-custom-teal text-custom-brown font-sans">
      <header className="bg-custom-orange p-6">
        <h1 className="text-3xl font-bold text-custom-brown">AKA Consulting</h1>
        <p className="text-xl text-custom-beige">Product Consultants</p>
      </header>
      
      <main className="container mx-auto py-12 px-4">
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-custom-orange">About Me</h2>
          <p className="text-lg">
            I'm a seasoned product consultant specializing in mentoring junior product managers, 
            optimizing engineering team performance, boosting user engagement, and leveraging AI 
            to create superior products.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-custom-orange">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard 
              icon={<User className="w-8 h-8 text-custom-beige" />}
              title="Mentoring Junior PMs"
              description="Guiding the next generation of product managers to excel in their roles."
            />
            <ServiceCard 
              icon={<Users className="w-8 h-8 text-custom-beige" />}
              title="Engineering Team Optimization"
              description="Enhancing productivity and collaboration in engineering teams."
            />
            <ServiceCard 
              icon={<Zap className="w-8 h-8 text-custom-beige" />}
              title="User Engagement Strategies"
              description="Devising and implementing strategies to boost user engagement and retention."
            />
            <ServiceCard 
              icon={<Brain className="w-8 h-8 text-custom-beige" />}
              title="AI Integration"
              description="Incorporating AI technologies to create innovative and efficient products."
            />
          </div>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-custom-orange">Contact Me</h2>
          <p className="text-lg">
            Ready to elevate your product strategy? Let's connect and discuss how I can help 
            your team and products thrive.
          </p>
          <button className="mt-4 bg-custom-beige text-white py-2 px-4 rounded hover:bg-custom-orange transition-colors">
            Get in Touch
          </button>
        </section>
      </main>
      
      <footer className="bg-custom-orange p-6 mt-12 text-center text-custom-brown">
        <p>&copy; 2024 AKA Consulting. All rights reserved.</p>
      </footer>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-custom-beige">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-2 text-custom-brown">{title}</h3>
    </div>
    <p>{description}</p>
  </div>
);

export default AkaConsultingWebsite;
