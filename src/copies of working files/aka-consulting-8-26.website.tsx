import React from 'react';
import { ChevronRight, Star, Zap, Target, Users } from 'lucide-react';
import kittenLogo from './kitten_logo.jpeg';

const AkaLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" className="h-16 w-auto">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{stopColor:"#C79971", stopOpacity:1}} />
        <stop offset="100%" style={{stopColor:"#9F6848", stopOpacity:1}} />
      </linearGradient>
    </defs>
    <rect width="300" height="100" fill="#514741" rx="10" ry="10"/>
    <text x="20" y="65" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="bold" fill="url(#grad1)">AKA</text>
    <text x="130" y="65" fontFamily="Arial, sans-serif" fontSize="32" fill="#DDD0C1">Consulting</text>
    <path d="M10 80 Q150 120 290 80" stroke="#838799" strokeWidth="4" fill="none"/>
  </svg>
);

const AkaConsultingWebsite = () => {
  return (
    <div className="font-sans bg-aka-beige">
      <header className="bg-aka-blue-gray px-4 flex justify-between items-center h-20">
        <AkaLogo />
        <nav className="space-x-4 flex items-center">
          <a href="#" className="text-aka-beige hover:text-aka-light-brown transition-colors">Consulting</a>
          <a href="#" className="text-aka-beige hover:text-aka-light-brown transition-colors">Events</a>
          <a href="#" className="text-aka-beige hover:text-aka-light-brown transition-colors">About</a>
          <button className="bg-aka-medium-brown text-aka-beige px-4 py-2 rounded hover:bg-aka-light-brown transition-colors">Contact Us</button>
        </nav>
      </header>

      <main>
        <section className="bg-aka-light-brown text-aka-dark-brown p-12">
          <div className="flex items-center space-x-8 mb-6">
            <img src={kittenLogo} alt="Kitten Logo" className="w-48 h-48 object-contain" />
            <h1 className="text-5xl font-bold">Product Consulting Experts</h1>
          </div>
          <p className="text-xl mb-6">Helping you make better decisions, faster</p>
          <button className="bg-aka-medium-brown text-aka-beige px-6 py-3 rounded flex items-center hover:bg-aka-dark-brown transition-colors">
            Get Started <ChevronRight className="ml-2" />
          </button>
        </section>

        <section className="bg-aka-dark-brown text-aka-beige p-8 flex justify-between items-center">
          <p className="text-lg">Trusted by these brands and organizations:</p>
          <div className="flex space-x-8">
            {['Amazon', 'Apple', 'Cisco', 'IBM', 'Roche'].map((brand) => (
              <div key={brand} className="text-aka-light-brown">{brand}</div>
            ))}
          </div>
        </section>

        <section className="p-12 bg-aka-beige">
          <h2 className="text-3xl font-bold text-aka-dark-brown mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-aka-light-brown p-6 rounded bg-aka-beige">
                <p className="text-aka-dark-brown mb-4">"AKA Consulting helped us better understand our users and help us solve their problems better."</p>
                <p className="text-aka-medium-brown">- Happy Client, CEO</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-aka-blue-gray p-12">
          <h2 className="text-3xl font-bold text-aka-beige mb-8">Industry Expertise</h2>
          <div className="grid grid-cols-3 gap-8">
            {['Product Growth', 'Artificial Intelligence', 'Medical Software'].map((industry) => (
              <div key={industry} className="flex items-center">
                <Star className="text-aka-light-brown mr-4" />
                <span className="text-aka-beige">{industry}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="p-12 bg-aka-beige">
          <h2 className="text-3xl font-bold text-aka-dark-brown mb-8">Our Approach</h2>
          <div className="grid grid-cols-2 gap-8">
            {[
              { title: 'Experienced Practitioners', icon: <Users />, description: 'Our team brings years of hands-on experience to your projects.' },
              { title: 'Proven Methodologies', icon: <Star />, description: 'We use industry-tested approaches to ensure success.' },
              { title: 'Focused Implementations', icon: <Target />, description: 'We deliver targeted solutions that address your specific needs.' },
              { title: 'Develop Internal Capabilities', icon: <Zap />, description: 'We empower your team with the skills to drive ongoing success.' },
            ].map((item) => (
              <div key={item.title} className="flex">
                <div className="text-aka-medium-brown mr-4">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-aka-dark-brown mb-2">{item.title}</h3>
                  <p className="text-aka-dark-brown">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-aka-light-brown p-12">
          <h2 className="text-3xl font-bold text-aka-dark-brown mb-8">Other Ways We Help</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { title: 'Innovate Products Faster', icon: <Zap /> },
              { title: 'Insights Blog', icon: <Star /> },
              { title: 'Speaking and Writing', icon: <Users /> },
            ].map((item) => (
              <div key={item.title} className="flex items-center">
                <div className="text-aka-medium-brown mr-4">{item.icon}</div>
                <span className="text-aka-dark-brown font-bold">{item.title}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-aka-dark-brown text-aka-beige p-8">
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