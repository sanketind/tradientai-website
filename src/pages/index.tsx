import React from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('../components/Hero'), {
  ssr: true,
});

const Features = dynamic(() => import('../components/Features'), {
  ssr: true,
});

const ContactForm = dynamic(() => import('../components/ContactForm'), {
  ssr: true,
});

const Footer = dynamic(() => import('../components/Footer'), {
  ssr: true,
});

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