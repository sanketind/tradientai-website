'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const rotatingWords = ['Manufacturers.', 'Importers.', 'Suppliers.', 'Traders.'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-gradient section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <div className="mb-2">AI Customer Service</div>
          <div>
            Agents for
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[currentWordIndex]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block ml-3 text-[#F29DBF]"
              >
                {rotatingWords[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Streamline Operations and Cut Costs with AI Voice Agents
        </p>
        <motion.button 
          onClick={scrollToContact}
          className="btn-primary"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Join waitlist
        </motion.button>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            'Answering calls 24/7',
            'Managing Follow-Ups',
            'Scheduling Appointments',
            'Handling Multi-Language Inquiries'
          ].map((feature) => (
            <span key={feature} className="bg-gray-100 px-4 py-2 rounded-full text-sm">
              {feature}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <Image 
          src="/images/dashboard.png"
          alt="Dashboard"
          width={1200}
          height={675}
          priority
          className="rounded-2xl border border-gray-200"
        />
      </div>
    </section>
  );
}
