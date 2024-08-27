import React from 'react';
import { ChevronRight, Star, Zap, Target, Users } from 'lucide-react';

const AkaConsultingWebsite = () => {
  return (
    <div className="font-sans">
      <header className="bg-white p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-custom-brown">AKA Consulting</div>
        <nav className="space-x-4">
          
          <a href="#" className="text-custom-brown">Consulting</a>
          <a href="#" className="text-custom-brown">Events</a>
          <a href="#" className="text-custom-brown">About</a>
          <button className="bg-custom-orange text-white px-4 py-2 rounded">Contact Us</button>
        </nav>
      </header>

      <main>
        <section className="bg-custom-teal text-custom-brown p-12">
          <h1 className="text-5xl font-bold mb-4">PRODUCT CONSULTING EXPERTS</h1>
          <p className="text-xl mb-6">Make better decisions faster</p>
          <button className="bg-custom-orange text-white px-6 py-3 rounded flex items-center">
            Get Started Today <ChevronRight className="ml-2" />
          </button>
        </section>

        <section className="bg-custom-brown text-white p-8 flex justify-between items-center">
          <p className="text-lg">Trusted by these brands and organizations:</p>
          <div className="flex space-x-8">
            {['Amazon', 'Apple', 'Cisco', 'IBM', 'Roche'].map((brand) => (
              <div key={brand} className="text-custom-beige">{brand}</div>
            ))}
          </div>
        </section>

        <section className="p-12">
          <h2 className="text-3xl font-bold text-custom-brown mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-custom-beige p-6 rounded">
                <p className="text-custom-brown mb-4">"AKA Consulting helped us better understand our users and help us solve their problems better."</p>
                <p className="text-custom-orange">- Happy Client, CEO</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-custom-teal p-12">
          <h2 className="text-3xl font-bold text-custom-brown mb-8">Industry Expertise</h2>
          <div className="grid grid-cols-3 gap-8">
            {['Product Growth', 'Artificial Intelligence', 'Medical Software'].map((industry) => (
              <div key={industry} className="flex items-center">
                <Star className="text-custom-orange mr-4" />
                <span className="text-custom-brown">{industry}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="p-12">
          <h2 className="text-3xl font-bold text-custom-brown mb-8">Our Approach</h2>
          <div className="grid grid-cols-2 gap-8">
            {[
              { title: 'Experienced Practitioners', icon: <Users />, description: 'Our team brings years of hands-on experience to your projects.' },
              { title: 'Proven Methodologies', icon: <Star />, description: 'We use industry-tested approaches to ensure success.' },
              { title: 'Focused Implementations', icon: <Target />, description: 'We deliver targeted solutions that address your specific needs.' },
              { title: 'Develop Internal Capabilities', icon: <Zap />, description: 'We empower your team with the skills to drive ongoing success.' },
            ].map((item) => (
              <div key={item.title} className="flex">
                <div className="text-custom-orange mr-4">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-custom-brown mb-2">{item.title}</h3>
                  <p className="text-custom-brown">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-custom-teal p-12">
          <h2 className="text-3xl font-bold text-custom-brown mb-8">Other Ways We Help</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { title: 'Innovate Products Faster', icon: <Zap /> },
              { title: 'Insights Blog', icon: <Star /> },
              { title: 'Speaking and Writing', icon: <Users /> },
            ].map((item) => (
              <div key={item.title} className="flex items-center">
                <div className="text-custom-orange mr-4">{item.icon}</div>
                <span className="text-custom-brown font-bold">{item.title}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-custom-brown text-white p-8">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">AKA Consulting</h3>
            <p>Make better decisions faster</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul>
              <li>Product Strategy</li>
              <li>Product Management</li>
              <li>Product Marketing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Webinars</li>
              <li>Case Studies</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p>info@akaconsulting.com</p>
            <p>+1 (123) 456-7890</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AkaConsultingWebsite;