import React from 'react';
import { motion } from 'framer-motion';

const SuccessMetrics = () => {
  const metrics = [
    {
      number: '100%',
      title: 'Call Coverage',
      description: 'Answer every inquiry, anytime'
    },
    {
      number: '75%',
      title: 'Multilingual Resolution',
      description: 'Instant support in 15+ languages'
    },
    {
      number: '90%',
      title: 'Booking Success',
      description: 'Effortless appointment scheduling'
    }
  ];

  return (
    <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Success That Drives Your Growth</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Measurable results that boost your bottom line</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {metrics.map((metric, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-8 rounded-xl bg-white transition-shadow"
          >
            <div className="mb-6">
              <div className="text-5xl md:text-6xl font-bold">
                <span className="text-gray-900">{metric.number.replace('%', '')}</span>
                <span className="bg-gradient-to-r from-[#F29DBF] to-[#EC4899] bg-clip-text text-transparent">%</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{metric.title}</h3>
            <p className="text-gray-600">{metric.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SuccessMetrics;