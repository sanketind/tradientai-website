'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  workEmail: string;
  firmName: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    workEmail: '',
    firmName: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact-form" className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Join the Waitlist
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-full bg-white border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              name="workEmail"
              placeholder="Work email"
              value={formData.workEmail}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-full bg-white border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors"
            />
          </div>
          <div>
            <input
              type="text"
              name="firmName"
              placeholder="Firm name"
              value={formData.firmName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-full bg-white border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors"
            />
          </div>
          <motion.button
            type="submit"
            className="w-full btn-primary mt-6"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Submit
          </motion.button>
        </form>
      </div>
    </section>
  );
}
