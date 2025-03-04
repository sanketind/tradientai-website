import React from 'react';
import type { NextPage } from 'next';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <ContactForm />
      <Footer />
    </main>
  );
};

// This ensures the page is statically generated at build time
export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 60, // Regenerate page every 60 seconds
  };
};

export default Home; 