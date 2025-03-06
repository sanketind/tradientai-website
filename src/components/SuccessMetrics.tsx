import React from 'react';

const SuccessMetrics = () => {
  const metrics = [
    {
      number: '100%',
      title: 'Call Coverage',
      description: 'Answer every inquiry, anytime'
    },
    {
      number: '50%',
      title: 'Faster Follow-Ups',
      description: 'Cut response time with automation'
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
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">Success That Drives Your Growth</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-10">Measurable results that boost your bottom line</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((metric, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#EC4899] mb-2">{metric.number}</div>
            <h3 className="text-lg font-semibold mb-1 text-gray-900">{metric.title}</h3>
            <p className="text-gray-600">{metric.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessMetrics;