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
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      // Check if Supabase is properly configured
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        throw new Error('Contact form is temporarily unavailable. Please try again later.');
      }

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

      if (error) {
        if (error.code === '23505') { // Unique violation error code
          throw new Error('This email is already registered.');
        }
        throw error;
      }

      setSubmitStatus('success');
      setFormData({ name: '', workEmail: '', firmName: '' });
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again later.');
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
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
          Join the Waitlist
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-8">
          Secure early access to our AI voice agents and stay ahead of the competition
        </p>
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
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
            </button>
          </div>
        </form>

        {submitStatus === 'success' && (
          <div className="mt-6 p-4 bg-green-50 rounded-lg text-green-800 text-center">
            Thank you for joining our waitlist! We'll be in touch soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mt-6 p-4 bg-red-50 rounded-lg text-red-800 text-center">
            {errorMessage}
          </div>
        )}
      </div>
    </section>
  );
}
