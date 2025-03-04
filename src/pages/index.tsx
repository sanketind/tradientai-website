import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
  try {
    return (
      <main className="min-h-screen">
        <Hero />
        <Features />
        <ContactForm />
        <Footer />
      </main>
    );
  } catch (error) {
    console.error('Error rendering Home:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Something went wrong. Please try again later.</p>
      </div>
    );
  }
};

export default Home; 