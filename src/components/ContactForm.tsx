'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([
          {
            name: formData.name,
            email: formData.workEmail,
            company: formData.firmName,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', workEmail: '', firmName: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-full bg-white border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors disabled:opacity-50"
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
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-full bg-white border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors disabled:opacity-50"
            />
          </div>
          <div>
            <input
              type="text"
              name="firmName"
              placeholder="Company name"
              value={formData.firmName}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-full bg-white border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors disabled:opacity-50"
            />
          </div>
          {submitStatus === 'success' && (
            <div className="text-green-600 text-center py-2">
              Thank you for joining our waitlist! We'll be in touch soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="text-red-600 text-center py-2">
              Something went wrong. Please try again later.
            </div>
          )}
          <motion.button
            type="submit"
            className="w-full btn-primary mt-6"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </motion.button>
        </form>
      </div>
    </section>
  );
}
